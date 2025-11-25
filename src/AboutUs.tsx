import Silk from "./components/Silk";
import Header from "./components/Header";
import { TbBackground } from "react-icons/tb";
import AnimatedContent from "./components/AnimatedContent";
import ChromaGrid from "./components/ChromaGrid";
import ClickSpark from "./components/ClickSpark";
import ShinyText from "./components/ShinyText";
import Footer from "./components/Footer";
import SplitText from "./components/SplitText";
import { BlobUnderlay } from "./components/Blob";

const Home = () => {
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
          <Silk
            speed={5}
            scale={1.1}
            color="#74388a"
            noiseIntensity={1.5}
            rotation={0}
          />

          <div className="w-full flex flex-col items-center justify-center absolute top-[55%] translate-y-[-50%] text-white pointer-events-none ">
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
              <div className="md:max-w-[650px] lg:max-w-[900px] xl:max-w-[1200px] text-5xl lg:text-6xl xl:text-8xl font-bold text-center text-shadow-lg">
                MEET THE <span className="text-[#d468fb]">TEAM</span>!
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
                  See
                </button>
              </div>
            </AnimatedContent>
          </div>
        </div>
        <div className="max-w-screen h-fit bg-[#060010]">
          <section
            style={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <div className="flex justify-center">
              <SplitText
                text="Our Heroes!"
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
            <p className="text-white/65 text-center pt-1.5 md:pt-7 pb-11 text-3xl px-3.5">
              <ShinyText
                className="text-xl md:text-2xl xl:!text-3xl"
                text="Explore talented team, that helps everyone from morning to
              evening!"
              />
            </p>

            <div style={{ position: "relative" }}>
              <BlobUnderlay className="absolute top-[150px] left-[120px] z-0   !w-[500px]" />
              <BlobUnderlay className="absolute top-[300px] left-[55%] z-0  !w-[30vw]" />
              <BlobUnderlay className="absolute top-[800px] left-[20%] z-0 !w-[30vw]" />
              <BlobUnderlay className="absolute top-[1000px] right-[15%] z-0  !w-[30vw]" />
              <ChromaGrid
                radius={300}
                damping={0}
                fadeOut={0.6}
                ease="power3.out"
              />
            </div>
          </section>
          <div className="relative flex justify-center mt-28 mb-12 px-3.5">
            <BlobUnderlay className="absolute top-[45px] left-1/2 -translate-x-1/2 z-0 !h-[230px] !w-[500px]" />
            <BlobUnderlay className="absolute top-[300px] left-[55%] z-0  !w-[30vw]" />
            <div className="backdrop-blur-xl max-w-[1000px] w-full  rounded-4xl border-1  bg-white/5 border-[#625970] p-14 ">
              <h2 className="  text-[#d468fb] text-4xl font-bold text-center text-shadow-lg max-md:text-2xl">
                Join the Team!
              </h2>
              <p className="text-white/65 text-center pt-7 pb-11 max-md:text-lg ">
                We're always looking for talented, passionate individuals who
                want to make a difference in their community. If you're
                committed to public service and share our values, we'd love to
                hear from you.
              </p>

              <div className="max-md:flex-col flex gap-4 justify-center max-md:items-center">
                {" "}
                <input
                  placeholder="exmaple@mail.com"
                  className=" bg-white/15 min-w-[250px] border-1 rounded-xl p-2 px-3.5 text-white/90 font-light border-[#625970]"
                />
                <button
                  className="flex-none h-[42px] max-md:w-fit px-5 text-white/95 flex items-center cursor-pointer rounded-xl bg-[#d468fb]
shadow-[0_0_6px_2px_rgba(212,104,251,0.7),0_0_12px_4px_rgba(212,104,251,0.5),0_0_18px_6px_rgba(212,104,251,0.3)]"
                >
                  {"Send"}
                </button>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </ClickSpark>
    </div>
  );
};

export default Home;
