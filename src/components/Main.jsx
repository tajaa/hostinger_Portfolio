// const Main = () => {
//   return (
//     <div id="main">
//       <img
//         className="w-full h-screen object-cover object-left scale-x-[-1]"
//         src="/public/assets/andre-benz-qJfznuTMAYA-unsplash.jpg"
//       ></img>
//     </div>
//   );
// };

// export default Main;

import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="main" className="relative z-0">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="assets/andre-benz-qJfznuTMAYA-unsplash.jpg"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items0-center">
          <h1 className="sm:text-6xl text-4xl font-bold text-gray-900">Beto</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Engineer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Developer",
                2000,
                "Open Source Contributor",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1.5em", paddingLeft: "15px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter className="cursor-pointer" size={30} />
            <FaFacebookF className="cursor-pointer" size={30} />
            <FaInstagram className="cursor-pointer" size={30} />
            <FaLinkedinIn className="cursor-pointer" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
