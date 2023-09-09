// import React from "react";

// const PlusMinus = (props) => {
//   function handle(e) {
//     if (e.target.id.includes("minus")) {
//       props.handle({ name: props.section, value: -1 });
//     } else {
//       props.handle({ name: props.section, value: 1 });
//     }
//   }

//   return (
//     <>
//       <img
//         src={`icons/${props.section}_plus.png`}
//         id="plus"
//         onClick={(e) => handle(e)}
//         alt=""
//       />
//       <img
//         src={`icons/${props.section}_minus.png`}
//         id="minus"
//         onClick={(e) => handle(e)}
//         alt=""
//       />
//     </>
//   );
// };

// export default PlusMinus;

import React from "react";
import left_minus from "./icons/left_minus.png";
import left_plus from "./icons/left_plus.png";

const PlusMinus = (props) => {
  function handle(e) {
    if (e.target.id.includes("minus")) {
      props.handle({ name: props.section, value: -1 });
    } else {
      props.handle({ name: props.section, value: 1 });
    }
  }

  return (
    <>
      <img src={left_plus} id="plus" onClick={(e) => handle(e)} alt="" />
      <img src={left_minus} id="minus" onClick={(e) => handle(e)} alt="" />
    </>
  );
};

export default PlusMinus;
