import watchingMovieWithEatingPuf from "../assets/Images/Watching_Movie_With_Pufcorn.jpg";

export default function FullPage_Screen1() {
  return (
    <div className="bg-black text-white w-full   lg:h-[130vh] lg:pt-24">

        {/*  container of both images and text */}
      <div className="flex flex-col-reverse z-20 lg:flex-row w-full h-full">

        <div className="relative flex flex-col  gap-y-3 lg:w-[70%] pt-5 px-3 lg:pl-24 lg:pt-20 lg:gap-y-6">
          <div className="text-xl lg:text-6xl tracking-wider font-sans text-white/90 flex flex-col gap-y-2">
            <p>StreamHub: Your Ultimate Video Streaming Destination</p>
          </div>
          <div className="text-gray-300 flex flex-col lg:flex-row gap-y-1 text-sm">
            <p>
              where you can access a vast library of the latest and greatest
              videos. merse yourself in captivating stories, engaging
              documentaries, and trending content with just a click.
            </p>
          </div>
          <div className="w-full lg:w-fit font-sans flex flex-col lg:flex-row gap-y-3 lg:gap-x-5">
            <button className="bg-white py-2  lg:px-4 lg:py-3  lg:hover:scale-[1.02] text-black rounded-md">
              Start Streaming
            </button>
            <button className="border-[2.5px]  py-2 lg:px-4 lg:hover:scale-[1.02] rounded-md">
              Sign Up
            </button>
          </div>
        </div>

        <div className="relative h-[60%]  lg:h-full py-2">
          <img
            className="rounded-md w-full object-cover h-[500px]"
            src={watchingMovieWithEatingPuf}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

























