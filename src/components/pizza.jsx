import React, {useState, useEffect} from 'react'
import * as yup from 'yup'

const initialDisabled = true;

export default function PizzaForm (props) {

    const formSchema = yup.object({
        customername: yup.string().required('Name is required').min(2, "name must be at least 2 characters"),
        pizzasize: yup.string().required('please choose a pizza size'),
        pepperoni: yup.boolean(),
        ham: yup.boolean(), 
        pineapple: yup.boolean(),
        mushrooms: yup.boolean(), 
        specialrequest: yup.string()

    })


const initialFormValues = {
    customername: '', 
    pizzasize: '', 
    pepperoni: false, 
    ham: false, 
    pineapple: false, 
    mushrooms: false,
    specialrequest: ''
  }

  const formErrors = {
    customername: 'name must be at least 2 characters', 
    pizzasize: '', 
    specialrequest: '',
  }


const [form, setForm] = useState(initialFormValues)
const [disabled, setDisabled] = useState(initialDisabled)
const {values, change, orders, setOrders} = props

const [errors, setErrors] = useState({
    customername: '', 
    pizzasize: '', 
    pepperoni: '', 
    ham: '', 
    pineapple: '',
    mushrooms: '',
    specialrequest: ''
})


// const validate = (name, value) => {
//     yup.reach(formSchema, name)
//       .validate(value)
//       .then(()=>{
//           setErrors({...errors, [name]: ""})
//       })
//       .catch((err) => {
//           setErrors({...errors, [name]: err.errors[0] })
//       })
// }

const validate = (customername, value) => {
    yup.reach(formSchema, customername)
      .validate(value)
      .then(() => setErrors({ ...errors, [customername]: ""}))
      .catch(err => setErrors({ ...errors, [customername]: err.errors[0]}))
  }
  

const onChange = (evt) => {
const { name, value } = evt.target
const valueToUse = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value
change(name, valueToUse)
setForm({...form, [name]: valueToUse})
validate();
}


const onSubmit= evt => {
    evt.preventDefault()
    setOrders([form, ...orders])
    setForm(initialFormValues)
    validate();

}


  useEffect(() => {
    formSchema.isValid(values).then(valid => setDisabled(!valid))
  }, [values])








    return(
    
    <div> 
        <h2 data-test-id="pizza-form-header">YAS PIZZA!</h2>
            
        <form id="pizza-form" data-test-id="pizza-form" onSubmit={onSubmit}>
            <label>
                <h3>Name:</h3><p>{formErrors.customername}</p> 
                    < input type="text" id="name-input" data-test-id="nameField" name="customername" onChange={onChange} value={values.customername}/>
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
                <input type="text" name="specialrequest" id="special-text" data-test-id='specialrequest' onChange={onChange}/>
            </label>
            <div className='errors'>
                <div><p></p>
                <p></p></div>
            </div>
            <button name= "submitBtn" type="submit" id="order-button" data-test-id="submitBtn" disabled={disabled}>Submit Order</button>
        </form>
    </div>
    )

}
