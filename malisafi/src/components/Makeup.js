import React from "react";

function Makeup() {
  return (
    <div className="hair-container">
      
      <div className="half-page">
        <img
          src="https://beautyclick.co.ke/cdn/shop/collections/poster2big_1_1950x_09a7ea16-439d-410c-a574-41bb4ec37e51_1950x.jpg?v=1683710702"
          alt="Main Makeup Image"
          className="main-makeup-image"
        />
      </div>

      
      <div className="half-page">
        <div className="card-row">
         
          <div className="card">
            <img
              src="https://beautyclick.co.ke/cdn/shop/products/350caramel_540x.progressive.jpg?v=1684759465"
              alt="Makeup Card 1"
              className="card-image"
            />
          </div>

         
          <div className="card">
            <img
              src="https://beautyclick.co.ke/cdn/shop/products/350caramel_540x.progressive.jpg?v=1684759465"
              alt="Makeup Card 2"
              className="card-image"
            />
          </div>

        
          <div className="card">
            <img
              src="https://beautyclick.co.ke/cdn/shop/products/350caramel_540x.progressive.jpg?v=1684759465"
              alt="Makeup Card 3"
              className="card-image"
            />
          </div>

         
          <div className="card">
            <img
              src="https://beautyclick.co.ke/cdn/shop/products/350caramel_540x.progressive.jpg?v=1684759465"
              alt="Makeup Card 4"
              className="card-image"
            />
          </div>
          <div className="card">
            <img
              src="https://beautyclick.co.ke/cdn/shop/products/350caramel_540x.progressive.jpg?v=1684759465"
              alt="Makeup Card 4"
              className="card-image"
            />
          </div>
          <div className="card">
            <img
              src="https://beautyclick.co.ke/cdn/shop/products/350caramel_540x.progressive.jpg?v=1684759465"
              alt="Makeup Card 4"
              className="card-image"
            />
          </div>
          <div className="card">
            <img
              src="https://beautyclick.co.ke/cdn/shop/products/350caramel_540x.progressive.jpg?v=1684759465"
              alt="Makeup Card 4"
              className="card-image"
            />
          </div>
          <div className="card">
            <img
              src="https://beautyclick.co.ke/cdn/shop/products/350caramel_540x.progressive.jpg?v=1684759465"
              alt="Makeup Card 4"
              className="card-image"
            />
          </div>
          <div className="card">
            <img
              src="https://beautyclick.co.ke/cdn/shop/products/350caramel_540x.progressive.jpg?v=1684759465"
              alt="Hair Card 4"
              className="card-image"
            />
          </div>
          <div className="card">
            <img
              src="https://beautyclick.co.ke/cdn/shop/products/350caramel_540x.progressive.jpg?v=1684759465"
              alt="Hair Card 4"
              className="card-image"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Makeup;

// import React, { useState } from "react";
// import { Button, Modal } from "react-bootstrap";

// function Makeup() {
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const handleCardClick = (cardIndex) => {
//     setSelectedCard(cardIndex);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedCard(null);
//     setShowModal(false);
//   };

//   return (
//     <div className="hair-container">
//       <div className="half-page">
//         <img
//           src="https://beautyclick.co.ke/cdn/shop/collections/HC_Banner_2_1950x.jpg?v=1683711310"
//           alt="Main Haircare Image"
//           className="main-hair-image"
//         />
//       </div>

//       <div className="half-page">
//         <div className="row row-cols-1 row-cols-md-4 g-4 card-grid">
//           {Array.from({ length: 8 }, (_, index) => (
//             <div className="col" key={index}>
//               <div
//                 className={`card ${selectedCard === index ? "selected" : ""}`}
//                 onClick={() => handleCardClick(index)}
//               >
//                 <img
//                   src={`https://example.com/other-image-${index + 1}.jpg`}
//                   alt={`Haircare Card ${index + 1}`}
//                   className="card-image"
//                 />
//                 <div className="card-overlay">
//                   <h5 className="card-title">Haircare Product {index + 1}</h5>
//                   <p className="card-text">Product details here...</p>
//                   <Button variant="primary">Add to Cart</Button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add to Cart</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {/* Customize the content of the modal as needed */}
//           <p>Selected Product: Haircare Product {selectedCard + 1}</p>
//           <p>Product details here...</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleCloseModal}>
//             Add to Cart
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default Makeup;
