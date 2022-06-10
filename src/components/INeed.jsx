import React from "react";
import AppWrap from "./wrapper/AppWrap";
import MotionWrap from "./wrapper/MotionWrap";
import eatingBread from "../assets/eating-bread.jpg";
import feedywalk from "../assets/feedywalk.jpeg";
import lovefeedy from "../assets/loving.jpg";

const INeed = () => {
  return (
    <div className="container  mx-auto  px-10 mt-10 pt-10   md:mb-62 mb-72 ">
      <div className="grid grid-cols-1 lg:grid-cols-12  space-y-6">
        <div className="lg:col-span-6  flex flex-col   items-center space-y-10 text-xl">
          <h2 className="text-feedyOrange font-bold text-3xl">What I Need?</h2>
          <p>
            Food and Water - I don't eat much, just a little food gives me
            enough energy to do things I do.{" "}
          </p>
          <p>Love - I am most happy when family loves me.</p>
          <p>
            Walk - Either you accompany me or leave me alone, I run around and
            come back to home in time.
          </p>
        </div>
        <div className=" lg:col-span-6  mx-16  md:py-20 py-8 ">
          <div class="composition">
            <img
              alt="walking"
              className="composition__photo composition__photo--p1 lg:w-7/12 md:w-5/12 lg:-top-8 lg:left-0 md:top-5 md:left-20 -top-1 -left-20  absolute"
              src={feedywalk}
              width="300px"
            />

            <img
              alt="eating"
              className="composition__photo composition__photo--p2 lg:w-7/12 md:w-5/12 lg:top-2 lg:right-0 md:top-20 md:right-12 top-12 -right-20 absolute"
              src={eatingBread}
              width="300px"
            />

            <img
              alt="loving"
              className="composition__photo composition__photo--p3 absolute  md:top-32 lg:w-7/12 md:w-5/12 lg:left-28 md:left-28 top-28 right-4"
              src={lovefeedy}
              width="300px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AppWrap(
  MotionWrap(INeed, "app__about"),
  "INeed",
  "app__whitebg"
);
