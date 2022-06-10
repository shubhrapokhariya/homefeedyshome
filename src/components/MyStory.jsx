import React from "react";
import AppWrap from "./wrapper/AppWrap";
import MotionWrap from "./wrapper/MotionWrap";
import mystory from "../assets/my-story.jpg";

const MyStory = () => {
  return (
    <div className="feedydo container  mx-auto  px-10 mt-10 pt-10 lg:mb-28 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12  space-y-6">
        <div className=" lg:col-span-4 col-span-1   space-y-5 flex  flex-col justify-center items-center">
          <div>
            <img
              src={mystory}
              alt="mystory"
              height="300px"
              width="300px"
              className=" rounded-full border-dashed border-8 border-feedyOrange  "
            />
          </div>
        </div>
        <div className="lg:col-span-8  flex flex-col   items-center space-y-10 text-xl">
          <h2 className="text-feedyOrange font-bold text-3xl">
            Why I need new family?
          </h2>
          <p>
            I was very happily living doing my things when one day, recently, my
            friend, the thirteen year old Phoeby broke the news to me that they
            are relocating to a new apartment where pets are not allowed.
          </p>
          <p>My family had to leave me. They were sad, I am sad.</p>
        </div>
      </div>
    </div>
  );
};
export default AppWrap(MotionWrap(MyStory), "MyStory", "app__greenbg");
