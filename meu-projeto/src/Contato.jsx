import react from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const contato = () =>(
    
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laborum officiis quaerat, hic non fuga.</h1>

)



const MyComponent = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('./App.jsx');
  };

  return (
    <div>
      <button onClick={goToAbout}>Ir para About</button>
    </div>
  );
};