import React from "react";
import "./Dashboard.css";   
import {pizza} from "../../Pizzavariety.js";


export default function Dashboard(props) {
    const cartItem = props.cartItem;
    const setCartItem = props.setCartItem;

    const addItem = (name, price) => {
        setCartItem({...cartItem, name: name});
    }

    return (
        <>
            <h1>
                OUR MENU
            </h1>
            <div className="menu-list">
                {
                    pizza.map((item) => (
                        <div className="menu">
                            <img src={pizza.image} />
                            <h3>{item.name.toUpperCase()}</h3>
                            <span className={item.type}>{item.type}</span>
                            <p>Rs. {item.price}</p>
                            <button className="add" onClick={()=>addItem(item.name, item.price)}>Add to Cart</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

