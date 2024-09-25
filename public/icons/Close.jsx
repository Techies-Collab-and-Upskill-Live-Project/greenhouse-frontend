/* eslint-disable react/prop-types */
export default function Close({
  width = "24",
  height = "24",
  fill = "none",
  handleClick,
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="#E6ECE9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
