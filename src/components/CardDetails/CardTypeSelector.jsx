// import React from "react";

// function CardTypeSelector() {
//   return (
//     <div>
//       <p className="small mb-2">Card type</p>
//       <a href="#!" type="submit" className="text-white ">
//         <i className="fab fa-cc-mastercard fa-2x me-2" />
//       </a>
//       <a href="#!" type="submit" className="text-white">
//         <i className="fab fa-cc-visa fa-2x me-2" />
//       </a>
//       <a href="#!" type="submit" className="text-white">
//         <i className="fab fa-cc-amex fa-2x me-2" />
//       </a>
//       <a href="#!" type="submit" className="text-white">
//         <i className="fab fa-cc-paypal fa-2x" />
//       </a>
//     </div>
//   );
// }

// export default CardTypeSelector;

import React from "react";
import { useFormikContext } from "formik";

function CardTypeSelector() {
  const { values, setFieldValue } = useFormikContext();

  const handleSelect = (type) => {
    setFieldValue("cardType", type);
  };

  return (
    <div>
      <p className="small mb-2">Card type</p>
      {["mastercard", "visa", "amex", "paypal"].map((type) => (
        <a
          key={type}
          href="#!"
          className={`text-white me-2 ${
            values.cardType === type ? "border-bottom border-2" : ""
          }`}
          onClick={(e) => {
            e.preventDefault(); // tránh reload trang
            handleSelect(type);
          }}
        >
          <i className={`fab fa-cc-${type} fa-2x`} />
        </a>
      ))}
    </div>
  );
}

export default CardTypeSelector;
