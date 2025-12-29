import { useState } from 'react'
// import React from 'react;
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [foodArrayIndex, setFoodArrayIndex] = useState(0);
  const favoriteThings = ["Rice", "Yam", "Beans", "Meat", "Salad"];
  const [myFavoriteThings, setMyFavoriteThings] = useState([]);

  const thingsElements = myFavoriteThings.map((thing, index) => (
    <p key={index}>{thing}</p>
  ));

  function addFavoriteThing() {
    // const foodItemToAdd = favoriteThings[0];
    // foodItemToAdd -> 'Rice'
    const foodItemToAdd = favoriteThings[foodArrayIndex];

    // setMyFavoriteThings(['Rice']);
    setMyFavoriteThings([...myFavoriteThings, foodItemToAdd]);

    // setFoodArrayIndex(0 + 1);
    setFoodArrayIndex(foodArrayIndex + 1);

    // setMyFavoriteThings(function (prevMyFavoriteThings) {
    //   // const result = [...prevMyFavoriteThings, [prevMyFavoriteThings.length]];
    //   // favoriteThings[0] -> "Rice"
    //   // favoriteThings[1] -> "Yam"
    //   const result = [...prevMyFavoriteThings, favoriteThings[foodArrayIndex]];
    //   setFoodArrayIndex(foodArrayIndex + 1);
    //   console.log(result);
    //   return result;
    // });
  }

  return (
      <main>
        <button onClick={addFavoriteThing}>Add item</button>
        <section aria-live='polite'>{thingsElements}</section>
      </main>
  )
}

export default App
