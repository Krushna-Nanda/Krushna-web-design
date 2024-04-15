// import { useState } from "react";
// import logo from "../assets/logo.png";
// import { FaSearch } from "react-icons/fa";
// import { FaCartArrowDown } from "react-icons/fa6";
// import { BsClockHistory } from "react-icons/bs";

// export default function Navbar() {
//   // sign up , login , cart , watvhlisdt ,

//   const animationTailwindCustom = "transition ease-in-out duration-500";

//   function formHandler() {}
//   const [movie, setMovie] = useState("");
//   return (
//     <>
//       <div className="z-10 bg-black w-full  px-5 py-3 text-white fixed top-0 left-0 flex justify-between items-center">
//         <div className="w-36 ">
//           <img src={logo} alt="" />
//         </div>

// <form className="flex border w-[35%]" onSubmit={formHandler}>
//   {/* Right Side Div */}
//   <input
//     type="text"
//     className="w-full outline-none  bg-transparent  border-white/30   px-2 py-1 text-sm font-mono tracking-wide rounded-md"
//     placeholder="Search Video"
//     spellCheck={false}
//     value={movie}
//     onChange={() => setMovie((e) => e.target.value)}
//   />

//   <button className="border border-l-0 bg-white/50 px-2">
//     <FaSearch className="" />
//   </button>
//  </form>

//         <div id="right-side-contect" className="flex gap-x-5 items-center ">
//           <button
//             className={`bg-white/30 text-white text-md pb-1 px-1.5 rounded-md hover:scale-[1.1] ${animationTailwindCustom}`}
//           >
//             Sign Up
//           </button>

//           <button
//             className={`bg-white/30 text-white text-md pb-1 px-1.5 rounded-md hover:scale-[1.1] ${animationTailwindCustom}`}
//           >
//             Login
//           </button>

//           <button className="px-2 border border-transparent p-2 rounded-xl  hover:border hover:border-gray-300 hover:scale-[1.1] transition ease-in-out duration-500">
//             <FaCartArrowDown className="inline mr-1 " /> <span>Cart</span>
//           </button>

//           <button className=" border border-transparent p-2 rounded-xl  hover:border hover:border-gray-300 hover:scale-[1.1] transition ease-in-out duration-500">
//             <BsClockHistory className="inline mr-1" /> <span>Watch-List</span>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

import { useState } from "react";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { BsClockHistory } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [movie, setMovie] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  function formHandler(e) {
    e.preventDefault();
    // Your form handling logic
  }

  const animationTailwindCustom = "transition ease-in-out duration-500";

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden bg-black flex justify-between items-center gap-3 px-3 ">
        <form className="flex border w-[100%]" onSubmit={formHandler}>
          {/* Right Side Div */}
          <input
            type="text"
            className="w-full outline-none  bg-transparent  border-white/30   px-2 py-1 text-sm font-mono tracking-wide rounded-md"
            placeholder="Search Video"
            spellCheck={false}
            value={movie}
            onChange={() => setMovie((e) => e.target.value)}
          />

          <button className="border border-l-0 bg-white/50 px-2">
            <FaSearch className="" />
          </button>
        </form>

        <div className="bg-black">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Sidebar Menu for Mobile */}
      <div>
        <div
          className={`${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } fixed lg:hidden top-0 left-0 w-[80%] h-full bg-black z-50 pt-16 transition-transform ease-in-out duration-300`}
        >
          <div className="flex flex-col items-center">
            <img src={logo} alt="" className="w-36 mb-6" />
            <ul className="text-white">
              <li className="py-2 px-4 hover:bg-gray-800">Home</li>
              <li className="py-2 px-4 hover:bg-gray-800">Movies</li>
              <li className="py-2 px-4 hover:bg-gray-800">TV Shows</li>
              <li className="py-2 px-4 hover:bg-gray-800">My List</li>
              <li className="py-2 px-4 hover:bg-gray-800">Account</li>
              <li className="py-2 px-4 hover:bg-gray-800">Cart</li>
              <li className="py-2 px-4 hover:bg-gray-800">Watch List</li>
            </ul>
          </div>
        </div>
      </div>


      {/* Navbar for Large Screens */}
      <div className="hidden lg:fixed lg:top-0 lg:left-0 lg:z-10 lg:w-full lg:bg-black lg:text-white lg:shadow-2xl lg:flex lg:justify-between lg:items-center lg:px-3 lg:py-2">
        <div className="text-white">
          <img src={logo} alt="" className="w-36" />
        </div>

        <form className="flex border w-[35%]" onSubmit={formHandler}>
          {/* Right Side Div */}
          <input
            type="text"
            className="w-full outline-none bg-transparent border-white/30 px-2 py-1 text-sm font-mono tracking-wide rounded-md"
            placeholder="Search Video"
            spellCheck={false}
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
          />

          <button className="border border-l-0 bg-white/50 px-2">
            <FaSearch />
          </button>
        </form>

        <div id="right-side-contect" className="flex gap-x-5 items-center ">
          <button
            className={`bg-white/30 text-white text-md pb-1 px-1.5 rounded-md hover:scale-[1.1] ${animationTailwindCustom}`}
          >
            Sign Up
          </button>

          <button
            className={`bg-white/30 text-white text-md pb-1 px-1.5 rounded-md hover:scale-[1.1] ${animationTailwindCustom}`}
          >
            Login
          </button>

          <button className="px-2 border border-transparent p-2 rounded-xl hover:border hover:border-gray-300 hover:scale-[1.1] transition ease-in-out duration-500">
            <FaCartArrowDown className="inline mr-1" /> <span>Cart</span>
          </button>

          <button className="border border-transparent p-2 rounded-xl hover:border hover:border-gray-300 hover:scale-[1.1] transition ease-in-out duration-500">
            <BsClockHistory className="inline mr-1" /> <span>Watch-List</span>
          </button>
        </div>
      </div>
    </>
  );
}
