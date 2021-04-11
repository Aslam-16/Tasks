import React from "react";
import "./CustomPizza.css";

export default function CustomPizza() {
    return (
        <div className="custom-pizza">
            <form>
                <h2>Make your own pizza</h2>
                <p>1. Choose a pizza base: (Rs. 200/- each)</p>
                <input type="radio" id="Neapolitan" name="pizza-base" />
                <label for="Neapolitan">Neapolitan Crust</label>
                <input type="radio" id="New York-Style" name="pizza-base" />
                <label for="New York-Style">New York-Style</label>
                <input type="radio" id="Traditional Pan" name="pizza-base" />
                <label for="Traditional Pan">Traditional Pan</label>
                <input type="radio" id="Sicilian" name="pizza-base" />
                <label for="Sicilian">Sicilian</label>
                <input type="radio" id="Authentic Wood-Fired" name="pizza-base" />
                <label for="Authentic Wood-Fired">Authentic Wood-Fired</label><br />

                <p>2. Choose a sauce: (Rs. 50/- each)</p>
                <input type="radio" id="Pesto" name="pizza-sauce" />
                <label for="Pesto">Pesto</label>
                <input type="radio" id="Garlic Ranch Sauce" name="pizza-sauce" />
                <label for="Garlic Ranch Sauce">Garlic Ranch Sauce</label>
                <input type="radio" id="White Garlic Sauce" name="pizza-sauce" />
                <label for="White Garlic Sauce">White Garlic Sauce</label>
                <input type="radio" id="Creamy Bechamel sauce" name="pizza-sauce" />
                <label for="Creamy Bechamel sauce">Creamy Bechamel sauce</label>
                <input type="radio" id="Marinara Sauce" name="pizza-sauce" />
                <label for="Marinara Sauce">Marinara Sauce</label><br />

                <p>3. Choose a cheese: (Rs. 50/- each)</p>
                <input type="radio" id="Mozzarella" name="pizza-cheese" />
                <label for="Mozzarella">Mozzarella</label>
                <input type="radio" id="Cheddar" name="pizza-cheese" />
                <label for="Cheddar">Cheddar</label>
                <input type="radio" id="Gorgonzola" name="pizza-cheese" />
                <label for="Gorgonzola">Gorgonzola</label>
                <input type="radio" id="Goat Cheese" name="pizza-cheese" />
                <label for="Goat Cheese">Goat Cheese</label>
                <input type="radio" id="Provolone" name="pizza-cheese" />
                <label for="Provolone">Provolone</label><br />

                <p>4. Choose veggies: (Rs. 50/- each / free upto 3 veggies)</p>
                <input type="checkbox" id="Baby Spinach" name="pizza-veggies" />
                <label for="Baby Spinach">Baby Spinach</label>
                <input type="checkbox" id="Red Onion" name="pizza-veggies" />
                <label for="Red Onion">Red Onion</label>
                <input type="checkbox" id="Cherry Tomatoes" name="pizza-veggies" />
                <label for="Cherry Tomatoes">Cherry Tomatoes</label>
                <input type="checkbox" id="Olives" name="pizza-veggies" />
                <label for="Olives">Olives</label>
                <input type="checkbox" id="Sliced Almonds" name="pizza-veggies" />
                <label for="Sliced Almonds">Sliced Almonds</label><br />

                <p>5. Choose meat: (Rs. 100/- each / free upto 1 meat)</p>
                <input type="checkbox" id="Sausage" name="pizza-meat" />
                <label for="Sausage">Sausage</label>
                <input type="checkbox" id="Bacon" name="pizza-meat" />
                <label for="Bacon">Bacon</label>
                <input type="checkbox" id="Prosciutto" name="pizza-meat" />
                <label for="Prosciutto">Prosciutto</label>
                <input type="checkbox" id="Meatballs" name="pizza-meat" />
                <label for="Meatballs">Meatballs</label>
                <input type="checkbox" id="Buffalo Chicken" name="pizza-meat" />
                <label for="Buffalo Chicken">Buffalo Chicken</label><br />

                <button className="submit-btn">Submit</button>
            </form>
        </div>
    )
}