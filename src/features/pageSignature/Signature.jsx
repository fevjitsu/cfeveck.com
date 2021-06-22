import React from "react";

export default function Signature() {
  return (
    <div id="madeBy">
      <a
        href="https://twitter.com/CFeveck"
        target="_blank"
        rel="noopener noreferrer"
      >
        Photo by:&nbsp;Chris Feveck&nbsp;
        <img
          className="photoBy__image"
          src="favicon-32x32.png"
          alt="Chris Feveck"
        />
      </a>
    </div>
  );
}
