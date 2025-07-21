import React from "react";
import FieldInputCardDetails from "./FieldInputCardDetails";
import CardTypeSelector from "./CardTypeSelector";
import { calculateOrder } from "./orderUtils"; // <-- import hàm tính toán
import { Formik, Form } from "formik";
import * as Yup from "yup";

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

          <Formik
            initialValues={{
              cardholderName: "",
              cardNumber: "",
              exp: "",
              cvv: "",
              quantity: 1,
              shippingMethod: "standard",
              cardType: "", // 👈 thêm vào đây
            }}
            validationSchema={Yup.object({
              cardholderName: Yup.string()
                .matches(/^[A-Za-z\s'-]+$/, "Tên không hợp lệ")
                .required("Bắt buộc"),
              cardNumber: Yup.string()
                .matches(/^[0-9]{16}$/, "Số thẻ phải gồm 16 chữ số")
                .required("Bắt buộc"),
              exp: Yup.string()
                .required("Bắt buộc")
                .matches(
                  /^(0[1-9]|1[0-2])\/\d{4}$/,
                  "Định dạng không hợp lệ (MM/YYYY)"
                ),
              cvv: Yup.string()
                .required("Bắt buộc")
                .matches(/^\d{3,4}$/, "CVV phải là 3 hoặc 4 số"),
              quantity: Yup.number()
                .required("Bắt buộc")
                .min(1, "Tối thiểu là 1 sản phẩm"),
              shippingMethod: Yup.string()
                .required("Chọn phương thức giao hàng")
                .oneOf(["standard", "express"], "Không hợp lệ"),
            })}
            onSubmit={(values) => {
              const { total } = calculateOrder(values);
              console.log("Tổng:", total);
              console.log("Giá trị form:", values);
            }}
          >
            {({ values, errors, touched, handleChange }) => {
              const { subtotal, shipping, total } = calculateOrder(values);
              //   onSubmit={(values) => {
              //     const price = 1000;
              //     const shipping = values.shippingMethod === "express" ? 20 : 10;
              //     const subtotal = values.quantity * price;
              //     const total = subtotal + shipping;

              //     console.log("Tổng:", total);
              //     console.log("Giá trị form:", values);
              //   }}
              // >
              //   {({ values, errors, touched, handleChange }) => {
              //     const price = 1000;
              //     const shipping = values.shippingMethod === "express" ? 20 : 10;
              //     const subtotal = values.quantity * price;
              //     const total = subtotal + shipping;

              return (
                <Form>
                  <div className="mt-4">
                    <CardTypeSelector></CardTypeSelector>
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

                    {/* Input Quantity */}
                    <div className="mb-3">
                      <label
                        htmlFor="quantity"
                        className="form-label text-white"
                      >
                        Quantity
                      </label>
                      <input
                        id="quantity"
                        name="quantity"
                        type="number"
                        className="form-control"
                        min="1"
                        value={values.quantity}
                        onChange={handleChange}
                      />
                      {touched.quantity && errors.quantity ? (
                        <div className="text-warning">{errors.quantity}</div>
                      ) : null}
                    </div>

                    {/* Select Shipping Method */}
                    <div className="mb-4">
                      <label
                        htmlFor="shippingMethod"
                        className="form-label text-white"
                      >
                        Shipping Method
                      </label>
                      <select
                        id="shippingMethod"
                        name="shippingMethod"
                        className="form-select"
                        value={values.shippingMethod}
                        onChange={handleChange}
                      >
                        <option value="standard">Standard ($10)</option>
                        <option value="express">Express ($20)</option>
                      </select>
                      {touched.shippingMethod && errors.shippingMethod ? (
                        <div className="text-warning">
                          {errors.shippingMethod}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {/* Phần tính toán subtotal, shipping, total */}
                  <hr className="my-4" />
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Subtotal</p>
                    <p className="mb-2">${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Shipping</p>
                    <p className="mb-2">${shipping.toFixed(2)}</p>
                  </div>
                  <div className="d-flex justify-content-between mb-4">
                    <p className="mb-2">Total (Incl. taxes)</p>
                    <p className="mb-2">${total.toFixed(2)}</p>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-info btn-block btn-lg"
                  >
                    <div className="d-flex justify-content-between">
                      <span>${total.toFixed(2)}</span>
                      <span>
                        Checkout{" "}
                        <i className="fas fa-long-arrow-alt-right ms-2" />
                      </span>
                    </div>
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
