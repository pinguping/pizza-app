import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
   return ( 
       <div className="container">
           <Title />
           <main>
           <Menu />
           </main>
           <Footer />
           <Order />
       </div>
   );
}
function Title() {
   return <h1 style={{color:"orange", fontSize:"48px", textTransform:"uppercase"}}>Ashley's Pizza Co.</h1>;
}
const pizzaData = [
   {
     name: "Focaccia",
     ingredients: "Bread with italian olive oil and rosemary",
     price: 6,
     image: "/pizzas/focaccia.jpg",
     soldOut: false,
   },
   {
     name: "Pizza Margherita",
     ingredients: "Tomato and mozarella",
     price: 10,
     image: "/pizzas/margherita.jpg",
     soldOut: false,
   },
   {
     name: "Pizza Spinaci",
     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
     price: 12,
     image: "/pizzas/spinaci.jpg",
     soldOut: false,
   },
   {
     name: "Pizza Funghi",
     ingredients: "Tomato, mozarella, mushrooms, and onion",
     price: 12,
     image: "/pizzas/funghi.jpg",
     soldOut: false,
   },
   {
     name: "Pizza Salamino",
     ingredients: "Tomato, mozarella, and pepperoni",
     price: 15,
     image: "/pizzas/salamino.jpg",
     soldOut: false,
   },
   {
     name: "Pizza Prosciutto",
     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
     price: 18,
     image: "/pizzas/prosciutto.jpg",
     soldOut: false,
   },
];

function Pizza({ name, ingredients, price, image }) {
   return (
       <div className="pizza">
           <img src={image} alt={name} width="300" />
           <h2>{name}</h2>
           <p>Ingredients: {ingredients}</p>
           <p>Price: ${price}</p>
       </div>
   );
}

function Order() {
   return (
       <div className="order">
           <button class='btn'>Order Now</button>
       </div>
   );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <p>Authentic Italian cuisine, all from our stone oven</p>
      <div className="pizza-grid">
        {pizzaData.map((pizza, index) => (
          <Pizza
            key={index}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            image={pizza.image}
          />
        ))}
      </div>
    </div>
  );
}
 
// 1. Create a Footer component.
// 2. In the Footer(), return a <footer> element with the text “We’re currently open”.
// 4. Add the footer style defined in the css file to the footer element.
// 5. Assume our pizza shop only opens from 10am to 10pm everyday. Depending on the currenttime, display the footer text either “We’re currently open” or “Sorry we’re closed”.
function Footer() {
   const currentHour = new Date().getHours();
   return (
   <footer className="footer">
       {currentHour >= 10 && currentHour <= 22
       ? "We're currently open"
       : "Sorry we're closed"}
   </footer>
   );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);