import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/aluco.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">Welcome to VinylVibe!</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
              Enhance the aesthetics of your home, office, or business with our high-quality frosted window vinyl,
              adding a touch of elegance and privacy to any space. Our forex boards, known for their lightweight 
              and weather-resistant attributes, open up new horizons for signage, display, and artistic expressions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
