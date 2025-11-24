import GradientBlinds from "./components/GradientBlinds";
import Header from "./components/Header";
import { TbBackground } from "react-icons/tb";
import AnimatedContent from "./components/AnimatedContent";
import { BlobUnderlay } from "./components/Blob";
import MagicBento from "./components/MagicBento";
import LogoLoop from "./components/LogoLoop";
import ClickSpark from "./components/ClickSpark";
import SplitText from "./components/SplitText";
import { SiReact, SiNextdotjs } from "react-icons/si";
import Footer from "./components/Footer";
import ShinyText from "./components/ShinyText";
import FlipCard from "./components/FlippedCard";

const techLogos = [
  // Дія
  {
    node: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.80077 5.80238L5.80238 5.80077C8.13785 3.45997 11.1215 2.24496 15.3344 1.62619C19.5813 1.00245 24.9506 1 31.9942 1C39.0377 1 44.4072 1.00243 48.6558 1.6248C52.8701 2.24215 55.8571 3.45442 58.1984 5.78997C60.5399 8.13148 61.755 11.1185 62.3738 15.3329C62.9976 19.5813 63 24.9506 63 31.9942C63 39.0378 62.9976 44.4071 62.3738 48.6555C61.755 52.8699 60.5399 55.8569 58.1984 58.1984C55.8571 60.5398 52.8673 61.755 48.6512 62.3738C44.4013 62.9976 39.0319 63 31.9942 63C24.9564 63 19.5871 62.9976 15.3387 62.3738C11.1241 61.755 8.13769 60.5399 5.80238 58.1992L5.80158 58.1984C3.46022 55.8571 2.24502 52.8673 1.62621 48.6512C1.00244 44.4013 1 39.0319 1 31.9942C1 24.9564 1.00244 19.5871 1.6262 15.3387C2.24501 11.1241 3.46013 8.13769 5.80077 5.80238Z"
          stroke="#d468fb"
          stroke-width="2"
        />
        <path
          d="M30.622 52.5657C28.3231 50.8128 26.6277 48.1979 26.0818 45.1519H18.668V13.1117C22.6622 15.0944 25.507 19.491 25.8519 24.0312L26.9726 33.0254L26.4266 32.9392C25.2197 32.9392 24.1852 34.0599 24.1852 35.1806C24.1852 36.2151 24.9898 37.1059 26.0243 37.3358L27.3749 37.6519C29.6162 33.4277 30.8806 29.2898 30.8806 25.2094C30.8806 21.5312 30.3921 17.8818 30.3346 14.1461C30.3346 12.4795 30.9668 10.9565 32.0013 9.77832C33.0358 10.9852 33.668 12.4795 33.668 14.1461C33.668 17.8818 33.122 21.5599 33.122 25.2094C33.122 29.2611 34.3864 33.4277 36.6277 37.6519L37.9783 37.3358C39.0128 37.1059 39.8174 36.2151 39.8174 35.1806C39.8174 34.0599 38.7829 32.9392 37.576 32.9392L37.03 33.0254L38.1507 24.0312C38.6967 19.491 41.3404 15.0944 45.3346 13.1117V45.1519H37.9208C37.3749 48.1691 35.7657 50.899 33.3806 52.5657C32.8346 52.968 32.3461 53.4565 32.03 54.0887C31.6565 53.4277 31.168 52.968 30.622 52.5657ZM22.1737 34.0887C22.4898 32.8818 23.3806 31.8473 24.4726 31.2151L23.5818 23.8013C23.2657 21.5025 22.3174 19.4335 20.8806 17.7381V34.0599H22.1737V34.0887ZM25.9381 42.9105C25.9381 41.7898 26.1105 40.7553 26.3404 39.7208L25.3059 39.491C23.7829 39.0025 22.6048 37.8243 22.2025 36.3013H20.9381V42.9105H25.9381ZM30.8519 42.9105C30.8519 41.5599 29.8174 40.353 28.4668 40.2094C28.2369 41.0714 28.0645 41.9622 28.0645 42.9105H30.8519ZM30.8519 45.1519H28.3806C28.7829 46.9048 29.645 48.4852 30.8519 49.8645V45.1519ZM34.3576 38.2266C33.4093 36.4737 32.5185 34.6346 31.9726 32.7381C31.4266 34.6634 30.5358 36.4737 29.5875 38.2266C30.5358 38.4565 31.3404 39.0887 31.9726 39.8071C32.6048 39.0887 33.4093 38.4565 34.3576 38.2266ZM35.8806 42.9105C35.8806 41.9622 35.7082 41.0714 35.4783 40.2094C34.1277 40.3818 33.0933 41.5599 33.0933 42.9105H35.8806ZM35.5645 45.1519H33.0933V49.8645C34.3002 48.4852 35.1622 46.9048 35.5645 45.1519ZM43.0645 42.9105V36.3013H41.8002C41.3979 37.8243 40.2197 39.0025 38.6967 39.491L37.6622 39.7208C37.8921 40.7553 38.0645 41.7898 38.0645 42.9105H43.0645ZM43.0645 34.0887V17.7668C41.6277 19.4335 40.5933 21.5025 40.3634 23.83L39.4726 31.2438C40.5933 31.876 41.4553 32.9105 41.7714 34.1174H43.0645V34.0887Z"
          fill="#d468fb"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="80"
            y1="19.5955"
            x2="144"
            y2="19.5955"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#13C7FF" />
            <stop offset="1" stop-color="#FFFF36" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Next.js",
    href: "https://nextjs.org",
  },

  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: (
      <svg
        width="65"
        height="65"
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M500 1000C719.101 1000 840.901 1000 920.45 920.45C1000 840.901 1000 719.174 1000 500C1000 280.826 1000 159.099 920.45 79.5496C840.901 0 719.101 0 500 0C280.899 0 159.099 0 79.5496 79.5496C0 159.099 0 280.899 0 500C0 719.101 0 840.901 79.5496 920.45C159.099 1000 280.899 1000 500 1000Z"
          fill="#d468fb"
        />
        <path
          d="M687.788 401.139C650.017 401.139 621.983 430.297 621.983 466.273C621.983 495.648 642.637 518.568 668.784 525.35L615.183 607.457H665.248L710.817 531.044H744.925V607.457H786.722V401.139H687.788ZM693.536 496.138C676.346 496.138 665.702 482.647 665.702 467.27C665.702 451.893 675.457 437.242 693.536 437.242H744.979V496.138H693.536Z"
          fill="#000"
        />
        <path
          d="M458.891 401.139L445.019 439.327L501.939 439.001L468.229 562.632C458.619 598.68 496.19 625.916 528.25 604.718L601.163 555.252L579.693 523.7L506.871 574.146L555.957 401.139H458.891Z"
          fill="#000"
        />
        <path
          d="M537.391 374.611C553.365 374.611 566.314 362.944 566.314 348.553C566.314 334.162 553.365 322.496 537.391 322.496C521.418 322.496 508.469 334.162 508.469 348.553C508.469 362.944 521.418 374.611 537.391 374.611Z"
          fill="#000"
        />
        <path
          d="M389.86 569.374V353.192H229.473V468.572C229.473 522.863 213.752 556.427 204.486 569.283H185.483V663.575H226.155V607.834H378.219V663.666H418.873V569.374H389.86ZM269.91 466.197V391.543H348.154V569.247H247.153C256.31 554.269 269.91 516.154 269.91 466.197Z"
          fill="#000"
        />
      </svg>
    ),
    title: "Dia",
    href: "//",
  },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
];

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
          <GradientBlinds
            gradientColors={["#FF9FFC", "#5227FF"]}
            angle={124}
            noise={0.08}
            blindCount={28}
            blindMinWidth={50}
            spotlightRadius={0.6}
            spotlightSoftness={1}
            spotlightOpacity={1}
            mouseDampening={0.15}
            distortAmount={0}
            shineDirection="left"
            mixBlendMode="lighten"
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
              <div className="md:max-w-[650px] lg:max-w-[900px] xl:max-w-[1200px] text-5xl lg:text-6xl xl:text-8xl font-bold text-center text-shadow-lg">
                .<span className="text-[#d468fb]">MANAGE</span> DOCUMENTS WITH
                OUR SYSTEM FROM{" "}
                <span className="text-[#d468fb]">EVERYWHERE</span>!
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
                  Get Started
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
                  Learn More
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
                text="Our Services!"
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
                text="Comprehensive municipal services for all residents"
              />
            </p>

            <div className="w-full flex justify-center gap-4 md:gap-12 pb-20 items-stretch flex-wrap">
              <BlobUnderlay className="absolute top-[150px] left-[120px] z-0   !w-[500px]" />
              <BlobUnderlay className="absolute top-[300px] left-[55%] z-0  !w-[30vw]" />
              <BlobUnderlay className="absolute top-[800px] left-[20%] z-0 !w-[30vw]" />
              <BlobUnderlay className="absolute top-[1000px] right-[15%] z-0  !w-[30vw]" />

              <FlipCard
                front={
                  <>
                    <div
                      className="bg-[#d468fb67] md:text-[24px] lg:text-[35px] xl:text-[50px] rounded-2xl px-4 py-2.5"
                      style={{
                        boxShadow: "0px 0px 17px 0px #d468fb67",
                      }}
                    >
                      🏠
                    </div>
                    <h2 className="text-white font-bold text-lg lg:text-2xl xl:text-3xl">
                      Housing & Property
                    </h2>
                    <p className="text-white/65 text-base lg:text-lg xl:text-2xl text-center">
                      Registration, permits, property taxes, and housing support
                      programs.
                    </p>
                  </>
                }
                back={
                  <>
                    {" "}
                    <p className="text-white/65 md:text-lg lg:text-2xl text-center">
                      Manage your property documents, check taxes, and apply for
                      renovations.
                    </p>
                    <button className="px-5 py-3 text-white/95 flex items-center cursor-pointer rounded-2xl bg-[#d468fb67]">
                      {"Open services"}
                    </button>
                  </>
                }
                classname="max-w-[500px]"
              />
              <FlipCard
                front={
                  <>
                    <div
                      className="bg-[#d468fb67] md:text-[24px] lg:text-[35px] xl:text-[50px] rounded-2xl px-4 py-2.5"
                      style={{
                        boxShadow: "0px 0px 17px 0px #d468fb67",
                      }}
                    >
                      🚗
                    </div>
                    <h2 className="text-white font-bold text-lg lg:text-2xl xl:text-3xl">
                      Transportation
                    </h2>
                    <p className="text-white/65 text-base lg:text-lg xl:text-2xl text-center">
                      Road maintenance, public transport, parking permits, and
                      infrastructure.
                    </p>
                  </>
                }
                back={
                  <>
                    {" "}
                    <p className="text-white/65 md:text-lg lg:text-2xl text-center">
                      Report road issues, check public transport routes, manage
                      parking permits, and track infrastructure work in your
                      area.
                    </p>
                    <button className="px-5 py-3 text-white/95 flex items-center cursor-pointer rounded-2xl bg-[#d468fb67]">
                      {"Open services"}
                    </button>
                  </>
                }
                classname="max-w-[500px]"
              />
              <FlipCard
                front={
                  <>
                    <div
                      className="bg-[#d468fb67] md:text-[24px] lg:text-[35px] xl:text-[50px] rounded-2xl px-4 py-2.5"
                      style={{
                        boxShadow: "0px 0px 17px 0px #d468fb67",
                      }}
                    >
                      ♻️
                    </div>
                    <h2 className="text-white font-bold text-lg lg:text-2xl xl:text-3xl">
                      Waste Management
                    </h2>
                    <p className="text-white/65 text-base lg:text-lg xl:text-2xl text-center">
                      Garbage collection, recycling programs, and environmental
                      initiatives.
                    </p>
                  </>
                }
                back={
                  <>
                    {" "}
                    <p className="text-white/65 md:text-lg lg:text-2xl text-center">
                      Manage garbage collection schedules, request recycling
                      bins, report missed pickups, and explore local
                      eco-initiatives.
                    </p>
                    <button className="px-5 py-3 text-white/95 flex items-center cursor-pointer rounded-2xl bg-[#d468fb67]">
                      {"Open services"}
                    </button>
                  </>
                }
                classname="max-w-[500px]"
              />
              <FlipCard
                front={
                  <>
                    <div
                      className="bg-[#d468fb67] md:text-[24px] lg:text-[35px] xl:text-[50px] rounded-2xl px-4 py-2.5"
                      style={{
                        boxShadow: "0px 0px 17px 0px #d468fb67",
                      }}
                    >
                      💧
                    </div>
                    <h2 className="text-white font-bold text-lg lg:text-2xl xl:text-3xl">
                      Water & Utilities
                    </h2>
                    <p className="text-white/65 text-base lg:text-lg xl:text-2xl text-center">
                      Water supply, sewage, utility connections, and maintenance
                      services.
                    </p>
                  </>
                }
                back={
                  <>
                    {" "}
                    <p className="text-white/65 md:text-lg lg:text-2xl text-center">
                      Check service status, report leaks or outages, request new
                      connections, and manage utility-related support.
                    </p>
                    <button className="px-5 py-3 text-white/95 flex items-center cursor-pointer rounded-2xl bg-[#d468fb67]">
                      {"Open services"}
                    </button>
                  </>
                }
                classname="max-w-[500px]"
              />
              <FlipCard
                front={
                  <>
                    <div
                      className="bg-[#d468fb67] md:text-[24px] lg:text-[35px] xl:text-[50px] rounded-2xl px-4 py-2.5"
                      style={{
                        boxShadow: "0px 0px 17px 0px #d468fb67",
                      }}
                    >
                      🏫
                    </div>
                    <h2 className="text-white font-bold text-lg lg:text-2xl xl:text-3xl">
                      Education
                    </h2>
                    <p className="text-white/65 text-base lg:text-lg xl:text-2xl text-center">
                      Schools, libraries, educational programs, and youth
                      activities.
                    </p>
                  </>
                }
                back={
                  <>
                    {" "}
                    <p className="text-white/65 md:text-lg lg:text-2xl text-center">
                      Explore schools and libraries, join youth programs, and
                      discover learning opportunities for all age groups.
                    </p>
                    <button className="px-5 py-3 text-white/95 flex items-center cursor-pointer rounded-2xl bg-[#d468fb67]">
                      {"Open services"}
                    </button>
                  </>
                }
                classname="max-w-[500px]"
              />

              <FlipCard
                front={
                  <>
                    <div
                      className="bg-[#d468fb67] md:text-[24px] lg:text-[35px] xl:text-[50px] rounded-2xl px-4 py-2.5"
                      style={{
                        boxShadow: "0px 0px 17px 0px #d468fb67",
                      }}
                    >
                      🏥
                    </div>
                    <h2 className="text-white font-bold text-lg lg:text-2xl xl:text-3xl">
                      Healthcare
                    </h2>
                    <p className="text-white/65 text-base lg:text-lg xl:text-2xl text-center">
                      Medical facilities, emergency services, and health
                      programs.
                    </p>
                  </>
                }
                back={
                  <>
                    {" "}
                    <p className="text-white/65 md:text-lg lg:text-2xl text-center">
                      Find medical facilities, access emergency contacts, view
                      health programs, and get support for you and your family.
                    </p>
                    <button className="px-5 py-3 text-white/95 flex items-center cursor-pointer rounded-2xl bg-[#d468fb67]">
                      {"Open services"}
                    </button>
                  </>
                }
                classname="max-w-[500px]"
              />
            </div>

            <div className="flex justify-center gap-2 pb-12">
              <SplitText
                text="Our"
                className=" pt-6 text-white/95 text-3xl md:text-5xl lg:text-7xl font-bold text-center text-shadow-lg"
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
              <SplitText
                text="Impact"
                className="pt-6 text-[#d468fb] text-3xl md:text-5xl lg:text-7xl font-bold text-center text-shadow-lg"
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

            <MagicBento
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={false}
              enableMagnetism={false}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
            />
          </section>
          <div className="relative w-full pt-12 md:pt-24 mb-32">
            <div
              style={{
                width: "100vw",
                position: "absolute",
                overflow: "hidden",
              }}
            >
              <LogoLoop
                logos={techLogos}
                speed={120}
                direction="left"
                logoHeight={48}
                gap={40}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Technology partners"
              />
            </div>
          </div>

          <Footer />
        </div>
      </ClickSpark>
    </div>
  );
};

export default Home;
