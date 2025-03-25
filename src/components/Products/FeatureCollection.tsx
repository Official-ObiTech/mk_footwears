import { Link } from "react-router-dom";
import feature from "../../assets/shoeoffice.jpg";

const FeatureCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center shadow-sm rounded bg-sky-50/60">
        {/* Left Contents  */}
        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <h2 className="text-lg font-semibold mb-2">Comfort and Style</h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Apparel made for your everyday life
          </h2>
          <p className="text-lg mb-6">
            Discover hight-quality, comfortable shoes that effortlessly blends
            fashion and function. Designed to make you look and feel great
            everyday.
          </p>
          <Link
            to="/collections/all"
            className="anime_btn relative bg-primary rounded px-6 py-2 text-xl text-white "
          >
            Shop Now
          </Link>
        </div>

        {/* Right Contents  */}
        <div className="lg:w-1/2">
          <img
            src={feature}
            alt="Feature Collection"
            className="w-full h-full object-cover lg:rounded-tr-2xl lg:rounded-br-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureCollection;
