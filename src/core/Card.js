import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ShowImage from './ShowImage';
import { addItem, updateItem, removeItem } from './cartHelpers';

const Card = ({product,
  showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false,
  setRun = f => f,
  run = undefined}) =>{
    const [redirect, setRedirect] = useState(false)
    const [count, setCount] = useState(product.count)

  const showViewButton = showViewProductButton => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`} class="heart d-flex justify-content-center align-items-center ">
	    		<span><i class="ion-ios-menu fa-2x"></i></span>
	      </Link>
      )
    )
  }

  const showStock = quantity => {
    return quantity > 0 ? (
      <span className="badge badge-primary badge-pill">In Stock </span>
    ) : (
      <span className="badge badge-danger badge-pill">Out of Stock </span>
    );
  };

  const addToCart = () => {
    // console.log('added');
    addItem(product, setRedirect(true))
  }

  const handleChange = productId => event => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  }

  const showCartUpdateOptions = cartUpdate => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Quantity</span>
            </div>
            <input type="number" className="form-control" value={count} onChange={handleChange(product._id)} />
          </div>
        </div>
      )
    )
  }

  const shouldRedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />
    }
  }

  const showAddToCartBtn = showAddToCartButton => {
    return (
      showAddToCartButton && (
        <button onClick={addToCart} class="heart d-flex justify-content-center align-items-center ">
	    			<span><i class="ion-ios-cart fa-2x"></i></span>
	    	</button>
      )
    )
  }

  const showRemoveButton = showRemoveProductButton => {
    return (
      showRemoveProductButton && (
        <button
          onClick={() => {
            removeItem(product._id);
            setRun(!run); // run useEffect in parent Cart
          }}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          Remove
        </button>
      )
    );
  }

    return (
      <div className="product">
        {shouldRedirect(redirect)}
        <div className="product_image"><ShowImage item={product} url="product"/></div>
        <div className="product_content">
          <div className="product_info d-flex flex-row align-items-start justify-content-start">
            <div>
              <div>
                <div className="product_name"><a>{product.name && product.name}</a></div>
                <div className="product_category">{product.category && product.category.name}</div>
                <div className="product_description">{product.description}</div>
                {showStock(product.quantity)}
              </div>
            </div>
            <div className="ml-auto text-right">
              <div className="product_price text-right">N{product.price}</div>
            </div>
          </div>
          <div className="product_buttons">
            <div className="text-right d-flex flex-row align-items-start justify-content-start">
              <div className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
              {showViewButton(showViewProductButton)}
              </div>
              <div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
              {showAddToCartBtn(showAddToCartButton)}
              {showRemoveButton(showRemoveProductButton)}
              </div>
            </div>
          </div>

          {showCartUpdateOptions(cartUpdate)}
        </div>
      </div>
  );
};

export default Card;
