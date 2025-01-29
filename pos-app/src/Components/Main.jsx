import React from 'react';
import { useState } from "react";
import ProductList from './ProductList';
import { Customer, Dinein, Order, Clear, Button } from './Invoice';
import nasigoreng from '../assets/nasigoreng.jpg';
import sotoayam from '../assets/sotoayam.jpg';
import miegoreng from '../assets/miegoreng.jpg';
import buburayam from '../assets/buburayam.jpg';
import perkedel from '../assets/perkedel.jpg';
import bakwan from '../assets/bakwan.jpg';
import tahu from '../assets/tahu.jpg';
import tempe from '../assets/tempe.jpg';
import esteh from '../assets/esteh.jpg';
import jus from '../assets/jus.jpg';
import airmineral from '../assets/airmineral.jpg';
import kopi from '../assets/kopi.jpg';


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
        <ProductList image={miegoreng} name="Mie Goreng" price={13000} onSelectProduct={addOrder}></ProductList>
        <ProductList image={buburayam} name="Bubur Ayam" price={10000} onSelectProduct={addOrder}></ProductList>
        <ProductList image={perkedel} name="Perkedel" price={3000} onSelectProduct={addOrder}></ProductList>
        <ProductList image={bakwan} name="Bakwan" price={2500} onSelectProduct={addOrder}></ProductList>
        <ProductList image={tahu} name="Tahu" price={2000} onSelectProduct={addOrder}></ProductList>
        <ProductList image={tempe} name="Tempe" price={2000} onSelectProduct={addOrder}></ProductList>
        <ProductList image={esteh} name="Es Teh" price={5000} onSelectProduct={addOrder}></ProductList>
        <ProductList image={jus} name="Jus" price={10000} onSelectProduct={addOrder}></ProductList>
        <ProductList image={airmineral} name="Air Mineral" price={4000} onSelectProduct={addOrder}></ProductList>
        <ProductList image={kopi} name="Kopi" price={6000} onSelectProduct={addOrder}></ProductList>
      </div>
      <div className="invoice">
        <Customer></Customer>
        <Dinein></Dinein>
        <Order orders={orders} ></Order>
        <Clear></Clear>
        <Button orders={orders}></Button>
      </div>
    </div>
  );
}

export default Main;