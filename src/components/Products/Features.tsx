import { HiOutlineCreditCard, HiShoppingBag } from "react-icons/hi";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";

const Features = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 text-center">
        {/* Feature 1  */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4 icons border border-sky-400 hover:border-none cursor-pointer hover:bg-sky-100">
            <HiShoppingBag />
          </div>
          <h4 className="tracking-tighter mb-2">FREE SHIPPING</h4>
          <p className="text-sm tracking-tighter">
            On all orders above # 100,000.00
          </p>
        </div>

        {/* Feature 2  */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4 icons border border-sky-400 hover:border-none cursor-pointer hover:bg-sky-100">
            <HiArrowPathRoundedSquare />
          </div>
          <h4 className="tracking-tighter mb-2">30 DAYS RETURN</h4>
          <p className="text-sm tracking-tighter">Money back guarantee</p>
        </div>

        {/* Feature 3  */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4 icons border border-sky-400 hover:border-none cursor-pointer hover:bg-sky-100">
            <HiOutlineCreditCard />
          </div>
          <h4 className="tracking-tighter mb-2">SECURE CHECKOUT</h4>
          <p className="text-sm tracking-tighter">
            100% secured checkout process
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
