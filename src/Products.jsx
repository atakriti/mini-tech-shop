import React, { useState } from "react";
import "./products.scss";

const initialProducts = [
  {
    productName: "xbox",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Xbox-console.jpg/1200px-Xbox-console.jpg",
    price: "450",
    sold: false,
  },
  {
    productName: "Playstation",
    photo:
      "https://www.tvmovie.de/bilder/758/2020/06/12/77329-ps5-das-ist-das-finale-design-der-playstation-5.jpg?itok=nauph4gp",
    price: "500",
    sold: false,
  },
  {
    productName: "iPhone",
    photo:
      "https://media.cdn.kaufland.de/product-images/1024x1024/539adaff2e57ca05984e433fe38cebfb.jpg",
    price: "750",
    sold: false,
  },
  {
    productName: "MacBook",
    photo: "https://www.notebookcheck.com/uploads/tx_nbc2/air13teaser.jpg",
    price: "900",
    sold: false,
  },
  {
    productName: "xbox1",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Xbox-console.jpg/1200px-Xbox-console.jpg",
    price: "450",
    sold: false,
  },
  {
    productName: "Playstation1",
    photo:
      "https://www.tvmovie.de/bilder/758/2020/06/12/77329-ps5-das-ist-das-finale-design-der-playstation-5.jpg?itok=nauph4gp",
    price: "500",
    sold: false,
  },
  {
    productName: "iPhone1",
    photo:
      "https://media.cdn.kaufland.de/product-images/1024x1024/539adaff2e57ca05984e433fe38cebfb.jpg",
    price: "750",
    sold: false,
  },
  {
    productName: "MacBook1",
    photo: "https://www.notebookcheck.com/uploads/tx_nbc2/air13teaser.jpg",
    price: "900",
    sold: false,
  },
];

function Products() {
  let [product, setProduct] = useState(initialProducts);

  let handleDelete = (i) => {
    let filterd = product.filter((_, index) => i !== index);
    setProduct(filterd);
  };

    let handleSold = (i) => {
        let maped = product.map((item, index) => index === i ? { ...item, sold: !item.sold } : item)
        setProduct(maped)
    }
    
    
  return (
    <div className="products">
      {product.map((item, i) => (
        <div key={i}>
          <h1>{item.productName}</h1>
          <img src={item.photo} alt="img" />
          <div className="details">
            <h3>Price: {item.price}€</h3>
            <strong>Sold? {item.sold ? "Yes" : "No"}</strong>
            <span>
              <button onClick={()=>handleSold(i)}>Sold</button>
              <button onClick={() => handleDelete(i)}>Delete</button>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
