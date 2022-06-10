/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {["Home", "WhoMe", "IDo", "INeed", "MyStory", "Feedback", "ReachMe"].map(
      (item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={
            active === item ? { backgroundColor: "hsl(19, 87%, 54%)" } : {}
          }
        />
      )
    )}
  </div>
);

export default NavigationDots;
