import React from "react";
import AppWrap from "./wrapper/AppWrap";
import MotionWrap from "./wrapper/MotionWrap";
import iamfeedy from "../assets/iamfeedy.jpg";

const Home = () => {
  return (
    <div className="container  mx-auto mt-20 pt-10  px-10 h-screen   ">
      <div className="grid grid-cols-1 lg:grid-cols-12 space-y-6 ">
        <div className="lg:col-span-8  flex flex-col justify-center  items-center space-y-3 lg:space-y-10 text-feedyOrange text-3xl lg:text-6xl text-shadow font-semibold">
          <h2>Can I be a part of your family?</h2>
          <p>
            Would you{" "}
            <span className="underline underline-offset-8 ">adopt</span> me??
          </p>
        </div>
        <div className=" lg:col-span-4 col-span-1   flex flex-col justify-center  items-center">
          <div>
            <img
              src={iamfeedy}
              alt="iamfeedy"
              width="300px"
              height="250px"
              className=" rounded-full border-dashed border-8 border-feedyOrange "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Home, "app__about"), "Home", "app__homebg");

// flex: 1;
// display: flex;
// justify-content: flex-start;
// align-items: flex-start;
// flex-direction: column;
