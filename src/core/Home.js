import React, { useState, useEffect } from 'react';
import Layout from "../core/Layout";
import {Link} from "react-router-dom";
import Background from "../images/home.jpg";
import { getProducts } from './apiCore';
import Card from './Card';
// import Search from './Search';

const Home = () => {

  const [productsBySell, setProductsBySell] = useState([]);
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [error, setError] = useState(false);

    const loadProductsBySell = () => {
      getProducts('sold').then(data => {
          if (data.error) {
              setError(data.error);
          } else {
              setProductsBySell(data);
          }
      });
  };

  const loadProductsByArrival = () => {
    getProducts('createdAt').then(data => {
        console.log(data);
        if (data.error) {
            setError(data.error);
        } else {
            setProductsByArrival(data);
        }
    });
};

useEffect(() => {
  loadProductsByArrival();
  loadProductsBySell();
}, []);

  const homeIcon = () => {
    return (
      <div>
      <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="block-2 yellow">
              <span className="wrap-icon">
                <i class="fas fa-sm fa-tags" style={{color: "white"}}></i>
              </span>
              <h2>Discount</h2>
              <p>You get a 5% discount on 3 or more products you order and also a 5% discount when shopping with us for the 3rd time </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="block-2 teal">
              <span className="wrap-icon">
                <span className="flaticon-award"></span>
              </span>
              <h2>Referral Bonus</h2>
              <p>You get a 5% discount when you refer Two people that shopped with us</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="block-2 yellow">
              <span className="wrap-icon">
                <i class="fas fa-sm fa-box" style={{color: "white"}}></i>
              </span>
              <h2>Added Package</h2>
              <p>You get a Happy birthday ballon when you order anything for someone and a greeting card on all flowers orders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
            </div>
    )
  }

    return (
        <Layout title="My BabesNG" description="Get your teady bears and other lovely items at afforadable price at MybabesNG" background={Background}>
            <div class="products" style={{paddingBottom: "0"}}>
			<div class="container">
				<div class="row">
					<div class="col-lg-6 offset-lg-3">
						<div class="section_title text-center"><span style={{color: '#2fce98'}}>Latest Products</span> on MybabesNG</div>
					</div>
				</div>
				<div class="row page_nav_row">
					<div class="col">
						<div class="page_nav">
							<ul class="d-flex flex-row align-items-start justify-content-center">
              <li class="active"><Link to="/shop">Teady</Link></li>
              <li><Link to="/shop">Flowers</Link></li>
              <li><Link to="/shop">Toys</Link></li>
							</ul>
						</div>
					</div>
				</div>
        </div>
				</div>
           <div className="products" style={{paddingTop: "0"}}>
                  <div className="container">
                    <div className="row products_row">
            {productsByArrival.map((product, i) => (
                    <div key={i} className="col-lg-3 col-md-4">
                        <Card product={product} />
                    </div>
                ))}
                </div>
             </div>
           </div>

           <div class="products" style={{paddingTop: "0", paddingBottom: "0"}}>
			<div class="container">
				<div class="row">
					<div class="col-lg-6 offset-lg-3">
						<div class="section_title text-center"><span style={{color: '#2fce98'}}>Popular</span> on MybabesNG</div>
					</div>
				</div>
        </div>
				</div>

           <div className="products" style={{paddingTop: "0", paddingBottom: "0"}}>
                  <div className="container">
                    <div className="row products_row">
                    {productsBySell.map((product, i) => (
                    <div key={i} className="col-lg-3 col-md-4">
                        <Card product={product} />
                    </div>
                ))}
                </div>
             </div>
           </div>
           <div class="section_title text-center">Terms of Service
           {homeIcon()}
          </div>
        </Layout>
    );
};

export default Home;
