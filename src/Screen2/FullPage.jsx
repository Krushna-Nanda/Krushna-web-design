import pufcornOnSofa from "../assets/Images/Pufcorn_On_Sofa.jpg"

export default function FullPage_Screen2() {
    const divStyle = {
        backgroundImage: `url(${pufcornOnSofa})`,
      
      };
  return (
    <div
     style={divStyle}
    className="bg-black bg-cover object-cover bg-center bg-no-repeat bg-w text-white w-full h-[100vh]">
      <div className="relative bg-black/80 w-full h-full flex flex-col justify-center px-20 gap-y-10">
        <p className="w-full text-4xl px-2 text-gray-300 font-sans">Discover the Best Videos</p>
        <div className="flex gap-x-5">
          <div className="flex gap-x-4">
            <h className="bg-[#3D3D42] border-[0.1px] border-gray-200 h-fit px-3.5 py-0.5 rounded-md text-xl text-[#E5EODF]">
              1
            </h>
            <div className="text-gray-300">
              <p className="text-2xl w-fit text-white text-[#E5EODF] ">
                Featured <br /> Highlights
              </p>
              <p className="mt-2">Stay up-to-date with our </p>
              <p>curated selection of the </p>
              <p>latest and greatest videos,</p>
              <p>handpicked by our team of</p>
              <p>experts.</p>
            </div>
          </div>
          <div className="flex gap-x-4">
            <h className="bg-[#3D3D42] border-[0.1px] border-gray-200 h-fit px-3.5 py-0.5 rounded-md text-xl text-[#E5EODF]">
              2
            </h>
            <div className="text-gray-300">
              <p className="text-xl w-fit text-white text-[#E5EODF] ">Exclusive Originals</p>
              <p className="mt-2">Dive into our collection of </p>
              <p>exclusive original content, </p>
              <p>featuring captivating </p>
              <p>stories and innovative</p>
              <p>productions.</p>
            </div>
          </div>
          <div className="flex gap-x-4">
            <h className="bg-[#3D3D42] border-[0.1px] border-gray-200 h-fit px-3.5 py-0.5 rounded-md text-xl text-[#E5EODF]">
              3
            </h>
            <div>
              <p className="text-xl w-fit text-white text-[#E5EODF] ">Trending Titles</p>
              <p className="mt-2">Be the first to discover the </p>
              <p>hottest videos that </p>
              <p>everyone is talking about, </p>
              <p>handpicked by our team of</p>
              <p>and join the conversation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
