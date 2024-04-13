import { useState } from "react";
import homeCinema from "../assets/Images/HomeCinema.Banner.jpg";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";

const ContextCard = ({ heading, title }) => {
  const [isContextShow, setIsContextShow] = useState(false);
  function chnageArrowBtnContextForMessage() {
    setIsContextShow((prev) => !prev);
  }
  return (
    <div className="text-gray-300">
      <div
        onClick={chnageArrowBtnContextForMessage}
        className="flex cursor-pointer items-center w-fit gap-3 pb-3"
      >
        {isContextShow ? (
          <BiSolidDownArrow className="text-white" />
        ) : (
          <BiSolidRightArrow className="text-white" />
        )}
        <h1>{heading}</h1>
      </div>
      {isContextShow ? (
        <p className="border-l-[0.1px] border-gray-600 pl-5 ml-2 mt-5 w-[500px] text-sm">{title}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default function FullPage_Screen3() {
  return (
    <div className="bg-black text-white  w-full min-h-[70vh] flex">
        
        <div className="relative w-[70%] pt-20 pl-16 pb-8 ">
          <h1 className="text-5xl font-thin mb-8">Find What You Love</h1>
          <ContextCard heading={"Powerful Search"} title={"Effortlessly find the content you're looking for with our advanced search functionality. Narrow down your results by title, actor, genre, or even specific keywords."} />
          <ContextCard heading={"Personalized Recommendations"} title={"Our intelligent recommendation engine analyzes your viewing history and preferences to suggest new videos you're sure to enjoy. Discover hidden gems and expand your horizons."} />
          <ContextCard heading={"Intuitive Browsing"} title={"Explore our user-friendly interface to navigate through our vast library of videos. Easily browse by category, sort by popularity, or discover new releases."} />
        </div>

        <div className="relative py-5 px-8  w-[40%]"><img className="relative w-full h-full rounded-md" src={homeCinema} alt="" /></div>
    </div>
  );
}
