import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import Links from "../Common/Links";

const Topbar: React.FC = () => {
  const links = [
    {
      to: "#",
      icon: <TbBrandMeta />,
    },
    {
      to: "#",
      icon: <IoLogoInstagram />,
    },
    {
      to: "#",
      icon: <RiTwitterXLine />,
    },
  ];
  return (
    <div className="bg-secondary text-secondary ">
      <div className="justify_container">
        <div className="hidden md:flex items-center gap-3 text-3xl">
          <Links links={links} className="link" />
        </div>

        <div className="text-sm text-center flex-grow">
          <span>We ship worldwide - Fast and reliable shipping!</span>
        </div>

        <div className="text-sm hidden md:block link">
          <a href="tel:+2349049573622">Call: (+234) 904 957 3622</a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
