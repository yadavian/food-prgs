import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [count, setcount] = useState(0)

  let tags = {
    id: 1, tagName: "Rajsthani",
    id: 2, tagName: "South Indian",
    id: 3, tagName: "Marathi",
    id: 4, tagName: "North Indian",
    id: 5, tagName: "Punjabi",
    id: 6, tagName: "Biryani",
    id: 7, tagName: "Mughlai",
    id: 8, tagName: "Lucknowi",
    id: 9, tagName: "Hydarabadi",
    id: 10, tagName: "Kabab",
    id: 11, tagName: "Desserts",
    id: 12, tagName: "Beverages",
    id: 13, tagName: "Inidan",
    id: 14, tagName: "American",
    id: 15, tagName: "Chinese",
    id: 16, tagName: "Burgers",
    id: 17, tagName: "Italian",
    id: 18, tagName: "Pure Veg",
  }

  let restaurants = [
    { id: 1, restaurantName: "Balaji South Indian Express", tagsId: [2, 1], restaurantImages: ["", ""], restaurantLocation: "Thane Panchpakhadi", distanceFromCust: 1200, timeToReach: 25, rating: 4.3, ratingCount: 1000, },
    { id: 2, restaurantName: "Priyanka Pure Veg Restaurant", tags: [18], restaurantImages: ["", ""], restaurantLocation: "Airoli", distanceFromCust: 1200, timeToReach: 15, rating: 4.3, ratingCount: 1000, },
    { id: 3, restaurantName: "NAADBRAMHA IDLI", tags: [2], restaurantImages: ["", ""], restaurantLocation: "Airoli", distanceFromCust: 1700, timeToReach: 14, rating: 4.3, ratingCount: 100, },
  ]
  // console.log('restaurants', restaurants)

  let menu = {
    id: 1, menuItem: "Recommended", restaurantId: 1,
    id: 2, menuItem: "Kulfi", restaurantId: 1,
    id: 3, menuItem: "Soft Drinks", restaurantId: 1,
    id: 4, menuItem: "Navratri Specials", restaurantId: 2,
    id: 5, menuItem: "South Indian", restaurantId: 3,
    id: 6, menuItem: "Beverages", restaurantId: 3,
  }
  // console.log('menu', menu)

  let foods = [
    // Balaji restaurant foods
    { id: 1, foodName: "Steam Idli", foodImages: "", foodPrice: 100, quantityPiecesTaste: "", isBestSeller: false, restaurantId: 1, menuId: [1], desc: "", },
    { id: 2, foodName: "Idli Wada", foodImages: "", foodPrice: 200, quantityPiecesTaste: "", isBestSeller: false, restaurantId: 1, menuId: [1], desc: "", },
    { id: 3, foodName: "Medu Vada", foodImages: "", foodPrice: 110, quantityPiecesTaste: "", isBestSeller: false, restaurantId: 1, menuId: [1], desc: "", },
    { id: 4, foodName: "Dahi Vada", foodImages: "", foodPrice: 25, quantityPiecesTaste: "", isBestSeller: false, restaurantId: 1, menuId: [1], desc: "", },
    { id: 5, foodName: "Sada Dosa", foodImages: "", foodPrice: 15, quantityPiecesTaste: "", isBestSeller: false, restaurantId: 1, menuId: [1], desc: "", },
    { id: 6, foodName: "Mysore Sada Dosa", foodImages: "", foodPrice: 250, quantityPiecesTaste: "", isBestSeller: false, restaurantId: 1, menuId: [1], desc: "", },
    { id: 7, foodName: "Mysore Masala Dosa", foodImages: "", foodPrice: 110, quantityPiecesTaste: "", isBestSeller: false, restaurantId: 1, menuId: [1], desc: "", },
    { id: 8, foodName: "Cheese Chilly Dosa", foodImages: "", foodPrice: 130, quantityPiecesTaste: "", isBestSeller: false, restaurantId: 1, menuId: [1], desc: "", },
    { id: 9, foodName: "Onion Uttapam", foodImages: "", foodPrice: 250, quantityPiecesTaste: "", isBestSeller: false, restaurantId: 1, menuId: [1], desc: "", },
    { id: 10, foodName: "Cheese Uttapam", foodImages: "", foodPrice: 65, quantityPiecesTaste: "", isBestSeller: false, restaurantId: 1, menuId: [1], desc: "", },
    { id: 11, foodName: "Cheese Onion Uttapam", foodImages: "", foodPrice: 75, quantityPiecesTaste: "", isBestSeller: false, restaurantId: 1, menuId: [1], desc: "", },
    { id: 12, foodName: "Sabudana Khichdi", foodImages: "", foodPrice: 58, quantityPiecesTaste: "", isBestSeller: false, restaurantId: 1, desc: "", menuId: [4] },
    { id: 13, foodName: "Sabudana Khichdi Navratri Special", foodImages: "", foodPrice: 45, quantityPiecesTaste: "", isBestSeller: false, restaurantId: 1, menuId: [4], desc: "Sabudana Khichdi. Made with sago pearls or sabudana, boiled potatoes, roasted peanuts and a few spices" },
    { id: 14, foodName: "Sabudana Vada Navratri Special", foodImages: "", foodPrice: 152, quantityPiecesTaste: "", isBestSeller: false, restaurantId: 1, menuId: [4], desc: "Sabudana Vada is a popular crisp fried Indian snack made with tapioca pearls (sago), roasted peanuts, boiled potatoes and herbs." },
    { id: 15, foodName: "Sweet Kachori Navratri Special", foodImages: "", foodPrice: 95, quantityPiecesTaste: "", isBestSeller: false, restaurantId: 1, menuId: [4], dsc: "Round ball made of flour and dough filled with a stuffing of yellow moong dal, black pepper, red chili powder and ginger paste" },

    // Priyanka restaurant foods
    { id: 16, foodName: "Gadbad Ice Cream", foodImages: "", foodPrice: 220, quantityPiecesTaste: "", isBestSeller: false, restaurantId: 1, desc: "", menuId: [1] },
    { id: 17, foodName: "Veg Cheese Twist Roll (8Pcs)", foodImages: "", foodPrice: 280, quantityPiecesTaste: "8Pcs", isBestSeller: false, restaurantId: 1, desc: "", menuId: [1] },
    { id: 18, foodName: "Paneer Sholay Kabab (8 Pcs)", foodImages: "", foodPrice: 270, quantityPiecesTaste: "8 Pcs", isBestSeller: false, restaurantId: 1, desc: "", menuId: [1] },
    { id: 19, foodName: "Pineapple Raita (Sweet)", foodImages: "", foodPrice: 125, quantityPiecesTaste: "Sweet", isBestSeller: false, restaurantId: 1, desc: "", menuId: [1] },
    { id: 20, foodName: "Sabudana Wada", foodImages: "", foodPrice: 99, quantityPiecesTaste: "", isBestSeller: false, restaurantId: 1, desc: "", menuId: [1] },
    { id: 21, foodName: "Malai", foodImages: "", foodPrice: 87, quantityPiecesTaste: "", isBestSeller: false, restaurantId: 1, desc: "", menuId: [2] },
    { id: 22, foodName: "Badam Pista", foodImages: "", foodPrice: 99, quantityPiecesTaste: "", isBestSeller: false, restaurantId: 1, desc: "", menuId: [2] },
    { id: 23, foodName: "Kesar Pista", foodImages: "", foodPrice: 99, quantityPiecesTaste: "", isBestSeller: false, restaurantId: 1, desc: "", menuId: [2] },
    { id: 24, foodName: "Mazaa", foodImages: "", foodPrice: 150, quantityPiecesTaste: "", isBestSeller: false, restaurantId: 1, desc: "", menuId: [3] },
    { id: 25, foodName: "Red Bull", foodImages: "", foodPrice: 155, quantityPiecesTaste: "", isBestSeller: false, restaurantId: 1, desc: "", menuId: [3] },
    { id: 26, foodName: "Fresh Lim juice", foodImages: "", foodPrice: 99, quantityPiecesTaste: "", isBestSeller: false, restaurantId: 1, desc: "", menuId: [3] },
    { id: 27, foodName: "FreshLime Soda (Sweet or Salty)", foodImages: "", foodPrice: 99, quantityPiecesTaste: "Sweet or Salty", isBestSeller: false, restaurantId: 1, desc: "", menuId: [3] },

    // Nadbrahma foods
    { id: 27, foodName: "Idli samber chutney (3 pieces)", foodImages: "", foodPrice: 50, quantityPiecesTaste: "3 pieces", isBestSeller: false, restaurantId: 1, desc: "", menuId: [1] },
    { id: 27, foodName: "Thatte Ghee Masala Idli", foodImages: "", foodPrice: 80, quantityPiecesTaste: "", isBestSeller: false, restaurantId: 1, desc: "", menuId: [1] },
    { id: 27, foodName: "Button Ghee Masala Idli", foodImages: "", foodPrice: 95, quantityPiecesTaste: "", isBestSeller: false, restaurantId: 1, desc: "", menuId: [1] },
    { id: 27, foodName: "Idli samber chutney (3 pieces)", foodImages: "", foodPrice: 50, quantityPiecesTaste: "3 pieces", isBestSeller: false, restaurantId: 1, desc: "", menuId: [5] },
    { id: 27, foodName: "Idli samber chutney (6 pieces)", foodImages: "", foodPrice: 85, quantityPiecesTaste: "6 pieces", isBestSeller: false, restaurantId: 1, desc: "", menuId: [5] },
    { id: 27, foodName: "Coffee", foodImages: "", foodPrice: 20, quantityPiecesTaste: "", isBestSeller: false, restaurantId: 1, desc: "", menuId: [6] },
  ]

  // console.log('foods', foods)

  let cart = [];

  const fn_addToCart = (i) => {
    cart.push(foods[i])
    console.log('cart', cart)
  }

  const fn_RemoveToCart = (i) => {
    let updateFoods = foods.filter((value, index) => {
      return value.id !== foods[i].id
    })
    console.log('updateFoods', updateFoods)

    foods.splice(i, 1)
    console.log('foods', foods)
  }

  const fn_incCount = (count, foodId) => {
    setcount(count + 1)
    let index = foods.findIndex((value) => {
      return value.id == foodId
    })
    foods[index].foodPrice = 50000
    console.log('foods', foods)
  }

  const fn_SearchFoodByName = (name) => {
    let filteredData = foods.filter((food, index) => {
      return food['foodName'].includes(name)
    })
    console.log('filteredData', filteredData)
  }

  const fn_sortByName = (direction) => {
    if (direction == "ASC") {
      foods.sort((a, b) => a.foodName.localeCompare(b.foodName))
    } else {
      foods.sort((b, a) => a.foodName.localeCompare(b.foodName))
    }
    console.log('foods', foods)
  }

  const fn_sortByPrice = (direction) => {
    if (direction == "ASC") {
      foods.sort((a, b) => a.foodPrice - b.foodPrice)
    } else {
      foods.sort((b, a) => a.foodPrice - b.foodPrice)
    }
    console.log('foods', foods)
  }

  console.log('cart', cart)

  return (
    <div style={{ backgroundColor: '' }}>

      <button className='btn btn-success' onClick={() => fn_sortByName("ASC")} > Sort by Name ASC</button>
      <button className='btn btn-success' onClick={() => fn_sortByName("DSC")} > Sort by Name DSC</button>
      <button className='btn btn-warning' onClick={() => fn_sortByPrice("ASC")} > Sort by Price ASC</button>
      <button className='btn btn-warning' onClick={() => fn_sortByPrice("DSC")} > Sort by Price DSC</button>

      {
        foods.map((d, i) => {
          return (
            <div style={{ display: 'flex', justifyContent: "space-evenly", width: "100%" }}>
              <button className='btn btn-warning' onClick={() => fn_addToCart(i)} key={d.id}>Add Food {i}</button>
              <button className='btn btn-danger' onClick={() => fn_RemoveToCart(i)} key={d.id}> Remove Food {i}</button>
              <button className='btn btn-success' onClick={() => fn_incCount(count, d.id)} key={d.id}> Increase Count in  {i}</button>
              <button className='btn btn-primary' onClick={() => fn_SearchFoodByName("Masa")} key={d.id}>Search</button>
            </div>
          )
        })
      }


    </div>
  );
}

export default App;
