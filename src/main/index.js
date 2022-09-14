import './index.css';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get('https://364d6f4e-0c9c-4ad7-a555-00d8f2f2f4d0.mock.pstmn.io/products')
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {});
  }, []);

  return (
    <div>
      <div id="body">
        <div id="banner">
          <img src="/images/banners/banner1.png" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products.map(function (product, index) {
            return (
              <div className="product-card">
                <Link className="product-link" to={`/product/${product.id}`}>
                  <div>
                    <img className="product-img" src={product.imageUrl} />
                  </div>
                  <div className="product-contents">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}</span>
                    <div className="product-seller">
                      <img className="product-avatar" src="/images/icons/avatar.png" />
                      <span>{product.seller}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
