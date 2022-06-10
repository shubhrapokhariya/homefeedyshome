import React, { useState } from "react";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { XIcon, MenuIcon } from "@heroicons/react/outline";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const openMenu = () => {
    setToggle(true);
    console.log("open");
  };
  const closeMenu = () => {
    setToggle(false);
    console.log("close");
  };

  return (
    <nav className="app__navbar ">
      <div className="flex justify-between items-center s">
        <div className="app__navbar-logo ">
          <img src={logo} alt="logo" height="50px" width="120px" />
        </div>
        <ul className=" hidden md:flex flex-1 justify-center items-center space-x-4 text-white font-semibold">
          {[
            "Home",
            "WhoMe",
            "IDo",
            "INeed",
            "MyStory",
            "Feedback",
            "ReachMe",
          ].map((item) => (
            <li key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>

      {!toggle ? (
        <MenuIcon
          onClick={openMenu}
          className="   navigation__button text-feedyBlue md:hidden"
        />
      ) : (
        <XIcon
          onClick={closeMenu}
          className=" navigation__button text-feedyOrange md:hidden"
        />
      )}

      {toggle && (
        <motion.div
          className="fixed top-0 bottom-0 right-0  p-50 z-5 w-full h-screen flex pt-10 justify-center items-center  flex-col  text-white font-bold    toggle-bg  "
          whileInView={{ x: [300, 0] }}
          // animate={{ y: 100 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <ul className="w-2/4 h-full space-y-4 ">
            {[
              "Home",
              "WhoMe",
              "IDo",
              "INeed",
              "MyStory",
              "Feedback",
              "ReachMe",
            ].map((item) => (
              <li key={item} className="pt-4 ">
                <a
                  href={`#${item}`}
                  onClick={() => setToggle(false)}
                  className=""
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Header;

// import React, { useState } from "react";
// //import logo from "../assets/logo.png";
// import { motion } from "framer-motion";
// const Header = () => {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <nav className="app__navbar ">
//       <div className="app__navbar-logo">
//         {/* <img src={logo} alt="logo" /> */}
//       </div>
//       <ul className=" hidden lg:flex flex-1 justify-center items-center space-x-4">
//         {[
//           "Home",
//           "WhoMe",
//           "IDo",
//           "INeed",
//           "MyStory",
//           "Feedback",
//           "ReachMe",
//         ].map((item) => (
//           <li key={`link-${item}`}>
//             <div />
//             <a href={`#${item}`}>{item}</a>
//           </li>
//         ))}
//       </ul>

//       <div className="w-35 h-35  rounded-full relative flex justify-center items-center bg-green-300 lg:hidden ">
//         <button onClick={() => setToggle(true)} className="p-4 " />
//
//         {toggle && (
//           <motion.div
//             className="fixed top-0 bottom-0 right-0  p-50 z-5 w-80 h-screen flex justify-end items-end  flex-col "
//             whileInView={{ x: [300, 0] }}
//             transition={{ duration: 0.85, ease: "easeOut" }}
//           >
//             <button onClick={() => setToggle(false)} className="p-4 bg-red" />
//             <ul className="w-full h-full">
//               {[
//                 "Home",
//                 "WhoMe",
//                 "IDo",
//                 "INeed",
//                 "MyStory",
//                 "Feedback",
//                 "ReachMe",
//               ].map((item) => (
//                 <li key={item} className="">
//                   <a
//                     href={`#${item}`}
//                     onClick={() => setToggle(false)}
//                     className=" "
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Header;
