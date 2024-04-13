function Cart({heading , title}) {
    return(
        <div className="bg-[#4a4a4d] px-5 py-8 flex flex-col gap-3 rounded-lg border-[0.5px] border-gray-500 mb-10">
            <h1 className="text-xl">{heading}</h1>
            <p>{title}</p>
        </div>
    )
}



export default function FullPage_Screen4() {



    return (
        <div className="bg-gray-300 border font-sans  min-h-[200vh] py-20 px-5">
            <div className="bg-black text-gray-300 h-full rounded-lg px-20 py-10 ">
                <h2 className="text-5xl text-white/90 mb-10">Your Personalized Watchlist</h2>

                <Cart heading={"Saved for Later"} title={"Easily keep track of the videos you want to watch later by adding them to your personalized watchlist."} />
                <Cart heading={"Recommended for You"} title={"Discover new content tailored to your unique preferences, thanks to our advanced recommendation algorithms."}/>
                <Cart heading={"Recently Watched"} title={"Quickly access the videos you've recently enjoyed and pick up where you left off."}/>
                <Cart heading={"Favorites"} title={"Bookmark the videos you love the most and revisit them anytime in your personalized library."} />
            </div>
        </div>
    )
}