// import React from "react";

// function Haircare() {
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
//         <div className="card-row">
         
//           <div className="card">
//             <img
//               src="https://example.com/other-image-1.jpg"
//               alt="Haircare Card 1"
//               className="card-image"
//             />
//           </div>

         
//           <div className="card">
//             <img
//               src="https://example.com/other-image-2.jpg"
//               alt="Haircare Card 2"
//               className="card-image"
//             />
//           </div>

        
//           <div className="card">
//             <img
//               src="https://example.com/other-image-3.jpg"
//               alt="Haircare Card 3"
//               className="card-image"
//             />
//           </div>

         
//           <div className="card">
//             <img
//               src="https://example.com/other-image-4.jpg"
//               alt="Haircare Card 4"
//               className="card-image"
//             />
//           </div>
//           <div className="card">
//             <img
//               src="https://example.com/other-image-4.jpg"
//               alt="Haircare Card 4"
//               className="card-image"
//             />
//           </div>
//           <div className="card">
//             <img
//               src="https://example.com/other-image-4.jpg"
//               alt="Haircare Card 4"
//               className="card-image"
//             />
//           </div>
//           <div className="card">
//             <img
//               src="https://example.com/other-image-4.jpg"
//               alt="Haircare Card 4"
//               className="card-image"
//             />
//           </div>
//           <div className="card">
//             <img
//               src="https://example.com/other-image-4.jpg"
//               alt="Haircare Card 4"
//               className="card-image"
//             />
//           </div>
//           <div className="card">
//             <img
//               src="https://example.com/other-image-4.jpg"
//               alt="Haircare Card 4"
//               className="card-image"
//             />
//           </div>
//           <div className="card">
//             <img
//               src="https://example.com/other-image-4.jpg"
//               alt="Haircare Card 4"
//               className="card-image"
//             />
//           </div>
//         </div>
        
//       </div>
//     </div>
//   );
// }

// export default Haircare;

import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Haircare() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (cardIndex) => {
    setSelectedCard(cardIndex);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
    setShowModal(false);
  };

  return (
    <div className="hair-container">
      <div className="half-page">
        <img
          src="https://beautyclick.co.ke/cdn/shop/collections/HC_Banner_2_1950x.jpg?v=1683711310"
          alt="Main Haircare Image"
          className="main-hair-image"
        />
      </div>

      <div className="half-page">
        <div className="row row-cols-1 row-cols-md-4 g-4 card-grid">
          {Array.from({ length: 8 }, (_, index) => (
            <div className="col" key={index}>
              <div
                className={`card ${selectedCard === index ? "selected" : ""}`}
                onClick={() => handleCardClick(index)}
              >
                <img
                  src={`https://example.com/other-image-${index + 1}.jpg`}
                  alt={`Haircare Card ${index + 1}`}
                  className="card-image"
                />
                <div className="card-overlay">
                  <h5 className="card-title">Haircare Product {index + 1}</h5>
                  <p className="card-text">Product details here...</p>
                  <Button variant="primary">Add to Cart</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Customize the content of the modal as needed */}
          <p>Selected Product: Haircare Product {selectedCard + 1}</p>
          <p>Product details here...</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Haircare;
