import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems = {}, addToCart = () => {}, removeFromCart = () => {}, url = "" } = useContext(StoreContext);

    // Ensure that all required props are provided
    if (!id || !name || !price || !description || !image) {
      console.error("Missing required FoodItem props");
      return null; // Return null to avoid rendering the component without required props
    }

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={url+"/images/"+image} alt="" className="food-item-image" />
        {!cartItems[id] ? (
          <img
            className="add"
            src={assets.add_icon_white}
            alt=""
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">€{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
