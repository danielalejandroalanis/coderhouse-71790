import { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CartContext } from "../../context";
import { Link } from "react-router-dom";
export const CartWidget = () => {
  const { cartState } = useContext(CartContext);

  const totalItems = cartState.reduce((acc, item) => acc + item.qtyItem, 0);

  return (
    <Link
      to="/checkout"
      style={{
        display: "flex",
        marginRight: "20px",
        alignItems: "center",
        width: "30%",
        justifyContent: "space-between",
      }}
    >
      <CiShoppingCart size={30} />
      {totalItems}
    </Link>
  );
};
