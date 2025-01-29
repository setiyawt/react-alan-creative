import React from 'react';
import { useState } from "react";
import ProductList from './ProductList';
import { Customer, Dinein, Order, Clear } from './Invoice';
import nasigoreng from '../assets/nasigoreng.jpg';
import sotoayam from '../assets/sotoayam.jpg';

const Main = () => {
  const [orders, setOrders] = useState([]);
  const addOrder = (name, price) => {
    setOrders((prevOrders) => {
      const existingOrderIndex = prevOrders.findIndex(
        (order) => order.name === name
      );
      if (existingOrderIndex !== -1) {
        const updatedOrders = [...prevOrders];
        const prevQuantity = updatedOrders[existingOrderIndex].quantity;
            updatedOrders[existingOrderIndex] = {...updatedOrders[existingOrderIndex],
              quantity: prevQuantity + 1
            };
            return updatedOrders;
      } else {
        return price ? [...prevOrders, { name, price, quantity: 1 }] : prevOrders;
      }
    });
  };
  
  return (
    <div className="layout">
      <div className="product">
        <ProductList image={nasigoreng} name="Nasi Goreng" price={15000} onSelectProduct={addOrder}></ProductList>
        <ProductList image={sotoayam} name="Soto Ayam" price={23000} onSelectProduct={addOrder}></ProductList>
        <ProductList image={nasigoreng} name="Nasi Goreng"></ProductList>
        <ProductList image={nasigoreng} name="Nasi Goreng"></ProductList>
        <ProductList image={nasigoreng} name="Nasi Goreng"></ProductList>
        <ProductList image={nasigoreng} name="Nasi Goreng"></ProductList>
        <ProductList image={nasigoreng} name="Nasi Goreng"></ProductList>
        <ProductList image={nasigoreng} name="Nasi Goreng"></ProductList>
        <ProductList image={nasigoreng} name="Nasi Goreng"></ProductList>
        <ProductList image={nasigoreng} name="Nasi Goreng"></ProductList>
        <ProductList image={nasigoreng} name="Nasi Goreng"></ProductList>
        <ProductList image={nasigoreng} name="Nasi Goreng"></ProductList>
      </div>
      <div className="invoice">
        <Customer></Customer>
        <Dinein></Dinein>
        <Order orders={orders} ></Order>
        <Clear></Clear>
      </div>
    </div>
  );
}

export default Main;