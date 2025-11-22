import Header from "./components/Header";
import { TbBackground } from "react-icons/tb";
import AnimatedContent from "./components/AnimatedContent";
import ClickSpark from "./components/ClickSpark";
import Footer from "./components/Footer";
import ColorBends from "./components/ColorBends";
import ElectricBorder from "./components/ElectricBorder";
import SplitText from "./components/SplitText";
import ShinyText from "./components/ShinyText";
import { BlobUnderlay } from "./components/Blob";
import { useState } from "react";

const ContactUs = () => {
  const [activeIssue, setActiveIssue] = useState<number | null>(null);
  const [selectedPriority, setSelectedPriority] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    issueTitle: "",
    description: "",
    notifications: true,
  });

  const [showGetNumberModal, setShowGetNumberModal] = useState(false);
  const [getNumberRef, setGetNumberRef] = useState("");

  const priorities = [
    { level: "Low", icon: "🟢", description: "Can wait a few weeks" },
    { level: "Medium", icon: "🟡", description: "Needs attention soon" },
    { level: "High", icon: "🔴", description: "Urgent attention needed" },
  ];

  const generateReferenceNumber = () => {
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 9000) + 1000;
    return `REF-${year}-${random}`;
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    setUploadedFiles(files);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    if (
      !formData.fullName.length ||
      !formData.email.length ||
      !formData.phone.length ||
      !formData.issueTitle.length ||
      !formData.description.length
    )
      return;
    e.preventDefault();
    const refNumber = generateReferenceNumber();
    setReferenceNumber(refNumber);
    setShowModal(true);

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      location: "",
      issueTitle: "",
      description: "",
      notifications: true,
    });
    setUploadedFiles([]);
  };

  const issues = [
    { id: 1, icon: "🛣️", title: "Roads & Infrastructure" },
    { id: 2, icon: "💡", title: "Utilities" },
    { id: 3, icon: "♻️", title: "Waste Management" },
    { id: 4, icon: "🚨", title: "Public Safety" },
    { id: 5, icon: "🌳", title: "Parks & Recreation" },
    { id: 6, icon: "📋", title: "Other" },
  ];

  const handleGetNumber = () => {
    const refNumber = generateReferenceNumber();
    setGetNumberRef(refNumber);
    setShowGetNumberModal(true);
  };

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
          <ColorBends
            colors={["#e07bff", "#f090ff"]}
            rotation={0}
            speed={0.2}
            scale={1}
            frequency={1}
            warpStrength={1}
            mouseInfluence={1}
            parallax={0.5}
            noise={0.1}
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
                LET`S BUILD <span className="text-[#d468fb]">DREAM</span>{" "}
                TOGETHER
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
                  Resolve
                </button>
                <button
                  onClick={handleGetNumber}
                  className=" text-shadow-lg lg:text-lg xl:text-2xl font-semibold pointer-events-auto rounded-full backdrop-blur-sm p-3 px-16 xl:p-4 xl:px-20 border-1 bg-white/5 border-[#625970]  cursor-pointer hover:bg-white/80 transition-all duration-300 hover:text-[#060010]"
                >
                  Get Number
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
                text="  Report an Issue"
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
            <p className="text-white/65 text-center pt-1.5 md:pt-7 p-3.5 pb-11 text-3xl">
              <ShinyText
                className="text-xl md:text-2xl xl:!text-3xl"
                text=" We're here to help! Report any problems or concerns in your
              community, and our team will work quickly to resolve them. Your
              feedback helps us maintain and improve our village."
              />
            </p>

            <h3 className="pt-6 md:pt-12 text-white text-2xl lg:text-4xl font-bold mx-auto max-w-[1200px] text-center text-shadow-lg">
              Select Issue Category
            </h3>
            <div className="w-full max-w-[1500px] mx-auto mt-14 flex justify-center flex-wrap gap-4 sm:gap-8 md:gap-12 pb-9 md:pb-20">
              <BlobUnderlay className="absolute top-[400px] left-[1%] z-0 !w-[500px]" />
              <BlobUnderlay className="absolute top-[500px] right-[1%] z-0 !w-[30vw]" />

              {issues.map((el) => {
                const active = activeIssue === el.id;

                return (
                  <div
                    onClick={() => setActiveIssue(el.id)}
                    className={`
                    ${active && "border-[#d468fb] !bg-[#d468fb]/20"} 
                    h-[120px] w-[144px] 
                    sm:h-[150px] sm:w-[180px] 
                    md:w-[275px] md:h-[225px]  max-md:aspect-square 
                    rounded-4xl flex flex-col justify-center 
                    items-center gap-3 md:gap-8 text-[#060010] 
                    backdrop-blur-xl max-md:p-3.5 p-7 border-1 bg-white/5 
                  border-[#625970] hover:-translate-y-3 
                    transition-all ease-in-out duration-300 cursor-pointer
                  `}
                  >
                    <div className="text-[20px] sm:text-[35px] md:text-[40px]">
                      {el.icon}
                    </div>
                    <h2 className="text-white text-center font-bold text-sm sm:text-lg md:text-xl">
                      {el.title}
                    </h2>
                  </div>
                );
              })}
            </div>
            <div className="max-w-[1000px] px-3.5 mx-auto pt-7 md:pt-14 py-14 pb-16 md:pb-28">
              <ElectricBorder color="#9b4bb8" style={{ borderRadius: 16 }}>
                <div className="p-2">
                  <h3 className=" text-white text-2xl font-bold mx-auto  text-shadow-lg">
                    Issue Details
                  </h3>
                  <p className="text-white/40 cursor-pointer  pt-3.5 text-lg ">
                    Please provide as much information as possible to help us
                    address your concern efficiently.
                  </p>
                  <section id="report" className="p-3.5 md:p-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Full Name */}
                      <div>
                        <label className="block mb-3 text-white font-semibold">
                          Full Name <span className="text-[#d468fb]">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          required
                          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#d468fb] focus:bg-white/8 focus:ring-4 focus:ring-[#d468fb]/10 transition-all"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block mb-3 text-white font-semibold">
                          Email Address{" "}
                          <span className="text-[#d468fb]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          required
                          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#d468fb] focus:bg-white/8 focus:ring-4 focus:ring-[#d468fb]/10 transition-all"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block mb-3 font-semibold text-white">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 123-4567"
                          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#d468fb] focus:bg-white/8 focus:ring-4 focus:ring-[#d468fb]/10 transition-all"
                        />
                      </div>

                      {/* Category Dropdown */}
                      <div>
                        <label className="block mb-3 font-semibold text-white">
                          Location <span className="text-[#d468fb]">*</span>
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          placeholder="123 Main Street or nearest landmark"
                          required
                          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#d468fb] focus:bg-white/8 focus:ring-4 focus:ring-[#d468fb]/10 transition-all"
                        />
                      </div>
                      {/* Issue Title */}
                      <div className="md:col-span-2">
                        <label className="block mb-3 font-semibold text-white">
                          Issue Title <span className="text-[#d468fb]">*</span>
                        </label>
                        <input
                          type="text"
                          name="issueTitle"
                          value={formData.issueTitle}
                          onChange={handleInputChange}
                          placeholder="Brief description of the issue"
                          required
                          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#d468fb] focus:bg-white/8 focus:ring-4 focus:ring-[#d468fb]/10 transition-all"
                        />
                      </div>

                      {/* Description */}
                      <div className="md:col-span-2">
                        <label className="block mb-3 font-semibold text-white">
                          Detailed Description{" "}
                          <span className="text-[#d468fb]">*</span>
                        </label>
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          placeholder="Please describe the issue in detail. Include any relevant information that might help us resolve it quickly..."
                          required
                          rows={6}
                          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#d468fb] focus:bg-white/8 focus:ring-4 focus:ring-[#d468fb]/10 transition-all resize-vertical"
                        ></textarea>
                      </div>

                      {/* Priority */}
                      <div className="md:col-span-2">
                        <label className="block mb-3 font-semibold text-white">
                          Priority Level{" "}
                          <span className="text-[#d468fb]">*</span>
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {priorities.map((priority) => (
                            <div
                              key={priority.level}
                              onClick={() =>
                                setSelectedPriority(priority.level)
                              }
                              className={`p-4 bg-white/5 border-2 rounded-xl text-center cursor-pointer transition-all duration-300 ${
                                selectedPriority === priority.level
                                  ? "border-[#d468fb] bg-[#d468fb]/10"
                                  : "border-white/10 hover:border-white/30"
                              }`}
                            >
                              <div className="font-semibold text-white/90 mb-1">
                                {priority.icon} {priority.level}
                              </div>
                              <div className="text-white/50 text-sm">
                                {priority.description}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* File Upload */}
                      <div className="md:col-span-2">
                        <label className="block mb-3 font-semibold text-white">
                          Upload Photos (Optional)
                        </label>
                        <div
                          onClick={() =>
                            document.getElementById("fileInput")?.click()
                          }
                          className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center cursor-pointer transition-all duration-300 hover:border-[#d468fb] hover:bg-[#d468fb]/5 bg-white/2"
                        >
                          <div className="text-5xl mb-4">📷</div>
                          <div className="text-white/70 mb-2">
                            {uploadedFiles.length > 0
                              ? `${uploadedFiles.length} file(s) selected`
                              : "Click to upload photos"}
                          </div>
                          <div className="text-white/50 text-sm">
                            Supported formats: JPG, PNG, PDF (Max 10MB)
                          </div>
                        </div>
                        <input
                          type="file"
                          id="fileInput"
                          multiple
                          accept="image/*,.pdf"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </div>

                      {/* Notifications */}
                      <div className="md:col-span-2">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="notifications"
                            checked={formData.notifications}
                            onChange={handleInputChange}
                            className="w-5 h-5 cursor-pointer accent-[#d468fb]"
                          />
                          <span className="text-white/70">
                            Send me email updates about the status of this issue
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-12 text-center">
                      <button
                        onClick={handleSubmit}
                        className="px-6 py-2.5 md:px-12 md:py-5 bg-[#d468fb] text-[#060010] rounded-full text-base md:text-lg font-bold transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[0_15px_40px_rgba(212,104,251,0.6)] shadow-[0_10px_30px_rgba(212,104,251,0.4)]"
                      >
                        Submit Report
                      </button>
                    </div>
                  </section>
                </div>
              </ElectricBorder>
            </div>
          </section>
          {showModal && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[2000] flex items-center justify-center p-8">
              <div className="bg-white/10 backdrop-blur-[30px] rounded-[30px] border border-white/20 p-12 max-w-lg text-center animate-[modalAppear_0.3s_ease-out]">
                <div className="text-7xl mb-4">✅</div>
                <h2 className="text-4xl font-bold mb-4 text-white">
                  Report Submitted!
                </h2>
                <p className="text-white/70 leading-relaxed mb-8">
                  Thank you for your report. Our team has been notified and will
                  review your issue shortly.
                </p>
                <div className="bg-[#d468fb]/20 border border-[#d468fb]/50 rounded-xl p-4 mb-8">
                  <div className="text-white/60 text-sm mb-1">
                    Your Reference Number
                  </div>
                  <div className="text-[#d468fb] text-2xl font-bold">
                    {referenceNumber}
                  </div>
                </div>
                <p className="text-white/70 mb-8">
                  Save this reference number to track the status of your report.
                </p>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-10 py-4 bg-[#d468fb] text-[#060010] rounded-full font-semibold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_10px_25px_rgba(212,104,251,0.4)]"
                >
                  Got it!
                </button>
              </div>
            </div>
          )}

          {showGetNumberModal && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[2000] flex items-center justify-center p-4 sm:p-8">
              <div
                className="
      w-full max-w-[92vw] sm:max-w-lg md:max-w-xl
      bg-white/10 backdrop-blur-[30px]
      rounded-[22px] sm:rounded-[30px]
      border border-white/20
      p-6 sm:p-10 md:p-12
      text-center
      animate-[modalAppear_0.3s_ease-out]
    "
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
                  The Number
                </h2>

                <p className="text-white/70 leading-relaxed text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
                  You can call us any time
                </p>

                <div className="bg-[#d468fb]/20 border border-[#d468fb]/50 rounded-xl p-3 sm:p-4 mb-6 sm:mb-8">
                  <div className="text-[#d468fb] text-xl sm:text-2xl md:text-3xl font-bold tracking-wide break-all">
                    +380 465 789 846
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <button
                    onClick={() => {
                      navigator.clipboard?.writeText(getNumberRef);
                    }}
                    className="
            w-full sm:w-auto px-8 py-3 sm:px-10 sm:py-4
            bg-white/10 border border-white/20
            text-white rounded-full font-semibold
            transition-all duration-300
            hover:bg-white/20 hover:translate-y-[-2px]
          "
                  >
                    Copy Number
                  </button>

                  <button
                    onClick={() => setShowGetNumberModal(false)}
                    className="
            w-full sm:w-auto px-8 py-3 sm:px-10 sm:py-4
            bg-[#d468fb] text-[#060010]
            rounded-full font-semibold
            transition-all duration-300
            hover:translate-y-[-2px]
            hover:shadow-[0_10px_25px_rgba(212,104,251,0.4)]
          "
                  >
                    Got it!
                  </button>
                </div>
              </div>
            </div>
          )}

          <Footer />
        </div>
      </ClickSpark>
    </div>
  );
};

export default ContactUs;
