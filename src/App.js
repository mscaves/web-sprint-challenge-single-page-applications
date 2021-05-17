import React from "react";
import { useState } from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Form from './components/Form'

const defaultFormValues = {
  name:'',
  size:'',
  pepperoni: '',
  sausage:'',
  sauerkraut:'',
  pineapple: 'Aw Hell No',
  specialInstructions: ''
};

const App = () => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const updateFormValues = (key, value) => {
    setFormValues({...formValues, [key]:value})
  };

  return (
    <>
      <h1>Lambda Eats</h1>
      <p>Join our membership program to spend even more money and earn extra pounds!</p>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        
        <Route path="/pizza">
          <Form id="pizza-form" formValues={formValues} updateFormValues={updateFormValues}></Form>
        </Route>
      </Switch>
    </>
  );
};
export default App;
