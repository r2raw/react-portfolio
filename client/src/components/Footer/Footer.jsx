import React from "react";
import { createPortal } from "react-dom";

const year = new Date().getFullYear()
function Footer() {
  return createPortal(
    <footer className="flex justify-center items-center bg-sky-600 w-full py-14 text-neutral-900 text-lg">
      <div>By Arturo D. Marte Jr. II © {year}</div>
    </footer>,document.getElementById('footer')
  );
}

export default Footer;
