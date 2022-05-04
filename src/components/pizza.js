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
            < input type="text" id="name-input" name="customername" />
            </label>
        </form>
    </div>


    )

}

export default PizzaForm