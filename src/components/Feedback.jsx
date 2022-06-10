import React from "react";
import AppWrap from "./wrapper/AppWrap";
import MotionWrap from "./wrapper/MotionWrap";

const Feedback = () => {
  return (
    <div className="container  mx-auto  lg:px-10 mt-10 pt-10   lg:mb-20 mb-20">
      <div className="feedback justify-center items-center lg:p-20 p-10">
        <h2 className="text-feedyOrange font-bold text-xl">Words about me</h2>
        <p>
          Feedu is so well trained in many things. He doesn't poo in the house,
          knows the meaning of the word 'Sit', 'No', 'Fetch', 'Eat', 'Sleep'. He
          even enjoy bath. He is so fun to be with.{" "}
        </p>
      </div>
    </div>
  );
};
export default AppWrap(
  MotionWrap(Feedback, "app__about"),
  "Feedback",
  "app__whitebg"
);
