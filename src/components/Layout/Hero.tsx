import { Link } from "react-router-dom";
import shoeoffice from "../../assets/shoeoffice.jpg";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={shoeoffice}
        alt="Shoe Office"
        className="md:h-220 w-full object-cover h-120"
      />
      <div className="absolute text-white opacity-90 inset-0 justify_flex text-center">
        <div>
          <h1 className="md:text-8xl font-bold tracking-tighter uppercase mb-4 text-4xl">
            Mk Best <br /> Footwears
          </h1>

          <p className="text-sm tracking-tighter md:text-lg mb-6 bg-black/60 py-2 px-6" >
            Explore our best collection of Mk Footwears with fast worldwide
            shipping
          </p>
          <Link to="#" className="bg-primary shop rounded px-6 py-2 text-xl ">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
