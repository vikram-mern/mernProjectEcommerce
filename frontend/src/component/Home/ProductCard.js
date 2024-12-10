import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`₹${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;
// // src/component/Home/ProductCard.js

// import React from "react";
// import { Link } from "react-router-dom";
// import { Rating } from "@material-ui/lab";

// const ProductCard = ({ product }) => {
//   const options = {
//     value: product.rating ? product.rating.rate : 0, // Assuming rating is structured this way
//     readOnly: true,
//     precision: 0.5,
//   };

//   return (
//     <Link className="productCard" to={`/product/${product.id}`}>
//       <img src={product.image} alt={product.title} />
//       <p>{product.title}</p>
//       <div>
//         <Rating {...options} />
//         <span className="productCardSpan">
//           ({product.rating ? product.rating.count : 0} reviews)
//         </span>
//       </div>
//       <span>${product.price}</span>
//     </Link>
//   );
// };

// export default ProductCard;
