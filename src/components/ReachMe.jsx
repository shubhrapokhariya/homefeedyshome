import React from "react";
import AppWrap from "./wrapper/AppWrap";
import MotionWrap from "./wrapper/MotionWrap";

const ReachMe = () => {
  return (
    <div className="  container  mx-auto  px-10 mt-10 pt-10  mb-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-12  space-y-6 lg:space-y-0 contact_bg_1">
        <div className="lg:col-span-7     flex  flex-col justify-center  items-center  p-4 lg:p-5 ">
          <h2 className="text-feedyOrange font-bold text-3xl pb-5">
            I'll be waiting!
          </h2>
          <div>
            <div>
              <input
                type="text"
                className="form__input "
                placeholder="Full name"
                id="name"
                required
              />
              <label for="name" class="form__label">
                Full name
              </label>
            </div>

            <div>
              <input
                type="email"
                class="form__input"
                placeholder="Email address"
                id="email"
                required
              />
              <label for="email" class="form__label">
                Email address
              </label>
            </div>
            <div>
              <button class="btn ">Send</button>
            </div>
            <p className="font-xs text-gray-400 font-extralight italic pt-2">
              *This is only an example of a landing page. Please don't send your
              details.
            </p>
          </div>
        </div>

        <div className=" lg:col-span-5     flex  flex-col justify-center items-end    ">
          <div className=" contact_bg_2  h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(ReachMe), "ReachMe", "app__endbg");
