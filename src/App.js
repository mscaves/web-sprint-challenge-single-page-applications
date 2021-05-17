import React from "react";
import { useState } from "react";
import { Switch, Route } from 'react-router-dom';

const defaultFormValues = {
  name:'',
  size:'',
  toppings: '',
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
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/pizza">
        <Form id="pizza-form"></Form>
      </Route>
    </>
  );
};
export default App;
