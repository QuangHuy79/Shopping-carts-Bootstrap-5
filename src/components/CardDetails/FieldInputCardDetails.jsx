import React from "react";
import { MDBInput } from "mdb-react-ui-kit";
import { useField } from "formik";
import FieldInput from "../FieldInput";

function FieldInputCardDetails(props) {
  const { name, label, id, type, placeholder, ...res } = props;
  const [field, meta] = useField({ name, type });
  return (
    <>
      <div className="mb-4">
        <MDBInput
          {...field}
          {...res}
          label={label}
          id={id}
          type={type}
          size={"lg"}
          placeholder={placeholder}
          contrast

          // label="Cardholder's Name"
          // id="cardholderName"
          // type="text"
          // size="lg"
          // placeholder="Cardholder's Name"
          // contrast
        />
        {meta.touched && meta.error && (
          <div className="text-danger mt-1" style={{ fontSize: "1rem" }}>
            {meta.error}
          </div>
        )}
      </div>
    </>
  );
}

export default FieldInputCardDetails;
