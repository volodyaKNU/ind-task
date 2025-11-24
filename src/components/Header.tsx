import { TbBackground } from "react-icons/tb";
import CardNav from "./CardNav";
import GradualBlur from "./GradualBlur";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        {
          label: "Company",
          ariaLabel: "About Company",
          action: () => {
            navigate("/about_us");
          },
        },
        {
          label: "Village",
          action: () => {
            navigate("/village");
          },
          ariaLabel: "About Village",
        },
      ],
    },
    {
      label: "Services",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        {
          label: "Help",
          ariaLabel: "Featured",
          action: () => {
            navigate("/contact_us");
          },
        },
        { label: "Case Studies", ariaLabel: "Project Case Studies" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Phone", ariaLabel: "Phone us" },
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" },
      ],
    },
  ];
  return (
    <GradualBlur
      target="page"
      position="top"
      height="8rem"
      strength={2}
      divCount={3}
      curve="bezier"
      exponential={true}
      opacity={1}
    >
      <div className="relative max-w-[1200px] mx-auto p-3.5  flex justify-between text-white">
        <CardNav
          logo={
            <div className="flex gap-3 items-center text-lg">
              <TbBackground />
              <h2>Village Council</h2>
            </div>
          }
          logoAlt="Company Logo"
          items={items}
          baseColor="#FFFFFF0D"
          menuColor="#fff"
          buttonBgColor="#fff"
          buttonTextColor="#000"
          ease="power3.out"
          className="px-8 pt-3 w-full"
        />

        {/* <button className="flex items-center gap-4 bg-[#d468fb] rounded-4xl text-md p-2 pl-5 cursor-pointer">
          Contact us{" "}
          <div className="flex gap-2 bg-[#060010] text-white items-center rounded-[36px] p-3">
            <p>1,200</p>
          </div>
        </button> */}
      </div>
    </GradualBlur>
  );
};

export default Header;
