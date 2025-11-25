import React, {
  useRef,
  useState,
  useEffect,
  type ReactNode,
  type MouseEventHandler,
  type UIEvent,
} from "react";
import { motion, useInView } from "motion/react";

interface AnimatedItemProps {
  children: ReactNode;
  delay?: number;
  index: number;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({
  children,
  delay = 0,
  index,
  onMouseEnter,
  onClick,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5, once: false });
  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.2, delay }}
      className="mb-4 cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

interface AnimatedListProps {
  items?: string[];
  onItemSelect?: (item: string, index: number) => void;
  showGradients?: boolean;
  enableArrowNavigation?: boolean;
  className?: string;
  itemClassName?: string;
  displayScrollbar?: boolean;
  initialSelectedIndex?: number;
}

const AnimatedList: React.FC<AnimatedListProps> = ({
  items = [
    {
      icon: "🎉",
      title: "Harvest Festival",
      month: "September",
      description:
        "Annual celebration of agricultural traditions with music, dance, and local food. Join us for three days of festivities featuring traditional folk performances, artisan markets, and the famous village feast.",
      participants: "5,000+",
      duration: "3 days",
      since: "Since 1723",
    },
    {
      icon: "🎄",
      title: "Winter Fair",
      month: "December",
      description:
        "Traditional Christmas market with handicrafts and seasonal treats. Experience the magic of winter with ice sculptures, carol singing, and the beloved Santa parade through historic streets.",
      participants: "3,500+",
      duration: "2 weeks",
      since: "Since 1854",
    },
    {
      icon: "🌸",
      title: "Spring Bloom",
      month: "May",
      description:
        "Flower festival celebrating nature with garden tours and workshops. Explore stunning private gardens, attend horticultural seminars, and participate in the community planting initiative.",
      participants: "2,800+",
      duration: "1 week",
      since: "Since 1945",
    },
    {
      icon: "🎵",
      title: "Music Days",
      month: "July",
      description:
        "Week-long festival featuring local and international musicians. From classical concerts in the church to jazz nights in the park, celebrate diverse musical traditions.",
      participants: "4,200+",
      duration: "1 week",
      since: "Since 1987",
    },
    {
      icon: "🎨",
      title: "Arts & Crafts Fair",
      month: "June",
      description:
        "Showcase of local artisans and craftspeople displaying their finest works. Watch live demonstrations, purchase unique handmade items, and participate in creative workshops for all ages.",
      participants: "2,200+",
      duration: "3 days",
      since: "Since 1998",
    },
    {
      icon: "🏃",
      title: "Village Marathon",
      month: "October",
      description:
        "Annual running event through scenic countryside routes. Choose from 5K, 10K, half-marathon, or full marathon distances. All proceeds support local youth sports programs.",
      participants: "1,800+",
      duration: "1 day",
      since: "Since 2005",
    },
    {
      icon: "📚",
      title: "Literary Festival",
      month: "April",
      description:
        "Celebration of books and storytelling with author readings, book signings, and writing workshops. Meet renowned authors, discover new voices, and join community book clubs.",
      participants: "1,500+",
      duration: "5 days",
      since: "Since 2012",
    },
    {
      icon: "🍷",
      title: "Wine & Gastronomy Week",
      month: "August",
      description:
        "Culinary celebration featuring local wines, traditional cuisine, and cooking demonstrations. Enjoy wine tastings from regional vineyards and chef-led masterclasses.",
      participants: "3,100+",
      duration: "1 week",
      since: "Since 1989",
    },
  ],
  onItemSelect,
  showGradients = true,
  enableArrowNavigation = true,
  className = "",
  itemClassName = "",
  displayScrollbar = true,
  initialSelectedIndex = -1,
}) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] =
    useState<number>(initialSelectedIndex);
  const [keyboardNav, setKeyboardNav] = useState<boolean>(false);
  const [topGradientOpacity, setTopGradientOpacity] = useState<number>(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState<number>(1);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } =
      e.target as HTMLDivElement;
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(
      scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1)
    );
  };

  useEffect(() => {
    if (!enableArrowNavigation) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || (e.key === "Tab" && !e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.min(prev + 1, items.length - 1));
      } else if (e.key === "ArrowUp" || (e.key === "Tab" && e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter") {
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          e.preventDefault();
          if (onItemSelect) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            onItemSelect(items[selectedIndex], selectedIndex);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

  useEffect(() => {
    if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
    const container = listRef.current;
    const selectedItem = container.querySelector(
      `[data-index="${selectedIndex}"]`
    ) as HTMLElement | null;
    if (selectedItem) {
      const extraMargin = 50;
      const containerScrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const itemTop = selectedItem.offsetTop;
      const itemBottom = itemTop + selectedItem.offsetHeight;
      if (itemTop < containerScrollTop + extraMargin) {
        container.scrollTo({ top: itemTop - extraMargin, behavior: "smooth" });
      } else if (
        itemBottom >
        containerScrollTop + containerHeight - extraMargin
      ) {
        container.scrollTo({
          top: itemBottom - containerHeight + extraMargin,
          behavior: "smooth",
        });
      }
    }
    setKeyboardNav(false);
  }, [selectedIndex, keyboardNav]);

  return (
    <div className={`relative w-[900px] ${className}`}>
      <div
        ref={listRef}
        className={`max-h-[65vh] overflow-y-auto p-4 ${
          displayScrollbar
            ? "[&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-track]:bg-[#060010] [&::-webkit-scrollbar-thumb]:bg-[#222] [&::-webkit-scrollbar-thumb]:rounded-[4px]"
            : "scrollbar-hide"
        }`}
        onScroll={handleScroll}
        style={{
          scrollbarWidth: displayScrollbar ? "thin" : "none",
          scrollbarColor: "#222 #060010",
        }}
      >
        {items.map((item, index) => (
          <AnimatedItem
            key={index}
            delay={0.1}
            index={index}
            onMouseEnter={() => setSelectedIndex(index)}
            onClick={() => {
              setSelectedIndex(index);
              if (onItemSelect) {
                onItemSelect(item, index);
              }
            }}
          >
            <div
              className={` max-w-[900px] h-full rounded-4xl backface-hidden flex items-center gap-3 lg:gap-8 text-[#060010] backdrop-blur-3xl p-6 md:p-9  border-1  bg-white/5 border-[#625970] ${itemClassName}`}
            >
              <div className="flex items-start gap-3 lg:gap-6">
                <div className="text-3xl sm:text-4xl md:text-6xl">
                  {item.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-white/95">
                      {item.title}
                    </h3>
                    <span className="px-3 py-1 bg-[#d468fb]/20 border border-[#d468fb]/50 rounded-full text-sm font-semibold text-[#d468fb]">
                      {item.month}
                    </span>
                  </div>
                  <p className="text-white/70 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-white/50">
                    <span>👥</span>
                    <span className="font-semibold">
                      {item.participants} participants
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedItem>
        ))}
      </div>
      {showGradients && (
        <>
          <div
            className="absolute top-0 left-0 right-0 h-[50px] bg-gradient-to-b from-[#060010] to-transparent pointer-events-none transition-opacity duration-300 ease"
            style={{ opacity: topGradientOpacity }}
          ></div>
          <div
            className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#060010] to-transparent pointer-events-none transition-opacity duration-300 ease"
            style={{ opacity: bottomGradientOpacity }}
          ></div>
        </>
      )}
    </div>
  );
};

export default AnimatedList;
