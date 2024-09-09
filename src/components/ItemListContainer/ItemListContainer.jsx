import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ greeting }) => {
  return (
    <div
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        height: "90vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* {greeting} */}
      <ItemCount />
    </div>
  );
};

export default ItemListContainer;
