// "use client";

// import React, { useState } from "react";
// import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";

// const Faq = ({ question, answer }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const safeQuestion = typeof question === "string" ? question : "";
//   const questionId = safeQuestion.replace(/\s+/g, "-").toLowerCase();

//   return (
//     <div className="flex justify-between pb-1 sm:pb-4">
//       <div className="flex-grow pr-4">
//         <h6 className="pb-3 font-bold text-xl">{safeQuestion}</h6>
//         <p
//           id={`faq-answer-${questionId}`}
//           className={`text-base leading-8 transition-all duration-300 ${
//             isOpen ? "opacity-60 max-h-96" : "opacity-0 max-h-0"
//           } overflow-hidden`}
//         >
//           {answer}
//         </p>
//       </div>
//       <button
//         className="cursor-pointer flex-shrink-0 focus:outline-none"
//         onClick={() => setIsOpen(!isOpen)}
//         aria-expanded={isOpen}
//         aria-controls={`faq-answer-${questionId}`}
//       >
//         {isOpen ? (
//           <TfiAngleUp className="text-2xl sm:text-[27px]" />
//         ) : (
//           <TfiAngleDown className="text-2xl sm:text-[27px]" />
//         )}
//       </button>
//     </div>
//   );
// };

// export default Faq;
import React from "react";

export default function Faq() {
  return <h1>Well this is working!</h1>;
}
