import React from 'react';
import './App.css';

class ShoppingList extends React.Component {
  render() {
    const {name, age, blood} = banana() || {};
    return (
      <div className="shopping-list">
        <h1>Shopping List for {name} {age} {blood}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
const banana = () => {
  return {
    name: 'filipe',
    age: 29,
    blood: 'A',
  };
};
