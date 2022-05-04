import React, {useState, useEffect} from 'react'
import * as yup from 'yup'

const initialFormValues = {
    customername: '', 
    pizzasize: '', 
    pepperoni: false, 
    ham: false, 
    pineapple: false, 
    mushrooms: false,
    specialrequest: ''
  }


const PizzaForm = (props) => {

    const {values, checked, submit} = props


const [form, setForm] = useState(initialFormValues)

const onSubmit= evt => {
    evt.preventDefault()
    submit()
}

const formChange = (evt) => {
    console.log(evt)
}


    return(
    
    <div> 
        <h2 data-test-id="pizza-form-header">YAS PIZZA!</h2>
        <form id="pizza-form" data-test-id="pizza-form">
            <label>
                <h3>Name:</h3> 
                    < input type="text" id="name-input" name="customername" onChange={formChange} value={values.customername}/>
            </label>
            <label>
                <h3>Pizza Size:</h3>
                    <select name="pizzasize" id="size-dropdown" onChange={formChange}> 
                        <option value=''>--How big do you want it?--</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
            </label>
            <label>
                <h3>Toppings</h3>
                    <div className="toppingmenu">
                        <div>
                <p>Pepperoni</p>
                    <input type="checkbox" name="pepperoni" checked={values.pepperoni} onChange={formChange}/>                
                <p>Ham</p>
                    <input type="checkbox" name="ham" checked={values.ham} onChange={formChange}/>
                        </div>
                        <div>
                    <p>Pineapple</p>
                    <input type="checkbox" name="pineapple" checked={values.pineapple} onChange={formChange}/>
                <p>Mushrooms</p>
                   <input type="checkbox" name="mushrooms" checked={values.mushrooms} onChange={formChange}/>
                        </div> 
                    </div>
            </label>
            <label>
                <h3>Have a special request?</h3>
                <input type="text" name="specialrequest" id="special-text" onChange={formChange}/>
            </label>
            
  
        </form>
    </div>


    )

}

export default PizzaForm