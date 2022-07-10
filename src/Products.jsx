import React, { useState } from "react";
import "./products.scss";
import "./inputs.scss";

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
//   {
//     productName: "xbox1",
//     photo:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Xbox-console.jpg/1200px-Xbox-console.jpg",
//     price: "450",
//     sold: false,
//   },
//   {
//     productName: "Playstation1",
//     photo:
//       "https://www.tvmovie.de/bilder/758/2020/06/12/77329-ps5-das-ist-das-finale-design-der-playstation-5.jpg?itok=nauph4gp",
//     price: "500",
//     sold: false,
//   },
//   {
//     productName: "iPhone1",
//     photo:
//       "https://media.cdn.kaufland.de/product-images/1024x1024/539adaff2e57ca05984e433fe38cebfb.jpg",
//     price: "750",
//     sold: false,
//   },
//   {
//     productName: "MacBook1",
//     photo: "https://www.notebookcheck.com/uploads/tx_nbc2/air13teaser.jpg",
//     price: "900",
//     sold: false,
//   },
];


function Products() {
    let [product, setProduct] = useState(initialProducts);
    // ========== inputs ==========================================

    let [values,setValues] = useState({productName:"",photo:"",price:""})
   

  let handleDelete = (i) => {
    let filterd = product.filter((_, index) => i !== index);
    setProduct(filterd);
  };

  let handleSold = (i) => {
    let maped = product.map((item, index) =>
      index === i ? { ...item, sold: !item.sold } : item
    );
    setProduct(maped);
  };
    // =========================== forms functions ===========================    
    let handleChange = (e) => {
       setValues({...values,[e.target.name]:e.target.value})
    }
    let handleSubmit = (e) => {
      e.preventDefault()
      //! this CheckArr is to check if the item is exist or not , in order not to show it again
      const checkArr = product.some(
        (item) => item.productName === values.productName
      );
  
      checkArr || setProduct([...product, values]);
      
    }

  return (
    <div className="mainProducts">
      {/* ================================================================================================================ */}
      <div className="inputs">
        <div className="inputsContainer">
          <form onSubmit={handleSubmit}>
            <span>
              <p>Items name</p>
              <input type="text"  onChange={handleChange} required value={values.productName} name="productName" />
            </span>
         

            <span>
              <p>Image Link</p>
                          <input type="text"onChange={handleChange } required value={ values.photo} name="photo"/>
            </span>
         
         
            <span>
              <p>Price</p>
              <input type="text"  value={ values.price} required onChange={handleChange}  name="price"  />
              <button>Add</button>
            </span>
          </form>
        </div>
      </div>

      {/* ================================================================================================================ */}

      <div className="products">
        {product.map((item, i) => (
          <div key={i}>
            <h1>{item.productName}</h1>
            <img src={item.photo} alt="img" />
            <div className="details">
              <h3>Price: {item.price}€</h3>
              <strong>Sold? {item.sold ? "Yes" : "No"}</strong>
              <span>
                <button onClick={() => handleSold(i)}>Sold</button>
                <button onClick={() => handleDelete(i)}>Delete</button>
              </span>
            </div>
          </div>
        ))}
              
              {/* ============================ inputs= ======================= */}
              
            
              
              
      </div>
    </div>
  );
}

export default Products;
