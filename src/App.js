import React, {useEffect, useState} from "react";
import "./App.css"
import {Route, Link, Switch} from 'react-router-dom'
import PizzaForm from './components/pizza'
import axios from 'axios'
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

const initialFormErrors ={
  customername: '', 
  pizzasize: '', 
  specialrequest: ''
}

const initialOrders= []


const App = () => {

    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [orders, setOrders] = useState(initialOrders)

  const getOrders = () => {
    axios.get(`https://reqres.in/api/orders`)
    .then(res =>  setOrders(res.data))
      .catch(err => console.error(err))
    }

    const postNewOrder = newOrder => {
      axios.post(`https://reqres.in/api/orders`, newOrder)
      .then(res => {
        setOrders([res.data, ...orders]);
      }).catch(err => console.error(err))
       }



  return (
    <div className="App">
      <img data-test-id="animeGirl" data-style="animeGirl" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fae12c72-d5df-41f7-abe8-686a467d2d9f/demzaf4-28db89aa-b5b8-4ba4-afcd-7f9acf9fe815.jpg/v1/fill/w_1280,h_1811,q_75,strp/pizza_girl___pepperonica_by_pigliicorn_demzaf4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgxMSIsInBhdGgiOiJcL2ZcL2ZhZTEyYzcyLWQ1ZGYtNDFmNy1hYmU4LTY4NmE0NjdkMmQ5ZlwvZGVtemFmNC0yOGRiODlhYS1iNWI4LTRiYTQtYWZjZC03ZjlhY2Y5ZmU4MTUuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vNU5FP5SE9ABNGwSDw2zYu03-pQooaIW1vVlDcqhHc8" alt="Anime girl eating pizza" />
      <h1>Bloom Eats</h1>
      <Switch>
        <Route exact path='/'>
          <Link data-test-id="pizza-form" id="order-pizza" class="link" to="/pizza">Pizza?</Link>
        </Route>
        <Route exact path='/pizza'>
          <Link id="home" class="link" to="/">Home</Link>
          <PizzaForm values={formValues}/>
        </Route>
      </Switch>
      

    </div>
  );
};
export default App;
