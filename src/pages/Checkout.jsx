import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">No item in Cart</h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    const handlePaymentSubmit = (event) => {
      event.preventDefault();
      const mpesaPhoneNumber = event.target.mpesaPhoneNumber.value;
      // Here you can implement the logic for the M-Pesa payment processing
      // For this example, we'll just show an alert with the M-Pesa phone number
      alert(`M-Pesa Payment Successful. Phone Number: ${mpesaPhoneNumber}`);
    };

    return (
      <>
        <div className="container py-5">
          <div className="row my-4">
            <div className="col-md-5 col-lg-4 order-md-last">
              {/* ... (Previous code) */}
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h4 className="mb-0">Billing address</h4>
                </div>
                <div className="card-body">
                  <form className="needs-validation" onSubmit={handlePaymentSubmit} noValidate>
                    <div className="row g-3">
                      {/* ... (Previous code) */}
                    </div>

                    <hr className="my-4" />

                    <h4 className="mb-3">Payment</h4>

                    <div className="row gy-3">
                      {/* M-Pesa phone number input */}
                      <div className="col-md-6">
                        <label htmlFor="mpesaPhoneNumber" className="form-label">
                          M-Pesa Phone Number
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="mpesaPhoneNumber"
                          placeholder="Enter M-Pesa Phone Number"
                          required
                        />
                        <small className="text-muted">Enter your M-Pesa phone number</small>
                        <div className="invalid-feedback">M-Pesa phone number is required</div>
                      </div>
                    </div>

                    <hr className="my-4" />

                    <button className="w-100 btn btn-primary" type="submit" disabled>
                      Continue to checkout
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Checkout</h1>
        <hr />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
