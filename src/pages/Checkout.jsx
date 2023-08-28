import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector((state) => state.handleCart);

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

  const [paymentMethod, setPaymentMethod] = useState(""); 

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    // Get form data
    const formData = new FormData(event.target);

    // Customer Details
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const address = formData.get("address");
    const city = formData.get("city");
    const postalCode = formData.get("postalCode");
    const country = formData.get("country");

    // Payment Method specific details
    let paymentDetails = {};
    if (paymentMethod === "M-Pesa") {
      const mpesaPhoneNumber = formData.get("mpesaPhoneNumber");
      paymentDetails = { mpesaPhoneNumber };
    } else if (paymentMethod === "Credit Card") {
      const creditCardNumber = formData.get("creditCardNumber");
      const cardholderName = formData.get("cardholderName");
      const expiryDate = formData.get("expiryDate");
      paymentDetails = { creditCardNumber, cardholderName, expiryDate };
    }

    // Display the data (you can handle data submission here)
    alert(
      `Customer Details:\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nAddress: ${address}, ${city}, ${postalCode}, ${country}\nPayment Method: ${paymentMethod}\nPayment Details: ${JSON.stringify(paymentDetails)}`
    );

    // Optionally, you can reset the form after submitting
    event.target.reset();
    setPaymentMethod("");
  };

  const renderCartItems = () => {
    // Render cart items (unchanged from previous code)
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Checkout</h1>
        <hr />
        {cartItems.length ? (
          <div className="row my-4">
            <div className="col-md-5 col-lg-4">
              {/* Order Summary Card */}
              {renderCartItems()}
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h4 className="mb-0">Billing and Shipping Address</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={handlePaymentSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">
                          First name
                        </label>
                        <input type="text" className="form-control" id="firstName" name="firstName" required />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">
                          Last name
                        </label>
                        <input type="text" className="form-control" id="lastName" name="lastName" required />
                      </div>
                      <div className="col-md-12">
                        <label htmlFor="address" className="form-label">
                          Address
                        </label>
                        <input type="text" className="form-control" id="address" name="address" required />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="city" className="form-label">
                          City
                        </label>
                        <input type="text" className="form-control" id="city" name="city" required />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="postalCode" className="form-label">
                          Postal Code
                        </label>
                        <input type="text" className="form-control" id="postalCode" name="postalCode" required />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="country" className="form-label">
                          Country
                        </label>
                        <input type="text" className="form-control" id="country" name="country" required />
                      </div>
                      <div className="col-md-12">
                        <label htmlFor="paymentMethod" className="form-label">
                          Payment Method
                        </label>
                        <select
                          className="form-select"
                          id="paymentMethod"
                          name="paymentMethod"
                          value={paymentMethod}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          required
                        >
                          <option value="" disabled>Select payment method</option>
                          <option value="M-Pesa">M-Pesa</option>
                          <option value="Credit Card">Credit Card</option>
                        </select>
                      </div>
                      {paymentMethod === "M-Pesa" && (
                        <div className="col-md-6">
                          <label htmlFor="mpesaPhoneNumber" className="form-label">
                            M-Pesa Phone Number
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="mpesaPhoneNumber"
                            name="mpesaPhoneNumber"
                            required
                          />
                        </div>
                      )}
                      {paymentMethod === "Credit Card" && (
                        <div className="col-md-6">
                          <label htmlFor="creditCardNumber" className="form-label">
                            Credit Card Number
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="creditCardNumber"
                            name="creditCardNumber"
                            required
                          />
                        </div>
                      )}
                      {paymentMethod === "Credit Card" && (
                        <div className="col-md-6">
                          <label htmlFor="cardholderName" className="form-label">
                            Cardholder Name
                          </label>
                          <input type="text" className="form-control" id="cardholderName" name="cardholderName" required />
                        </div>
                      )}
                      {paymentMethod === "Credit Card" && (
                        <div className="col-md-6">
                          <label htmlFor="expiryDate" className="form-label">
                            Expiry Date
                          </label>
                          <input type="text" className="form-control" id="expiryDate" name="expiryDate" required />
                        </div>
                      )}
                    </div>

                    <hr className="my-4" />

                    <button className="w-100 btn btn-primary" type="submit" disabled>
                      Continue to Payment
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
