import React from "react";
import FieldInputCardDetails from "./FieldInputCardDetails";
import { Formik, Form } from "formik";
import { MDBInput } from "mdb-react-ui-kit";

function CardDetails() {
  return (
    <div className="col-lg-5">
      <div className="card bg-primary text-white rounded-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="mb-0">Card details</h5>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
              className="img-fluid rounded-3"
              style={{ width: 45 }}
              alt="Avatar"
            />
          </div>
          <p className="small mb-2">Card type</p>
          <a href="#!" type="submit" className="text-white ">
            <i className="fab fa-cc-mastercard fa-2x me-2" />
          </a>
          <a href="#!" type="submit" className="text-white">
            <i className="fab fa-cc-visa fa-2x me-2" />
          </a>
          <a href="#!" type="submit" className="text-white">
            <i className="fab fa-cc-amex fa-2x me-2" />
          </a>
          <a href="#!" type="submit" className="text-white">
            <i className="fab fa-cc-paypal fa-2x" />
          </a>
          {/* ✅ Bắt đầu Formik form ở đây */}
          <Formik
            initialValues={{
              cardholderName: "",
              cardNumber: "",
              exp: "",
              cvv: "",
            }}
            onSubmit={(values) => {
              console.log("Form values", values);
            }}
          >
            <Form>
              <div className="mt-4">
                <FieldInputCardDetails
                  name="cardholderName"
                  label="Cardholder's Name"
                  id="cardholderName"
                  type="text"
                  placeholder="Cardholder's Name"
                />

                <FieldInputCardDetails
                  name="cardNumber"
                  label="Card Number"
                  id="cardNumber"
                  type="text"
                  placeholder="1234 5678 9012 3457"
                />

                <div className="row mb-4">
                  <div className="col-md-6">
                    <FieldInputCardDetails
                      name="exp"
                      label="Expiration"
                      id="exp"
                      type="text"
                      placeholder="MM/YYYY"
                    />
                  </div>
                  <div className="col-md-6">
                    <FieldInputCardDetails
                      name="cvv"
                      label="CVV"
                      id="cvv"
                      type="text"
                      placeholder="●●●"
                    />
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
          <hr className="my-4" />
          <div className="d-flex justify-content-between">
            <p className="mb-2">Subtotal</p>
            <p className="mb-2">$4798.00</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="mb-2">Shipping</p>
            <p className="mb-2">$20.00</p>
          </div>
          <div className="d-flex justify-content-between mb-4">
            <p className="mb-2">Total(Incl. taxes)</p>
            <p className="mb-2">$4818.00</p>
          </div>
          <button
            type="button"
            data-mdb-button-init=""
            data-mdb-ripple-init=""
            className="btn btn-info btn-block btn-lg"
          >
            <div className="d-flex justify-content-between">
              <span>$4818.00</span>
              <span>
                Checkout <i className="fas fa-long-arrow-alt-right ms-2" />
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
