import { Link } from "react-router-dom";
import womencollections from "../../assets/woman.jpg";
import mencollections from "../../assets/men.jpg";

interface collectionProps {
  image: string;
  name: string;
  to: string;
}

const GenderCollection: React.FC = () => {
  const GenderCollections: collectionProps[] = [
    {
      image: mencollections,
      name: "Men's Collections",
      to: "/collections/all?gender=men",
    },
    {
      image: womencollections,
      name: "Women's Collections",
      to: "/collections/all?gender=women",
    },
  ];
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row gap-12 ">
        {/* Men & Women collections  */}

        {GenderCollections.map((collection, index) => (
          <div className="relative flex-1 border-2 border-gray-300 rounded" key={index}>
            <img
              src={collection.image}
              alt={collection.name}
              className="object-cover w-full h-100"
            />

            <div className="absolute bg-white/80 bottom-8 left-8 p-4">
              <h2 className="text-xl font-bold">{collection.name}</h2>
              <Link to={collection.to} className="nav_link">
                See More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GenderCollection;
