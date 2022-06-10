import React from "react";
import AppWrap from "./wrapper/AppWrap";
import MotionWrap from "./wrapper/MotionWrap";
import whome from "../assets/whome.jpg";

const WhoMe = () => {
  return (
    <div className="container  mx-auto  px-10 lg:mb-28 mb-20 -mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12  space-y-6">
        <div className=" lg:col-span-4 col-span-1   space-y-5 flex  flex-col justify-center items-center">
          <div>
            <img
              src={whome}
              alt="iamfeedy"
              height="300px"
              width="300px"
              className=" rounded-full border-dashed border-8 border-feedyOrange  "
            />
          </div>
        </div>
        <div className="lg:col-span-8  flex flex-col   items-center space-y-10 text-xl">
          <h2 className="text-feedyOrange font-bold text-3xl">Who Am I</h2>
          <p>My name is Feedy, that was given to me by my previous family.</p>
          <p>As far back as my memory goes, I lived with them, untill now! </p>
          <p>They used to call me "feedu", "feeduson" and "feedyboy" </p>
          <p>
            I have a short term memory that is limited to 'living in the moment'
            but my family says I am 10 months old.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(WhoMe), "WhoMe", "app__whitebg");
