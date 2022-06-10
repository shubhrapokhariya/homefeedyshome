import React from "react";
import AppWrap from "./wrapper/AppWrap";
import MotionWrap from "./wrapper/MotionWrap";

const IDo = () => {
  return (
    <div className="feedydo container  mx-auto  px-10 mt-10  pt-10 lg:mb-28 mb-20 ">
      <div className=" text-center pb-10">
        <h2 className=" text-feedyOrange font-bold text-3xl ">What I Do</h2>
        <p className="md:hidden ">(click image for more details)</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 space-y-6  ">
        <div className=" md:col-span-4 col-span-1 flex flex-col justify-center  items-center card ">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front ">
                <div className="picture picture_1">&nbsp;</div>
                <p> I entertain</p>
              </div>

              <div className="flip-card-back  ">
                <div className=" border-2 border-feedyYellow  border-box flex items-center p-5 ">
                  <p>You will live in present when you are with me.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:col-span-4 col-span-1 flex flex-col justify-center  items-center card">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div className="picture picture_2">&nbsp;</div>
                <p> I safeguard</p>
              </div>

              <div className="flip-card-back  ">
                <div className=" border-2 border-feedyYellow  border-box flex items-center p-5 ">
                  <p>
                    Until you say someone is friend/ family, I protect you and
                    your home from them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:col-span-4 col-span-1 flex flex-col justify-center  items-center card">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div className="picture picture_3">&nbsp;</div>
                <p> I fetch</p>
              </div>
              <div className="flip-card-back  ">
                <div className=" border-2 border-feedyYellow  border-box flex items-center p-5 ">
                  <p>You sit and instruct me, I'll fetch things for you..</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 space-y-6  ">
        <div className="md:col-span-2 col-span-1 flex flex-col justify-center  items-center "></div>
        <div className=" md:col-span-4 col-span-1 flex flex-col justify-center  items-center card">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div className="picture picture_4">&nbsp;</div>
                <p> I love</p>
              </div>
              <div className="flip-card-back  ">
                <div className=" border-2 border-feedyYellow  border-box flex items-center p-5 ">
                  <p>Whenever I am with my family, love vibes always exist.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:col-span-4 col-span-1 flex flex-col justify-center  items-center card">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div className="picture picture_5">&nbsp;</div>

                <p> I listen</p>
              </div>
              <div className="flip-card-back  ">
                <div className=" border-2 border-feedyYellow  border-box flex items-center p-5 ">
                  <p>no one is alone in my company. I am a good listener.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 col-span-1 flex flex-col justify-center  items-center "></div>
      </div>
    </div>
  );
};
export default AppWrap(MotionWrap(IDo), "IDo", "app__greenbg");
