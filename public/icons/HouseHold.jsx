/* eslint-disable react/prop-types */
export default function HouseHold({
  width = "22",
  height = "23",
  fill = "none",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 23"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7068 0.581027C11.4041 0.302583 11.0056 0.151909 10.5944 0.160505C10.1832 0.169101 9.79131 0.336302 9.50056 0.627152L0.5 9.62771V22.249H5.75V14.749H8.75V22.249H21.5V9.59082L11.7068 0.581027ZM20 20.749H10.25V13.249H4.25V20.749H2V10.249L10.6912 1.68761V1.68498L20 10.249V20.749Z"
        fill="#E6ECE9"
      />
    </svg>
  );
}
