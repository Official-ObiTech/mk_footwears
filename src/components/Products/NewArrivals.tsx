import { useEffect, useRef, useState } from "react";
import allwears from "../../assets/topwear.jpg";
import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi";
import { Link } from "react-router-dom";

interface newArrivalsProps {
  _id: string;
  name: string;
  price: number;
  images: {
    url: string;
    altText: string;
  }[];
}

const NewArrivals: React.FC = () => {
  // DECLARE VARIABLES
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newArrivals: newArrivalsProps[] = [
    {
      _id: "1",
      name: "Shoes",
      price: 15000,
      images: [{ url: allwears, altText: "Shoes" }],
    },
    {
      _id: "2",
      name: "Shoes",
      price: 15000,
      images: [{ url: allwears, altText: "Shoes" }],
    },
    {
      _id: "3",
      name: "Shoes",
      price: 15000,
      images: [{ url: allwears, altText: "Shoes" }],
    },
    {
      _id: "4",
      name: "Shoes",
      price: 15000,
      images: [{ url: allwears, altText: "Shoes" }],
    },
    {
      _id: "5",
      name: "Shoes",
      price: 15000,
      images: [{ url: allwears, altText: "Shoes" }],
    },
    {
      _id: "6",
      name: "Shoes",
      price: 15000,
      images: [{ url: allwears, altText: "Shoes" }],
    },
    {
      _id: "7",
      name: "Shoes",
      price: 15000,
      images: [{ url: allwears, altText: "Shoes" }],
    },
  ];

  // DECLARE FUNCTIONS

  const handleMouseDwon = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {};

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;

    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = x - startX;

    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const scroll = (direction: string) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // UPDATE SCROLL BUTTON STATE
  const updateScrollButton = () => {
    const container = scrollRef.current;

    if (!container) return;

    const leftScroll = container.scrollLeft;
    const rightScrollable =
      container.scrollWidth > leftScroll + container.clientWidth;

    setCanScrollLeft(leftScroll > 0);
    setCanScrollRight(rightScrollable);
  };

  // ADD EVENT LISTENER ON MOUNT AND CLEANUP ON UNMOUNT
  useEffect(() => {
    const container = scrollRef.current;

    if (container) {
      container.addEventListener("scroll", updateScrollButton);
      updateScrollButton();
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", updateScrollButton);
      }
    };
  }, []);

  return (
    <section className="py-16 px-4 ">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg mb-20">
          Discover the latest footwears off the runway, freshly added to keep
          your shoe stack on the cutting edge of fashion
        </p>

        <div className="absolute right-0 -bottom-16 flex space-x-2">
          <button
            disabled={!canScrollLeft}
            onClick={() => scroll("left")}
            className={`p-2 icons ${
              canScrollLeft ? "product_btn " : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            <HiOutlineChevronDoubleLeft />
          </button>
          <button
            disabled={!canScrollRight}
            onClick={() => scroll("right")}
            className={`p-2 icons ${
              canScrollRight ? "product_btn" : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            <HiOutlineChevronDoubleRight />
          </button>
        </div>
      </div>

      {/* Scrollable content  */}
      <div
        ref={scrollRef}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDwon}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-90 object-cover rounded"
              draggable="false"
            />
            <div className="absolute bottom-0 right-0 left-0 p-4 rounded-b  backdrop-blur-xl text-secondary">
              <Link to={`/prouduct/${product._id}`}>
                <h4 className="font-semibold">{product.name}</h4>
                <p>#{product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
