// import React from 'react';

// function Newarrivals() {

     
//   const cards = [
//     {
//       imgSrc: 'https://beautyclick.co.ke/cdn/shop/files/DAV_8672_540x.progressive.jpg?v=1683712410',
//       title: 'Card 1',
//       text: 'This is a longer card ',
//     },
//     {
//       imgSrc: 'https://beautyclick.co.ke/cdn/shop/files/DAV_8853_540x.progressive.jpg?v=1683712171',
//       title: 'Card 2',
//       text: 'This is a short card.',
//     },
//     {
//       imgSrc: 'https://beautyclick.co.ke/cdn/shop/files/DAV_8808_540x.progressive.jpg?v=1683712303',
//       title: 'Card 3',
//       text: 'This is a longer card .',
//     },
//     {
//       imgSrc: 'https://beautyclick.co.ke/cdn/shop/products/cb0b9341176e769be92429328959e659_540x.progressive.jpg?v=1623933157',  
//       title: 'Card 4',
//       text: 'This is a longer card .',
//     },
//     {
//       imgSrc: 'https://beautyclick.co.ke/cdn/shop/files/DAV_8808_540x.progressive.jpg?v=1683712303',
//       title: 'Card 5',
//       text: 'This is a longer card .',
//     },
//     {
//       imgSrc: 'https://beautyclick.co.ke/cdn/shop/files/DAV_8808_540x.progressive.jpg?v=1683712303',
//       title: 'Card 6',
//       text: 'This is a longer card .',
//     },
//     {
//       imgSrc: 'https://beautyclick.co.ke/cdn/shop/files/DAV_8808_540x.progressive.jpg?v=1683712303',
//       title: 'Card 7',
//       text: 'This is a longer card .',
//     },
//     {
//       imgSrc: 'https://beautyclick.co.ke/cdn/shop/files/DAV_8808_540x.progressive.jpg?v=1683712303',
//       title: 'Card 8',
//       text: 'This is a longer card .',
//     },
//     {
//       imgSrc: 'https://beautyclick.co.ke/cdn/shop/files/DAV_8808_540x.progressive.jpg?v=1683712303',
//       title: 'Card 8',
//       text: 'This is a longer card .',
//     },
//     {
//       imgSrc: 'https://beautyclick.co.ke/cdn/shop/files/DAV_8808_540x.progressive.jpg?v=1683712303',
//       title: 'Card 8',
//       text: 'This is a longer card .',
//     },
//     {
//       imgSrc: 'https://beautyclick.co.ke/cdn/shop/files/DAV_8808_540x.progressive.jpg?v=1683712303',
//       title: 'Card 8',
//       text: 'This is a longer card .',
//     },
//     {
//       imgSrc: 'https://beautyclick.co.ke/cdn/shop/files/DAV_8808_540x.progressive.jpg?v=1683712303',
//       title: 'Card 8',
//       text: 'This is a longer card .',
//     },
//     {
//       imgSrc: 'https://beautyclick.co.ke/cdn/shop/files/DAV_8808_540x.progressive.jpg?v=1683712303',
//       title: 'Card 8',
//       text: 'This is a longer card .',
//     },
//     {
//       imgSrc: 'https://beautyclick.co.ke/cdn/shop/files/DAV_8808_540x.progressive.jpg?v=1683712303',
//       title: 'Card 8',
//       text: 'This is a longer card .',
//     },
//     {
//       imgSrc: 'https://beautyclick.co.ke/cdn/shop/files/DAV_8808_540x.progressive.jpg?v=1683712303',
//       title: 'Card 8',
//       text: 'This is a longer card .',
//     },
//   ];

//   return (
//     <div className="container">
//       <div className="newarrivals-container">
        
//         {/* Image at the top */}
//         <div className="half-page">
//           <img
//             src="https://beautyclick.co.ke/cdn/shop/collections/NEWARRIVAL_BANNER_copy_1950x.jpg?v=1683882856"
//             alt="Main Makeup Image"
//             className="main-makeup-image"
//           />
//         </div>
  
//         {/* Cards below the image (occupies the second half) */}
//         <div className="row row-cols-1 row-cols-md-3 g-3">
//           {cards.map((card, index) => (
//             <div className="col" key={index}>
//               <div className="card">
//                 <img src={card.imgSrc} className="card-img-top" alt={card.title} />
//                 <div className="card-body">
//                   <h5 className="card-title">{card.title}</h5>
//                   <p className="card-text">{card.text}</p>
//                   <a href="#" className="btn btn-primary">
//                     Go somewhere
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
//           }   
// export default Newarrivals;



import React from 'react';
import Footer from './Footer'; // Make sure to replace './Footer' with the correct path to your Footer component

function NewArrivals() {
  return (
    <div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://beautyclick.co.ke/cdn/shop/collections/NEWARRIVAL_BANNER_copy_1950x.jpg?v=1683882856" className="d-block w-100" alt="beauty" />
          </div>
          
        </div>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          
          <div className="col col-lg-3">
            <div className="card h-100">
              <img src="https://beautyclick.co.ke/cdn/shop/files/DAV_8672_540x.progressive.jpg?v=1683712410" className="card-img-top" alt="Card 1" style={{ height: '300px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card.</p>
              </div>
            </div>
          </div>
          {/* Repeat the above structure for other cards */}
          <div className="col col-lg-3">
            <div className="card h-100">
              <img src="https://beautyclick.co.ke/cdn/shop/files/DAV_8672_540x.progressive.jpg?v=1683712410" className="card-img-top" alt="Card 1" style={{ height: '300px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card.</p>
              </div>
            </div>
          </div>
          <div className="col col-lg-3">
            <div className="card h-100">
              <img src="https://beautyclick.co.ke/cdn/shop/files/DAV_8672_540x.progressive.jpg?v=1683712410" className="card-img-top" alt="Card 1" style={{ height: '300px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card.</p>
              </div>
            </div>
          </div>
          <div className="col col-lg-3">
            <div className="card h-100">
              <img src="https://beautyclick.co.ke/cdn/shop/files/DAV_8672_540x.progressive.jpg?v=1683712410" className="card-img-top" alt="Card 1" style={{ height: '300px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card.</p>
              </div>
            </div>
          </div>
          <div className="col col-lg-3">
            <div className="card h-100">
              <img src="https://beautyclick.co.ke/cdn/shop/files/DAV_8672_540x.progressive.jpg?v=1683712410" className="card-img-top" alt="Card 1" style={{ height: '300px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card.</p>
              </div>
            </div>
          </div>
          <div className="col col-lg-3">
            <div className="card h-100">
              <img src="https://beautyclick.co.ke/cdn/shop/files/DAV_8672_540x.progressive.jpg?v=1683712410" className="card-img-top" alt="Card 1" style={{ height: '300px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card.</p>
              </div>
            </div>
          </div>
          <div className="col col-lg-3">
            <div className="card h-100">
              <img src="https://beautyclick.co.ke/cdn/shop/files/DAV_8672_540x.progressive.jpg?v=1683712410" className="card-img-top" alt="Card 1" style={{ height: '300px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card.</p>
              </div>
            </div>
          </div>
          <div className="col col-lg-3">
            <div className="card h-100">
              <img src="https://beautyclick.co.ke/cdn/shop/files/DAV_8672_540x.progressive.jpg?v=1683712410" className="card-img-top" alt="Card 1" style={{ height: '300px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card.</p>
              </div>
            </div>
          </div>
          <div className="col col-lg-3">
            <div className="card h-100">
              <img src="https://beautyclick.co.ke/cdn/shop/files/DAV_8672_540x.progressive.jpg?v=1683712410" className="card-img-top" alt="Card 1" style={{ height: '300px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card.</p>
              </div>
            </div>
          </div>
          <div className="col col-lg-3">
            <div className="card h-100">
              <img src="https://beautyclick.co.ke/cdn/shop/files/DAV_8672_540x.progressive.jpg?v=1683712410" className="card-img-top" alt="Card 1" style={{ height: '300px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card.</p>
              </div>
            </div>
          </div>
          <div className="col col-lg-3">
            <div className="card h-100">
              <img src="https://beautyclick.co.ke/cdn/shop/files/DAV_8672_540x.progressive.jpg?v=1683712410" className="card-img-top" alt="Card 1" style={{ height: '300px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card.</p>
              </div>
            </div>
          </div>
          <div className="col col-lg-3">
            <div className="card h-100">
              <img src="https://beautyclick.co.ke/cdn/shop/files/DAV_8672_540x.progressive.jpg?v=1683712410" className="card-img-top" alt="Card 1" style={{ height: '300px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card.</p>
              </div>
            </div>
          </div>
          <div className="col col-lg-3">
            <div className="card h-100">
              <img src="https://beautyclick.co.ke/cdn/shop/files/DAV_8672_540x.progressive.jpg?v=1683712410" className="card-img-top" alt="Card 1" style={{ height: '300px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card.</p>
              </div>
            </div>
          </div>
          <div className="col col-lg-3">
            <div className="card h-100">
              <img src="https://beautyclick.co.ke/cdn/shop/files/DAV_8672_540x.progressive.jpg?v=1683712410" className="card-img-top" alt="Card 1" style={{ height: '300px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card.</p>
              </div>
            </div>
          </div>
          <div className="col col-lg-3">
            <div className="card h-100">
              <img src="https://beautyclick.co.ke/cdn/shop/files/DAV_8672_540x.progressive.jpg?v=1683712410" className="card-img-top" alt="Card 1" style={{ height: '300px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card.</p>
              </div>
            </div>
          </div>
          <div className="col col-lg-3">
            <div className="card h-100">
              <img src="https://beautyclick.co.ke/cdn/shop/files/DAV_8672_540x.progressive.jpg?v=1683712410" className="card-img-top" alt="Card 1" style={{ height: '300px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card.</p>
              </div>
            </div>
          </div>
          <div className="col col-lg-3">
            <div className="card h-100">
              <img src="https://beautyclick.co.ke/cdn/shop/files/DAV_8672_540x.progressive.jpg?v=1683712410" className="card-img-top" alt="Card 1" style={{ height: '300px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section className="footer">
        <Footer />
      </section>
    </div>
  );
}

export default NewArrivals;
