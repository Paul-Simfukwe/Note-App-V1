import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        <i>Copyright ⓒTechMove {year}</i>
      </p>
    </footer>
  );
}

export default Footer;
