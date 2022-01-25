import React from "react";
export default function Footer() {
  const date2 = new Date();
  const year = date2.getFullYear();
  return (
    <p className="footer">
      All rights reserved &copy; {year} || @Nikesh Dahal{" "}
    </p>
  );
}
