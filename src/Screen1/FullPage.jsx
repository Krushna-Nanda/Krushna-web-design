import watchingMovieWithEatingPuf from "../assets/Images/Watching_Movie_With_Pufcorn.jpg";

export default function FullPage_Screen1() {
  return (
    <div className="bg-black text-white w-full h-[130vh]">
      <div className="flex w-full h-full">
        <div className="relative w-[60%]  pl-24 pt-20 flex flex-col gap-y-6">
          <div className="text-6xl tracking-wider font-sans text-white/90 flex flex-col gap-y-2">
            <p>StreamHub:</p>
            <p>Your Ultimate</p>
            <p>Video</p>
            <p>Streaming</p>
            <p>Destination</p>
          </div>
          <div className="text-[#E5E0Df] flex flex-col gap-y-1 text-sm">
            <p>Discover a world of endless entertainment at StreamHub,</p>
            <p>where you can access a vast library of the latest and greatest</p>
            <p>videos. Immerse yourself in captivating stories, engaging</p>
            <p>documentaries, and trending content with just a click.</p>
          </div>
         <div className="w-fit font-sans   flex gap-x-5">
         <button className="bg-white px-4 py-3 hover:scale-[1.02] text-black rounded-md">
            Start Streaming
          </button>
          <button className="border-[2.5px] px-4 hover:scale-[1.02] rounded-md">Sign Up</button>
         </div>
        </div>

        <div className="relative w-fit  h-full py-2">
          <img
            className="rounded-md h-full"
            src={watchingMovieWithEatingPuf}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
