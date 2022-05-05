import React, {useState, useEffect} from 'react'
import * as yup from 'yup'


const PizzaForm = (props) => {

    const {values, checked, submit, change} = props


const initialFormValues = {
    customername: '', 
    pizzasize: '', 
    pepperoni: false, 
    ham: false, 
    pineapple: false, 
    mushrooms: false,
    specialrequest: ''
  }


const [form, setForm] = useState(initialFormValues)

const onSubmit= evt => {
    evt.preventDefault()
    submit()
}

const onChange = (evt) => {
const { name, value, checked, type } = evt.target
const valueToUse = type === "checkbox" ? checked: value
change(name, valueToUse)
setForm({...form, [name]: value})
}


    return(
    
    <div> 
        <h2 data-test-id="pizza-form-header">YAS PIZZA!</h2>
        <form id="pizza-form" data-test-id="pizza-form">
            <label>
                <h3>Name:</h3> 
                    < input type="text" id="name-input" name="customername" onChange={onChange} value={values.customername}/>
            </label>
            <label>
                <h3>Pizza Size:</h3>
                    <select name="pizzasize" id="size-dropdown" onChange={onChange}> 
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
                    <input type="checkbox" name="pepperoni" checked={values.pepperoni} onChange={onChange} />                
                <p>Ham</p>
                    <input type="checkbox" name="ham" checked={values.ham} onChange={onChange}/>
                        </div>
                        <div>
                    <p>Pineapple</p>
                    <input type="checkbox" name="pineapple" checked={values.pineapple} onChange={onChange}/>
                <p>Mushrooms</p>
                   <input type="checkbox" name="mushrooms" checked={values.mushrooms} onChange={onChange}/>
                        </div> 
                    </div>
            </label>
            <label>
                <h3>Have a special request?</h3>
                <input type="text" name="specialrequest" id="special-text" onChange={onChange}/>
            </label>
            
  
        </form>
    </div>


    )

}

export default PizzaForm