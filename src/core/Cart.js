import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import Background from "../images/home.jpg";
import { getCart, removeItem } from './cartHelpers';
import Card from './Card';
import Checkout from './Checkout';

const Cart = () => {
    const [items, setItems] = useState([]);
    const [run, setRun] = useState(false);

    useEffect(() => {
        setItems(getCart());
    }, [run]);

    const showItems = items => {
        return (
            <div>
                <h4>Your cart has {`${items.length}`} items</h4>
                <hr />
                {items.map((product, i) => (
                    <Card
                        key={i}
                        product={product}
                        showAddToCartButton={false}
                        cartUpdate={true}
                        showRemoveProductButton={true}
                        setRun={setRun}
                        run={run}
                    />
                ))}
            </div>
        );
    };

    const noItemsMessage = () => (
        <h4>
            Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link>
        </h4>
    );

    return (
        <Layout
            title="Shopping Cart"
            description="Manage your cart items. Add remove checkout or continue shopping."
            className="container-fluid pt-4"
            background={Background}
        >
            <div className="alert alert-danger">
                          <p className="alert alert-success"><span className="mr-4">Account Number: 0162771928</span> <span className="mr-4"> Account Name: Ayeni Olajumoke</span>  <span> Bank: GTB</span></p>
                         <small>Our website does not support users card credentials, <br />
                         please use the following credentails below as default to make a false payment so as to place the order, then kindly make exact amount transfer to the a/c no above, so as
                         to process your order:
                             <br />
                         </small>
                         <small>Default Card No: 4111 1111 1111 1111</small><br />
                         <small>Default Card MM/YY: 12/20</small><br />
                         <small>Default Card CVV: 411</small>
             </div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">{items.length > 0 ? showItems(items) : noItemsMessage()}</div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                    <h2 className="mb-4">Your cart summary</h2>
                    <hr />
                    <Checkout products={items} setRun={setRun} run={run} />
                </div>
            </div>
        </Layout>
    );
};

export default Cart;
