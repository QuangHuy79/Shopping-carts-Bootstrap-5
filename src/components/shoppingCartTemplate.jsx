import React from "react";
import ItemDetails from "./ItemDetails";
import CardDetails from "./CardDetails/CardDetails";
import { MDBInput } from "mdb-react-ui-kit";
import { formikProps } from "./CardDetails/FormikProps";
function ShoppingCartTemplate() {
  return (
    <div>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-7">
                      <h3 className="mb-3">
                        <a href="#!" className="text-body">
                          <i className="fas fa-long-arrow-alt-left me-2" />
                          Continue shopping
                        </a>
                      </h3>
                      <hr />
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <h4 className="mb-1">Shopping cart</h4>
                          <p className="mb-0">You have 4 items in your cart</p>
                        </div>
                        <div>
                          <p className="mb-0">
                            <span className="text-muted">Sort by:</span>{" "}
                            <a href="#!" className="text-body">
                              price <i className="fas fa-angle-down mt-1" />
                            </a>
                          </p>
                        </div>
                      </div>
                      <ItemDetails></ItemDetails>
                      <ItemDetails></ItemDetails>
                      <ItemDetails></ItemDetails>
                      <ItemDetails></ItemDetails>
                    </div>
                    <CardDetails {...formikProps} />;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShoppingCartTemplate;
