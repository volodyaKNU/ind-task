import Header from "./components/Header";
import { TbBackground } from "react-icons/tb";
import AnimatedContent from "./components/AnimatedContent";
import ClickSpark from "./components/ClickSpark";
import SplitText from "./components/SplitText";
import Footer from "./components/Footer";
import ShinyText from "./components/ShinyText";
import FloatingLines from "./components/FloatingLines";
import CircularGallery from "./components/CircularGallery";
import { BlobUnderlay } from "./components/Blob";
import { useState } from "react";
import AnimatedList from "./components/AnimatedList";
import LogoLoop from "./components/LogoLoop";

const techLogos = [
  // Дія
  {
    node: (
      <div
        key={1}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:border-[#d468fb]/50 transition-all"
      >
        <div className="text-5xl mb-4">🏆</div>
        <div className="text-2xl font-bold text-[#d468fb] mb-2">2023</div>
        <h4 className="text-lg font-bold mb-2">Best Small Town</h4>
        <p className="text-sm text-white/50">National Tourism Board</p>
      </div>
    ),
    title: "Next.js",
    href: "https://nextjs.org",
  },

  {
    node: (
      <div
        key={1}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:border-[#d468fb]/50 transition-all "
      >
        <div className="text-5xl mb-4">🏆</div>
        <div className="text-2xl font-bold text-[#d468fb] mb-2">2022</div>
        <h4 className="text-lg font-bold mb-2">Green Village Award</h4>
        <p className="text-sm text-white/50">Environmental Agency</p>
      </div>
    ),
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: (
      <div
        key={1}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:border-[#d468fb]/50 transition-all"
      >
        <div className="text-5xl mb-4">🏆</div>
        <div className="text-2xl font-bold text-[#d468fb] mb-2">2021</div>
        <h4 className="text-lg font-bold mb-2">Digital Innovation</h4>
        <p className="text-sm text-white/50">Tech Ministry</p>
      </div>
    ),
    title: "Dia",
    href: "//",
  },
  {
    node: (
      <div
        key={1}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:border-[#d468fb]/50 transition-all"
      >
        <div className="text-5xl mb-4">🏆</div>
        <div className="text-2xl font-bold text-[#d468fb] mb-2">2020</div>
        <h4 className="text-lg font-bold mb-2">Cultural Heritage</h4>
        <p className="text-sm text-white/50">UNESCO Recognition</p>
      </div>
    ),
    title: "React",
    href: "https://react.dev",
  },
];

const timeline = [
  {
    year: "1421",
    title: "Founding of the Settlement",
    text: "The village was founded by settlers seeking fertile land near the river.",
    detailedDescription:
      "A group of pioneer families established the first dwellings along the riverbank, attracted by fertile soil and abundant natural resources. This marked the birth of a small agricultural community that would gradually develop into a thriving village.",
    reverse: false,
  },
  {
    year: "1789",
    title: "Construction of the Central Church",
    text: "Construction of the central church that became the heart of community life.",
    detailedDescription:
      "The building of the church unified residents and formed a cultural and spiritual center. It hosted not only religious ceremonies but also town gatherings, festivals, and educational events, strengthening the social fabric of the emerging settlement.",
    reverse: true,
  },
  {
    year: "1891",
    title: "Opening of the Railway Station",
    text: "Opening of the railway station connected the village to major cities.",
    detailedDescription:
      "The new railway line transformed the village into an important transit point. Trade flourished, local products reached distant markets, and the population grew as new opportunities attracted craftsmen, merchants, and travelers.",
    reverse: false,
  },
  {
    year: "1945",
    title: "Post-War Reconstruction",
    text: "Community rebuilt infrastructure and established new traditions.",
    detailedDescription:
      "After years of conflict and hardship, villagers united to restore homes, roads, and community buildings. This difficult period inspired new cultural traditions, annual commemorations, and cooperative initiatives that shaped the village’s modern identity.",
    reverse: true,
  },
  {
    year: "1987",
    title: "Opening of the Cultural Center",
    text: "Opening of the modern cultural center for arts and education.",
    detailedDescription:
      "The cultural center introduced art workshops, exhibitions, and educational programs, becoming a hub for creativity and learning. It played a major role in preserving local heritage while inspiring younger generations to explore arts and sciences.",
    reverse: false,
  },
  {
    year: "2024",
    title: "Smart Village Initiative",
    text: "Launch of smart village initiative with modern technologies.",
    detailedDescription:
      "The community adopted digital infrastructure, renewable energy systems, and innovative public services. Smart sensors, e-governance tools, and eco-focused improvements marked a new era of technological and environmental sustainability.",
    reverse: true,
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <div className="font-sans w-full max-w-screen overflow-hidden bg-[#060010]">
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Header />
        <div
          style={{
            maxWidth: "100vw",
            overflow: "hidden",
            width: "100%",
            height: "100vh",
            top: 0,
            left: 0,
            position: "relative",
          }}
        >
          <FloatingLines
            enabledWaves={["top", "middle", "bottom"]}
            lineCount={[4, 7, 6]}
            lineDistance={[3, 6, 4]}
            bendRadius={5.0}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
          />

          <div className="w-full flex flex-col items-center justify-center absolute top-[50%] lg:top-[55%] translate-y-[-50%] text-white pointer-events-none ">
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse
              duration={1.2}
              ease="power3.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.3}
            >
              <div className="flex gap-x-2 p-3 xl:p-4  rounded-full items-center px-5 xl:px-7 mb-14 lg:mb-5 backdrop-blur-md border-1 bg-white/5 border-[#625970]">
                <TbBackground />
                <div className="text-shadow-lg text-lg xl:text-xl font-semibold">
                  Government structure
                </div>
              </div>
            </AnimatedContent>
            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              duration={1.2}
              ease="power3.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.3}
            >
              <div className="md:max-w-[650px] lg:max-w-[900px] xl:max-w-[1200px] text-5xl lg:text-6xl xl:text-8xl font-bold text-center text-shadow-lg px-4">
                Rooted in <span className="text-[#d468fb]">Tradition,</span>{" "}
                Lined Through Innovation
              </div>
            </AnimatedContent>
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              duration={1.2}
              ease="power3.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.3}
            >
              <div className="w-full  p-10 xl:pt-20 flex max-sm:flex-col gap-14 lg:gap-36 justify-center">
                <button
                  onClick={() => {
                    window.scrollBy({
                      top: window.innerHeight,
                      behavior: "smooth",
                    });
                  }}
                  className="text-shadow-lg text-base lg:text-lg xl:text-2xl font-semibold pointer-events-auto rounded-full text-[#060010] backdrop-blur-sm  p-3 px-16 xl:p-4 xl:px-20 border-1 bg-white/80  cursor-pointer hover:bg-white/80 transition-all duration-300 hover:text-[#060010]"
                >
                  Investigate
                </button>
                <button
                  onClick={() => {
                    window.scrollBy({
                      top: window.innerHeight,
                      behavior: "smooth",
                    });
                  }}
                  className=" text-shadow-lg lg:text-lg xl:text-2xl font-semibold pointer-events-auto rounded-full backdrop-blur-sm p-3 px-16 xl:p-4 xl:px-20 border-1 bg-white/5 border-[#625970]  cursor-pointer hover:bg-white/80 transition-all duration-300 hover:text-[#060010]"
                >
                  Contact Tourism Office
                </button>
              </div>
            </AnimatedContent>
          </div>
        </div>
        <div className="max-w-screen h-fit bg-[#060010]">
          <section>
            <div className="flex justify-center px-3">
              <SplitText
                text="Some information about us!"
                className="pt-24 text-white text-3xl md:text-5xl lg:text-7xl font-bold text-center text-shadow-lg"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </div>
            <p className="text-white/65  text-center pt-1.5 md:pt-7 pb-11 text-3xl">
              <ShinyText
                className="text-xl px-4 md:text-2xl xl:!text-3xl max-w-[1000px]"
                text="Where centuries of family bonds meet cutting-edge digital transformation. A community that honors its past while embracing the future."
              />
            </p>

            <section className="relative py-16 px-8 z-10">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-12 gap-6">
                  {/* Row 1 */}
                  {/* Population - Large Square */}
                  <div
                    className="col-span-12 md:col-span-6 lg:col-span-5 row-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-[#d468fb]/50 transition-all hover:translate-y-[-5px] relative overflow-hidden group"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  >
                    <div className="absolute top-0 right-0 text-[180px] opacity-5 group-hover:opacity-10 transition-opacity">
                      👥
                    </div>
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-6xl font-extrabold text-[#d468fb] mb-2">
                            12,584
                          </div>
                          <div className="px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 font-bold text-sm">
                            +3.2% ↗
                          </div>
                        </div>
                        <div className="text-2xl font-bold mb-3 text-white/95">
                          Residents
                        </div>
                        <div className="text-white/60 text-sm mb-6">
                          Growing community with families spanning 5 generations
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3 text-sm">
                        <div className="text-center">
                          <div className="text-3xl mb-1">👨‍👩‍👧‍👦</div>
                          <div className="font-bold text-white">3,200</div>
                          <div className="text-white/50 text-xs">Families</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl mb-1">🎓</div>
                          <div className="font-bold text-white">2,100</div>
                          <div className="text-white/50 text-xs">Students</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl mb-1">👴</div>
                          <div className="font-bold text-white">1,800</div>
                          <div className="text-white/50 text-xs">Seniors</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-span-12 md:col-span-6 lg:col-span-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-[#d468fb]/50 transition-all hover:translate-y-[-5px] relative overflow-hidden group"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  >
                    <div className="absolute top-0 right-0 text-[100px] opacity-5 group-hover:opacity-10 transition-opacity">
                      🗺️
                    </div>
                    <div className="relative z-10">
                      <div className="text-5xl font-extrabold text-[#d468fb] mb-2">
                        45 km²
                      </div>
                      <div className="text-xl font-bold mb-4 text-white/95">
                        Total Area
                      </div>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-white/60">Urban</span>
                            <span className="font-semibold text-white/95">
                              18 km² (40%)
                            </span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-2">
                            <div
                              className="bg-[#d468fb] h-2 rounded-full transition-all"
                              style={{ width: "40%" }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-white/60">Agricultural</span>
                            <span className="font-semibold text-white/95">
                              27 km² (60%)
                            </span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-2">
                            <div
                              className="bg-green-500 h-2 rounded-full transition-all"
                              style={{ width: "60%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/20 text-sm text-white/50">
                        12 distinct districts
                      </div>
                    </div>
                  </div>

                  {/* Heritage - Tall Rectangle */}
                  <div
                    className="col-span-6 md:col-span-3 lg:col-span-3 row-span-2 bg-gradient-to-br from-[#d468fb]/20 to-[#8b3ddb]/20 backdrop-blur-xl border border-[#d468fb]/30 rounded-3xl p-8 hover:border-[#d468fb]/60 transition-all hover:scale-[1.02] relative overflow-hidden"
                    style={{ minHeight: "300px" }}
                  >
                    <div className="absolute -bottom-10 -right-10 text-[150px] opacity-20">
                      📅
                    </div>
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        <div className="text-6xl font-extrabold text-white mb-3">
                          605
                        </div>
                        <div className="text-2xl font-bold mb-2 text-white/95">
                          Years
                        </div>
                        <div className="text-white/70 text-sm mb-4">
                          of Heritage
                        </div>
                      </div>
                      <div>
                        <div className="pt-4 border-t border-white/20">
                          <div className="text-xs text-white/50 mb-1">
                            Founded in
                          </div>
                          <div className="text-3xl font-bold text-[#d468fb]">
                            1421
                          </div>
                        </div>
                        <div className="mt-3 text-xs text-white/50">
                          Since 14th Century
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Business - Medium Rectangle */}
                  <div
                    className="col-span-6 md:col-span-3 lg:col-span-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 md:p-8 hover:border-[#d468fb]/50 transition-all hover:translate-y-[-5px] relative overflow-hidden group"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  >
                    <div className="absolute -bottom-3 -right-3 text-[90px] opacity-5 group-hover:opacity-10 transition-opacity">
                      🏪
                    </div>
                    <div className="relative z-10">
                      <div className="text-5xl font-extrabold text-[#d468fb] mb-2">
                        230+
                      </div>
                      <div className="text-xl font-bold mb-4 text-white/95">
                        Businesses
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm text-white/95">
                        <div className="flex items-center justify-between gap-2">
                          <span>🏪</span>
                          <div className="text-right">
                            <div className="font-bold">85</div>
                            <div className="text-white/50 text-xs">Retail</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <span>🍽️</span>
                          <div className="text-right">
                            <div className="font-bold">42</div>
                            <div className="text-white/50 text-xs">Food</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <span>⚙️</span>
                          <div className="text-right">
                            <div className="font-bold">68</div>
                            <div className="text-white/50 text-xs">
                              Services
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <span>🏭</span>
                          <div className="text-right">
                            <div className="font-bold">35</div>
                            <div className="text-white/50 text-xs">
                              Industry
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/20">
                        <span className="text-xs text-green-400 font-semibold">
                          +15% annual growth
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-span-6 md:col-span-6 lg:col-span-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-[#d468fb]/50 transition-all hover:translate-y-[-5px] relative overflow-hidden group"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  >
                    <div className="absolute top-0 right-0 text-[80px] opacity-5 group-hover:opacity-10 transition-opacity">
                      🎓
                    </div>
                    <div className="relative z-10">
                      <div className="text-5xl font-extrabold text-[#d468fb] mb-2">
                        8
                      </div>
                      <div className="text-lg font-bold mb-3 text-white/95">
                        Schools
                      </div>
                      <div className="space-y-1 text-xs mb-3 text-white/95">
                        <div className="flex justify-between">
                          <span className="text-white/60">
                            📚 Primary & Secondary
                          </span>
                          <span className="font-semibold">5</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">🎨 Art Centers</span>
                          <span className="font-semibold">2</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">📖 Library</span>
                          <span className="font-semibold">1</span>
                        </div>
                      </div>
                      <div className="pt-3 border-t border-white/20">
                        <div className="text-2xl font-bold text-[#d468fb]">
                          3,200
                        </div>
                        <div className="text-xs text-white/50">Students</div>
                      </div>
                    </div>
                  </div>

                  {/* Internet - Wide Featured Card */}
                  <div className="col-span-12 lg:col-span-9 bg-gradient-to-r from-[#d468fb]/10 via-[#8b3ddb]/10 to-[#d468fb]/10 backdrop-blur-xl border border-[#d468fb]/30 rounded-3xl p-8 hover:border-[#d468fb]/60 transition-all relative overflow-hidden">
                    <div className="absolute top-0 right-0 text-[150px] opacity-5">
                      📡
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between gap-8 flex-wrap">
                        <div className="flex-1 min-w-[300px]">
                          <div className="flex items-baseline gap-3 mb-2">
                            <div className="text-5xl font-extrabold text-[#d468fb]">
                              95%
                            </div>
                            <div className="text-2xl font-bold text-white/95">
                              Coverage
                            </div>
                          </div>
                          <div className="text-white/60 mb-6 text-sm">
                            Fiber-optic network across the village
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div>
                              <div className="text-2xl font-bold text-white mb-1">
                                1 Gbps
                              </div>
                              <div className="text-xs text-white/50">
                                Max Speed
                              </div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-white mb-1">
                                99.9%
                              </div>
                              <div className="text-xs text-white/50">
                                Uptime
                              </div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-white mb-1">
                                24/7
                              </div>
                              <div className="text-xs text-white/50">
                                Support
                              </div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-white mb-1">
                                Free
                              </div>
                              <div className="text-xs text-white/50">WiFi</div>
                            </div>
                          </div>
                        </div>

                        <div className="flex-shrink-0">
                          <div className="relative">
                            <svg
                              className="transform -rotate-90"
                              width="140"
                              height="140"
                            >
                              <circle
                                cx="70"
                                cy="70"
                                r="55"
                                stroke="rgba(255,255,255,0.1)"
                                strokeWidth="10"
                                fill="none"
                              />
                              <circle
                                cx="70"
                                cy="70"
                                r="55"
                                stroke="#d468fb"
                                strokeWidth="10"
                                fill="none"
                                strokeDasharray={`${2 * Math.PI * 55 * 0.95} ${
                                  2 * Math.PI * 55
                                }`}
                                strokeLinecap="round"
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-3xl font-bold text-[#d468fb]">
                                  95%
                                </div>
                                <div className="text-xs text-white/50">
                                  Online
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
          <section
            style={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <div className="w-full mt-12 bg-[#130d1c] relative">
              <BlobUnderlay className="absolute top-[150px] left-[120px] z-0   !w-[500px]" />
              <BlobUnderlay className="absolute top-[300px] left-[55%] z-0  !w-[30vw]" />
              <div className="flex justify-center">
                <SplitText
                  text="Our Journey Through Time"
                  className="pt-24 text-white text-3xl md:text-5xl lg:text-7xl font-bold text-center text-shadow-lg"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                />
              </div>
              <p className="text-white/65 text-center pt-1.5 md:pt-7 pb-11 text-3xl">
                <ShinyText
                  className="text-xl md:text-2xl xl:!text-3xl"
                  text="605 years of heritage and progress"
                />
              </p>

              <div className="pt-42 ">
                <div className="relative">
                  <div className="absolute w-full overflow-y-auto px-11 h-[255px] -translate-y-[127px] flex justify-between gap-2.5">
                    {timeline.map((item, i) => (
                      <div
                        key={i}
                        className={`flex flex-col ${
                          item.reverse ? "flex-col-reverse" : ""
                        } items-center gap-2 cursor-pointer min-w-[200px]`}
                        onClick={() => {
                          setCurrentIndex(i);
                        }}
                      >
                        <div
                          className={`${
                            i === currentIndex && "text-white/95"
                          } max-w-[200px] text-white/70 text-center transition-all duration-300`}
                        >
                          {item.text}
                        </div>

                        <div
                          className={`${
                            i === currentIndex && "!bg-white/80 !text-[#060010]"
                          } mb-2 text-white/95 text-shadow-lg px-4 font-semibold pointer-events-auto rounded-full backdrop-blur-sm border-1 bg-white/5 border-[#625970] cursor-pointer hover:bg-white/80 transition-all duration-300 hover:text-[#060010]`}
                        >
                          {item.year}
                        </div>

                        <div
                          className={`${
                            i === currentIndex &&
                            "!bg-[#d468fb] shadow-[0_0_6px_2px_rgba(212,104,251,0.7),0_0_12px_4px_rgba(212,104,251,0.5),0_0_18px_6px_rgba(212,104,251,0.3)]"
                          }  rounded-full w-fit p-1.5  !border-1 !border-white/90 bg-white/40 backdrop-blur-lg -top-1.5 shadow-[0_0_6px_2px_#625970,0_0_12px_4px_#625970,0_0_18px_6px_#625970]`}
                        />
                      </div>
                    ))}
                  </div>

                  <div
                    className={`w-full  pb-52 min-w-[${
                      200 * timeline.length
                    }] `}
                  >
                    <div className={`bg-[#2b2634] w-full h-0.5 `} />
                  </div>
                </div>
                <div className="md:px-12 px-4 pb-24 flex justify-center">
                  <div className=" max-w-[900px] h-full rounded-4xl backface-hidden flex max-md:flex-col items-center gap-8 text-[#060010] backdrop-blur-xl p-7 md:p-10 lg:p-20 border-1  bg-white/5 border-[#625970]">
                    <div
                      className="relative  rounded-full   px-10 py-4"
                      style={{
                        background:
                          "linear-gradient(135deg, #d468fb 0%, #8b3ddb 100%)",
                        boxShadow:
                          "0 0 60px rgba(212,104,251,0.7), inset 0 0 30px rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <span className="text-xl  text-white">
                        {timeline[currentIndex].year}
                      </span>
                      <div className="absolute inset-[10px] rounded-full border-2 border-white/20"></div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <h2 className="text-2xl text-white/95">
                        {timeline[currentIndex].title}
                      </h2>

                      <div className="h-0.5 bg-[#d468fb] w-[200px] rounded-full"></div>
                      <p className="text-xl text-white/70">
                        {timeline[currentIndex].detailedDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <SplitText
                text="Village Gallery"
                className="pt-24 text-white text-3xl md:text-5xl lg:text-7xl font-bold text-center text-shadow-lg"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </div>
            <p className="text-white/65 text-center pt-1.5 md:pt-7 pb-11 text-3xl">
              <ShinyText
                className="text-xl md:text-2xl xl:!text-3xl"
                text="Capturing the beauty of our home"
              />
            </p>
            <div
              style={{
                maxWidth: "100vw",
                overflow: "hidden",
                width: "100%",
                height: "600px",
                top: 0,
                left: 0,
                position: "relative",
              }}
            >
              <CircularGallery
                bend={3}
                textColor="#ffffff"
                borderRadius={0.05}
                scrollEase={0.02}
              />
            </div>
            {/* <div
              style={{
                maxWidth: "100vw",
                overflow: "hidden",
                width: "100%",
                height: "100vh",
                top: 0,
                left: 0,
                position: "relative",
              }}
            >
              <GridMotion items={items} />
            </div> */}
            <div className="flex justify-center">
              <SplitText
                text="Our Traditions"
                className="pt-24 text-white text-3xl md:text-5xl lg:text-7xl font-bold text-center text-shadow-lg"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </div>
            <p className="text-white/65 text-center pt-1.5 md:pt-7 pb-11 text-3xl">
              <ShinyText
                className="text-xl md:text-2xl xl:!text-3xl"
                text="Annual celebrations that bring us together"
              />
            </p>
            <div className="relative">
              <BlobUnderlay className="absolute top-[0px] left-[-3%] z-0   !h-[300px] !w-[100px]" />
              <BlobUnderlay className="absolute top-[40%] left-[50%] translate-[-50%] z-0   !h-[300px] !w-[500px]" />
              <BlobUnderlay className="absolute top-[20px] left-[98%] z-0  !h-[300px] !w-[100px]" />
              <div className="w-full flex justify-center">
                <AnimatedList
                  onItemSelect={(item, index) => console.log(item, index)}
                  showGradients={true}
                  enableArrowNavigation={true}
                  displayScrollbar={true}
                />
              </div>
            </div>

            <div className="w-full mt-12 bg-[#130d1c] pb-10">
              <div
                className="
      flex 
      flex-col lg:flex-row 
      justify-between items-center 
      gap-11 px-6 md:px-10 lg:px-14
    "
              >
                {/* LEFT TEXT BLOCK */}
                <div className="w-full lg:min-w-[500px] lg:w-1/2 text-center lg:text-left">
                  <SplitText
                    text="Did You Know?!"
                    className="pt-11 lg:pt-24 text-white text-3xl md:text-5xl lg:text-7xl font-bold text-shadow-lg"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                  />

                  <p className="text-white/65 pt-1.5 pb-11 text-xl md:text-2xl xl:text-3xl">
                    <ShinyText text="Few facts about our village" />
                  </p>
                </div>

                {/* FACTS BLOCK */}
                <div
                  className="
        flex 
        justify-center lg:justify-end 
        gap-14 md:gap-20 xl:gap-24
        w-full lg:w-1/2
      "
                >
                  {/* ITEM */}
                  <div className="flex flex-col gap-5 items-center max-w-[200px]">
                    <div className="text-4xl">🌳</div>
                    <span className="px-3 py-1 bg-[#d468fb]/20 border border-[#d468fb]/50 rounded-full text-base font-semibold text-[#d468fb]">
                      350+
                    </span>
                    <div className="text-lg md:text-xl text-white/95 text-center">
                      Trees planted annually in conservation program
                    </div>
                  </div>

                  {/* ITEM */}
                  <div className="flex flex-col gap-5 items-center max-w-[200px]">
                    <div className="text-4xl">📚</div>
                    <span className="px-3 py-1 bg-[#d468fb]/20 border border-[#d468fb]/50 rounded-full text-base font-semibold text-[#d468fb]">
                      4,500+
                    </span>
                    <div className="text-lg md:text-xl text-white/95 text-center">
                      Books in our public library collection
                    </div>
                  </div>

                  {/* ITEM */}
                  <div className="flex flex-col gap-5 items-center max-w-[200px]">
                    <div className="text-4xl">🎨</div>
                    <span className="px-3 py-1 bg-[#d468fb]/20 border border-[#d468fb]/50 rounded-full text-base font-semibold text-[#d468fb]">
                      120+
                    </span>
                    <div className="text-lg md:text-xl text-white/95 text-center">
                      Local artists and craftspeople
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <SplitText
                text="Awards & Recognition"
                className="pt-24 text-white text-3xl md:text-5xl lg:text-7xl font-bold text-center text-shadow-lg"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </div>
            <p className="text-white/65 text-center pt-1.5 md:pt-7 pb-11 text-3xl">
              <ShinyText
                className="text-xl md:text-2xl xl:!text-3xl"
                text="Celebrated for excellence and innovation"
              />
            </p>

            <div className="relative w-full h-[350px]">
              <div
                style={{
                  width: "100vw",
                  position: "absolute",
                  overflow: "hidden",
                }}
              >
                <LogoLoop
                  logos={techLogos}
                  speed={50}
                  direction="left"
                  logoHeight={120}
                  gap={40}
                  pauseOnHover
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#ffffff"
                  ariaLabel="Technology partners"
                />
              </div>
            </div>
            <div className="relative flex justify-center mb-12 px-3.5">
              <BlobUnderlay className="absolute top-[45px] left-1/2 -translate-x-1/2 z-0 !h-[230px] !w-[500px]" />
              <div className="backdrop-blur-xl max-w-[1000px] w-full  rounded-4xl border-1 flex flex-col items-center  bg-white/5 border-[#625970] p-14 ">
                <h2 className="  text-[#d468fb] text-4xl font-bold text-center text-shadow-lg max-md:text-2xl">
                  Visit Our Village
                </h2>
                <p className="text-white/65 text-center pt-7 pb-11 max-md:text-lg text-xl ">
                  Experience the warmth of our community, explore historic
                  sites, and discover why our village is the perfect place to
                  live, work, and visit. Here, every street carries the spirit
                  of generations, and every sunset paints a story. Come and
                  immerse yourself in the charm of local traditions, enjoy the
                  peaceful rhythm of rural life, and meet people who greet
                  guests as if they were family. Come visit us, feel the harmony
                  of nature, and become part of a place where you’ll always want
                  to return.
                </p>

                <button
                  className="flex-none h-[42px] max-md:w-fit px-5 text-white/95 flex items-center cursor-pointer rounded-xl bg-[#d468fb]
shadow-[0_0_6px_2px_rgba(212,104,251,0.7),0_0_12px_4px_rgba(212,104,251,0.5),0_0_18px_6px_rgba(212,104,251,0.3)]"
                >
                  Contact Tourism Office
                </button>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </ClickSpark>
    </div>
  );
};

export default Home;
