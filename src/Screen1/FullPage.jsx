import watchingMovieWithEatingPuf from "../assets/Images/Watching_Movie_With_Pufcorn.jpg";

export default function FullPage_Screen1() {
  return (
    <div className="bg-black text-white w-full lg:h-[130vh] lg:pt-24">

      {/* Container of both images and text */}
      <div className="flex flex-col-reverse z-20 lg:flex-row w-full h-full">

        <div className="relative flex flex-col gap-y-3 lg:w-[70%] pt-5 px-3 lg:pl-24 lg:pt-20 lg:gap-y-6 font-sans">
          <div className="text-4xl lg:text-7xl tracking-wider font-bold leading-tight">
            <p>StreamHub: Your Ultimate Video Streaming <span className="inline-block transition-transform transform origin-top hover:scale-95">Destination</span></p>
          </div>
          <div className="text-gray-300 flex flex-col lg:flex-row gap-y-1 text-base">
            <p>
              Dive into a vast library of the latest and greatest videos. Immerse yourself in captivating stories, engaging documentaries, and trending content with just a click.
            </p>
          </div>
          <div className="w-full lg:w-fit flex flex-col lg:flex-row gap-y-3 lg:gap-x-5">
            <button className="bg-white py-3 px-6 lg:hover:scale-[1.02] text-black rounded-md hover:bg-gray-200 transition-transform transform hover:scale-105">
              Start Streaming
            </button>
            <button className="border-[2.5px] border-white py-3 px-6 lg:hover:scale-[1.02] rounded-md hover:bg-white hover:text-black transition-transform transform hover:scale-105">
              Sign Up
            </button>
          </div>
        </div>

        <div className="relative h-[60%] lg:h-full py-2">
          <img
            className="rounded-md w-full object-cover h-[500px]"
            src={watchingMovieWithEatingPuf}
            alt="Watching Movie"
          />
        </div>
      </div>
    </div>
  );
}
