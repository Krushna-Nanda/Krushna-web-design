import movieBannerObj from "./ImagesContainer"

function Cart({imageUrl}) {
   return(
    <div className="w-[15%] bg-white p-0.5 rounded-md h-[250px] border">
       <img src={imageUrl} alt="" className="w-full h-full object-cover" />
    </div>
   )
}

export default function FullPage_Screen6(){
    const {image1 , image2 , image3 , image4 , image5 , image6 , image7 , image8 , image9 , image10 , image11 , image12 , image13} = movieBannerObj

    return(
        <div className="bg-gray-400 p-10  flex flex-wrap justify-between gap-x-10 gap-y-8">
            <Cart imageUrl={image1} />
            <Cart imageUrl={image2} />
            <Cart imageUrl={image3} />
            <Cart imageUrl={image4} />
            <Cart imageUrl={image5} />
            <Cart imageUrl={image6} />
            <Cart imageUrl={image7} />
            <Cart imageUrl={image8} />
            <Cart imageUrl={image9} />
            <Cart imageUrl={image10} />
            <Cart imageUrl={image11} />
            <Cart imageUrl={image12} />
            <Cart imageUrl={image13} />
            <Cart imageUrl={image1} />
            <Cart imageUrl={image2} />
        </div>
    )
}