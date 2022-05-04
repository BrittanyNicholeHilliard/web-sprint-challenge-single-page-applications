import React, {useState, useEffect} from 'react'
import * as yup from 'yup'


    const initialFormValues = {
        name: '', 
        size: '', 
        topping1: false, 
        topping2: false, 
        topping3: false, 
        topping4: false,
    }


const PizzaForm = () => {


    const [formValues, setFormValues] = useState(initialFormValues);



    return(
    
    <div> 
        <h2 data-test-id="pizza-form-header">YAS PIZZA!</h2>
        <form id="pizza-form" data-test-id="pizza-form">
            <label>
                <h3>Name:</h3> 
                    < input type="text" id="name-input" name="customername" />
            </label>
            <label>
                <h3>Pizza Size:</h3>
                    <select name="pizza-size" id="size-dropdown"> 
                        <option value=''>--How big do you want it?--</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
            </label>
            <label>
                <h3>Toppings</h3>
                <div className="toppingmenu">
                <p>Pepperoni</p>
                    <input type="checkbox" name="pepperoni"/>                
                <p>Ham</p>
                    <input type="checkbox" name="ham"/>
                <p>Pineapple</p>
                    <input type="checkbox" name="pineapple"/>
                <p>Mushrooms</p>
                    <input type="checkbox" name="mushrooms" />
                </div>
                    


            </label>
            

        </form>
    </div>


    )

}

export default PizzaForm