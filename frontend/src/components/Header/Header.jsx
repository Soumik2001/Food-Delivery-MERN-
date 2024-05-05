import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h1>Order your favourite food here</h1>
        <p className="text-white text-[1vw]">
        Savor the flavor of convenience with every bite. Our food delivery service brings culinary delights right to your doorstep, ensuring that every meal is a journey worth savoring. From local favorites to global cuisines, let us be your passport to palate pleasure. Order now and indulge in a world of flavors, effortlessly delivered to you.
        </p>
        <button class="button">
  View Menu
  <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
    <path
      clip-rule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
      fill-rule="evenodd"
    ></path>
  </svg>
</button>

      </div>
    </div>
  );
};

export default Header;
