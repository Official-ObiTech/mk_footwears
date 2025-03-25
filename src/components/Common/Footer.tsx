import { RiTwitterXLine } from "react-icons/ri";
import Links from "./Links";
import { IoLogoInstagram } from "react-icons/io";
import { TbBrandMeta } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";

const Footer: React.FC = () => {
  const shopLink = [
    {
      to: "/",
      label: "Men",
    },
    {
      to: "/",
      label: "Women",
    },
    {
      to: "/",
      label: "Shoes",
    },
    {
      to: "/",
      label: "Pans",
    },
  ];

  const supportLink = [
    {
      to: "/",
      label: "Contact Us",
    },
    {
      to: "/",
      label: "About Us",
    },
    {
      to: "/",
      label: "Features",
    },
    {
      to: "/",
      label: "FAQs",
    },
  ];

  const socailLinks = [
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
    <footer className="border-t py-12 border-gray-300 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* News Letter  */}
        <div className="space-y-3">
          <h3 className="text-xl text-primary ">Newsletter</h3>
          <div className="text-gray-500 space-y-3 text-sm">
            <p>
              Before the first to hear about new products, exclusive events, and
              online offers.
            </p>
            <p className="text-gray-800 font-medium">
              Sign up and get 10% off your first order.
            </p>
          </div>

          <form action="" className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="input shadow-sm"
            />
            <button type="submit" className="input_btn ">
              Subscribe
            </button>
          </form>
        </div>

        {/* Shops Link  */}
        <div>
          <h3 className="footer_header">Shop</h3>
          <Links links={shopLink} className="flex flex-col light_link mt-2" />
        </div>

        {/* Support Link  */}
        <div>
          <h3 className=" footer_header">Support</h3>
          <Links
            links={supportLink}
            className="flex flex-col light_link mt-2"
          />
        </div>

        {/* Socail Link  */}
        <div>
          <h3 className="footer_header">Follow Us</h3>
          <Links
            links={socailLinks}
            className=" icons text-gray-500 inline-flex mr-2 mb-4"
          />

          <p>Call Us:</p>
          <p>
            <FiPhoneCall className="inline-block mr-2" />
            (+234) 904 957 3622
          </p>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="container mx-auto mt-12 px-4 border-t border-gray-300 pt-6 text-gray-500 text-sm text-center tracking-tighter">
        <p>&copy; 2025, MK Footwears. All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
