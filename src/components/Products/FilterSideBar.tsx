import { useEffect, useState } from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import { useNavigate, useSearchParams } from "react-router-dom";

type Filters = {
  [key: string]: string | string[] | number;
};

const FilterSideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState<Filters>({
    category: "",
    gender: "",
    color: "",
    size: [] as string[],
    material: [] as string[],
    brand: [] as string[],
    minPrice: 0,
    maxPrice: 100000,
  });
  const [priceRange, setPriceRange] = useState([0, 100000]);

  const category = ["Shoes", "Pams"];
  const color = [
    "Red",
    "Blue",
    "Black",
    "Green",
    "Yellow",
    "Gray",
    "White",
    "Pink",
    "Navy",
    "Beige",
  ];
  const size = ["XS", "S", "M", "L", "XL", "XXL"];
  const material = ["Cotton", "Leather", "Forgen"];
  const brand = ["Mk Footwears", "Mr Kay"];
  const gender = ["Men", "Women"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice ? Number(params.minPrice) : 0,
      maxPrice: params.maxPrice ? Number(params.maxPrice) : 100000,
    });

    setPriceRange([0, params.maxPrice ? Number(params.maxPrice) : 100000]);
  }, [searchParams]);

  const updateURLParams = (newFilter: any) => {
    const params = new URLSearchParams();

    Object.keys(newFilter).forEach((key) => {
      if (Array.isArray(newFilter[key]) && newFilter[key].length > 0) {
        params.append(key, newFilter[key].join(","));
      } else if (newFilter[key]) {
        params.append(key, newFilter[key]);
      }
    });

    setSearchParams(params);
    navigate(`?${params.toString()}`);
  };

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    let newFilter = { ...filters };

    if (type === "checkbox") {
      if (checked) {
        newFilter[name] = Array.isArray(newFilter[name])
          ? [...newFilter[name], value]
          : [value];
      } else {
        newFilter[name] = (newFilter[name] as string[]).filter(
          (item: string) => item !== value
        );
      }
    } else {
      newFilter[name] = value;
    }
    setFilters(newFilter);
    updateURLParams(newFilter);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = Number(e.target.value);
    setPriceRange([0, newPrice]);
    const newFilter = { ...filters, minPrice: 0, maxPrice: newPrice };
    setFilters(newFilter);
    updateURLParams(newFilter);
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium mb-4">Filter</h3>

      {/* Category */}
      <div className="mb-6">
        <label className="block font-medium mb-2">Category</label>
        {category.map((cate) => (
          <div key={cate} className="flex items-center mb-1">
            <input
              onChange={handleFilter}
              value={cate}
              checked={filters.category === cate}
              type="radio"
              className="mr-2 h-4 w-4 accent-blue-600"
              name="category"
            />
            <span>{cate}</span>
          </div>
        ))}
      </div>

      {/* Gender */}
      <div className="mb-6">
        <label className="block font-medium mb-2">Gender</label>
        {gender.map((gen) => (
          <div key={gen} className="flex items-center mb-1">
            <input
              onChange={handleFilter}
              value={gen}
              checked={filters.gender === gen}
              type="radio"
              className="mr-2 h-4 w-4 accent-blue-600"
              name="gender"
            />
            <span>{gen}</span>
          </div>
        ))}
      </div>

      {/* Color */}
      <div className="mb-6">
        <label className="block font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-2">
          {color.map((colr) => (
            <button
              onClick={() => {
                setFilters({ ...filters, color: colr });
                updateURLParams({ ...filters, color: colr });
              }}
              key={colr}
              className={`w-7 h-7 rounded-full border cursor-pointer transition-all hover:scale-105 ${
                filters.color === colr
                  ? "ring-offset-2 ring ring-offset-sky-400"
                  : ""
              }`}
              style={{ backgroundColor: colr }}
            ></button>
          ))}
        </div>
      </div>

      {/* Size */}
      <div className="mb-6">
        <label className="block font-medium mb-2">Size</label>
        {size.map((siz) => (
          <div key={siz} className="flex items-center mb-1">
            <input
              onChange={handleFilter}
              checked={Array.isArray(filters.size) && filters.size.includes(siz)}
              value={siz}
              type="checkbox"
              className="mr-2 h-4 w-4 accent-blue-600"
              name="size"
            />
            <span>{siz}</span>
          </div>
        ))}
      </div>

      {/* Material */}
      <div className="mb-6">
        <label className="block font-medium mb-2">Material</label>
        {material.map((mater) => (
          <div key={mater} className="flex items-center mb-1">
            <input
              onChange={handleFilter}
              checked={Array.isArray(filters.material) && filters.material.includes(mater)}
              value={mater}
              type="checkbox"
              className="mr-2 h-4 w-4 accent-blue-600"
              name="material"
            />
            <span>{mater}</span>
          </div>
        ))}
      </div>

      {/* Brand */}
      <div className="mb-6">
        <label className="block font-medium mb-2">Brand</label>
        {brand.map((bran) => (
          <div key={bran} className="flex items-center mb-1">
            <input
              onChange={handleFilter}
              checked={Array.isArray(filters.brand) && filters.brand.includes(bran)}
              value={bran}
              type="checkbox"
              className="mr-2 h-4 w-4 accent-blue-600"
              name="brand"
            />
            <span>{bran}</span>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block font-medium mb-2">Price Range</label>
        <input
          onChange={handlePriceChange}
          value={priceRange[1]}
          type="range"
          min={0}
          max={100000}
          className="h-1 w-full rounded cursor-pointer accent-blue-600"
          name="priceRange"
        />
        <div className="flex justify-between mt-1">
          <span className="flex items-center">
            <TbCurrencyNaira className="icons" /> 0
          </span>
          <span>{priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSideBar;
