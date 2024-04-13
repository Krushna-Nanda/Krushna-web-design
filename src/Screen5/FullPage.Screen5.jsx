function Cart({ heading, title }) {
    return (
      <div className="w-[30%] bg-white shadow-xl rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50 hover:border-pink-500 border border-transparent hover:border-pink-700">
        <h1 className="text-lg font-semibold mb-4 text-gray-800">{heading}</h1>
        <p className="text-sm text-gray-700">{title}</p>
      </div>
    );
  }
  





export default function FullPage_Screen5() {
    return (
        <div className="w-full h-[100vh] py-12 bg-gray-100">
            <h1 className="text-4xl text-center mb-10 font-bold text-gray-800">Connecting You to the World of Video</h1>

            <div className="container mx-auto flex flex-wrap justify-center gap-8 pr-8"> {/* Added pr-8 for padding-right */}
                <Cart heading={"Global Access"} title={"Enjoy our content from anywhere in the world, with support for multiple languages and regions."} />
                <Cart heading={"Cross-Device Compatibility"} title={"Stream seamlessly across your devices, whether you're on your TV, laptop, or mobile phone."}/>
                <Cart heading={"Dedicated Support"} title={"Our friendly customer service team is always available to assist you with any questions or concerns."}/>
                <Cart heading={"Copyright Protection"} title={"Rest assured that your viewing experience is secure and your privacy is our top priority."} />
                <Cart heading={"Exclusive Content"} title={"Access exclusive shows and movies not available anywhere else, curated just for you."} />
                <Cart heading={"Personalized Recommendations"} title={"Receive personalized recommendations based on your viewing history and preferences."} />
            </div>
        </div>
    );
}

