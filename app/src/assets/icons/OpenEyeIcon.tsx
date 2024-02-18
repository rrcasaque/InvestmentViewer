export const OpenEyeIcon = ({
  width,
  fill,
}: {
  width?: string;
  fill?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={`${width}px`}
      fill={fill}
    >
      <path d="M23.431 10.524C20.787 7.614 16.4 4.538 12 4.6 7.6 4.537 3.213 7.615.568 10.524a2.211 2.211 0 000 2.948C3.181 16.351 7.507 19.4 11.839 19.4h.308c4.347 0 8.671-3.049 11.287-5.929a2.21 2.21 0 00-.003-2.947zM7.4 12a4.6 4.6 0 114.6 4.6A4.6 4.6 0 017.4 12z"></path>
      <circle cx="12" cy="12" r="2"></circle>
    </svg>
  );
};
