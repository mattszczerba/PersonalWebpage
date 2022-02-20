import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-layout">
      <div>
        <h1>Online shopping simplified</h1>
        <p>
          Order your groceries from <em>MattMart</em> with our easy to use mock shopping app,
          and get your products delivered straight to your doorstep.
        </p>
        <Link to="/projects/storefront/products" className="btn btn-default">
          Start shopping
        </Link>
      </div>
      <img
        src="https://res.cloudinary.com/dow8www4d/image/upload/v1642612363/Store/home.jpg"
        width="350"
        height="240"
        className="rounded home-image"
        alt=""
      />
    </div>
  );
}
