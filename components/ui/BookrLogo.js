// Currently no option to reverse colours based on background

export default function BookrLogo({ ...props }) {
  return (
    <svg
      viewBox="26.233 17.846 55.306 19.743"
      height="60px"
      width="170px"
      {...props}
    >
      <defs>
        <style type="text/css">
          @import
          url(https://fonts.googleapis.com/css2?family=Poppins%3Aital%2Cwght%400%2C100%3B0%2C200%3B0%2C300%3B0%2C400%3B0%2C500%3B0%2C600%3B0%2C700%3B0%2C800%3B0%2C900%3B1%2C100%3B1%2C200%3B1%2C300%3B1%2C400%3B1%2C500%3B1%2C600%3B1%2C700%3B1%2C800%3B1%2C900&amp;display=swap);
        </style>
      </defs>
      <text
        style={{
          fill: 'rgb(0, 0, 0)',
          fontFamily: 'Poppins',
          fontSize: '17px',
          whiteSpace: 'pre',
        }}
        x="28.285"
        y="33.98"
      >
        Book
      </text>
      <text
        style={{
          fill: 'rgb(255, 0, 0)',
          fontFamily: 'Poppins',
          fontSize: '21px',
          whiteSpace: 'pre',
        }}
        x="70"
        y="33.98"
      >
        R
      </text>
    </svg>
  );
}
