import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './index.css';
function ProductPage() {
  const { id } = useParams();
  const [product, setProducts] = useState(null);
  useEffect(function () {
    axios
      .get(`https://364d6f4e-0c9c-4ad7-a555-00d8f2f2f4d0.mock.pstmn.io/products/${id}`)
      .then(function (result) {
        setProducts(result.data);
        console.log(result);
      })
      .catch(function (error) {});
  }, []);
  if (product === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div id="image-box">
        <img src={'/' + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" alt="" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}won</div>
        <div id="createdAt">2020.12.8</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
