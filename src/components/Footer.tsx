import { BlobUnderlay } from "./Blob";
import { TbBackground } from "react-icons/tb";

import ShinyText from "./ShinyText";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full p-3.5 relative">
      <BlobUnderlay className="absolute top-[50px] left-[-200px] z-0 !h-[500px]   !w-[400px]" />
      <BlobUnderlay className="absolute bottom-[0] right-[-100px] z-0 !h-[500px]   !w-[400px]" />
      <div className="flex flex-wrap  w-full h-full gap-12 rounded-4xl items-start text-[#060010] backdrop-blur-xl p-12 border-1  bg-white/5 border-[#625970]">
        <div className="w-full h-full max-w-[480px]">
          <div className="flex gap-3 items-center">
            <TbBackground color="#fff" size={28} />
            <h1 className="text-white !text-3xl font-bold">Village Council</h1>
          </div>
          <p className="mt-5 text-xl text-white/60 ">
            <ShinyText
              className="!text-[20px]"
              text="Dedicated to serving our community with transparency, innovation,
            and commitment to excellence in local governance."
            />
          </p>
        </div>
        <div className="w-full h-fit max-w-[480px] flex flex-col gap-3.5">
          <h2 className="mb-3 text-[#d468fb] font-bold text-2xl">
            Quick Links
          </h2>
          <p className="text-white/60 cursor-pointer hover:text-[#d468fb]">
            Our Services
          </p>
          <p className="text-white/60 cursor-pointer hover:text-[#d468fb]">
            Latest News
          </p>
          <p
            className="text-white/60 cursor-pointer hover:text-[#d468fb]"
            onClick={() => {
              navigate("/about_us");
            }}
          >
            Meet the Team
          </p>
          <p className="text-white/60 cursor-pointer hover:text-[#d468fb]">
            Contact Us
          </p>
          <p className="text-white/60 cursor-pointer hover:text-[#d468fb]">
            Document Center
          </p>
          <p className="text-white/60 cursor-pointer hover:text-[#d468fb]">
            Career Opportunities
          </p>
        </div>
        <div className="flex-none w-fit h-fit max-w-[480px] flex flex-col gap-3.5">
          <h2 className="mb-3 text-[#d468fb] font-bold text-2xl">Resources</h2>
          <p className="text-white/60 cursor-pointer hover:text-[#d468fb]">
            Council Meetings
          </p>
          <p className="text-white/60 cursor-pointer hover:text-[#d468fb]">
            Public Records
          </p>
          <p className="text-white/60 cursor-pointer hover:text-[#d468fb]">
            Budget Reports
          </p>
          <p className="text-white/60 cursor-pointer hover:text-[#d468fb]">
            Development Plans
          </p>
          <p className="text-white/60 cursor-pointer hover:text-[#d468fb]">
            Emergency Services
          </p>
          <p className="text-white/60 cursor-pointer hover:text-[#d468fb]">
            FAQ
          </p>
        </div>

        <div className="max-w-[550px]">
          <h2 className="mb-3 text-[#d468fb] font-bold text-2xl">Newsletter</h2>
          <ShinyText
            text="Subscribe to receive updates about events, services, and
            important announcements."
          />
          <div className="flex mt-7 gap-x-1.5">
            <input
              placeholder="exmaple@mail.com"
              className=" bg-white/15 min-w-[250px] border-1 rounded-l-2xl p-2 px-3.5 text-white/90 font-light border-[#625970]"
            />
            <button
              className="px-5 text-white/95 flex items-center cursor-pointer rounded-r-2xl bg-[#d468fb]
shadow-[0_0_6px_2px_rgba(212,104,251,0.7),0_0_12px_4px_rgba(212,104,251,0.5),0_0_18px_6px_rgba(212,104,251,0.3)]"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
