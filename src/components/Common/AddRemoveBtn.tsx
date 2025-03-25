import { useState } from "react";

interface QuantityProps {
  quantity: number;
}

const AddRemoveBtn: React.FC<QuantityProps> = ({
  quantity: initialQuantity,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleQuantityChange = (action: "plus" | "minus") => () => {
    setQuantity((prevQuantity) => {
      if (action === "plus") {
        return prevQuantity + 1;
      } else if (action === "minus" && prevQuantity > 1) {
        return prevQuantity - 1;
      }
      return prevQuantity;
    });
  };

  return (
    <div className="flex items-center mt-2 gap-4 cursor-pointer">
      <button onClick={handleQuantityChange("minus")} className="product_btn">
        -
      </button>
      <span>{quantity}</span>
      <button onClick={handleQuantityChange("plus")} className="product_btn">
        +
      </button>
    </div>
  );
};

export default AddRemoveBtn;
