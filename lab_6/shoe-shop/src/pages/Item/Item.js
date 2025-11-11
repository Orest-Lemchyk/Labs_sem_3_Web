import { useParams } from "react-router-dom";
import { shoes } from "../data/shoes";

function Item() {
  const { id } = useParams();
  const shoe = shoes.find((s) => s.id === parseInt(id));

  if (!shoe) return <h2>Item not found</h2>;

  return (
    <div className="item-page">
      <img src={shoe.image} alt={shoe.name} />
      <h2>{shoe.name}</h2>
      <p>Type: {shoe.type}</p>
      <p>Color: {shoe.color}</p>
      <p>Price: ${shoe.price}</p>
      <p>{shoe.description}</p>
    </div>
  );
}

export default Item;
