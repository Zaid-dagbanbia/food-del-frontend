import { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {

    const {food_list = []} = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className='food-display-list'>
        {food_list.length > 0 ? (
          food_list.map((item) => {
            if (category === 'All' || category === item.category) {
              return (
                <FoodItem
                  key={item._id} // Use _id as key instead of index
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }
            return null; // If the category doesn't match, return null to skip rendering
          })
        ) : (
          <p>No dishes available in this category.</p> // Display message if no items are found
        )}
      </div>
    </div>
  );
};

export default FoodDisplay
