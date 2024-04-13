function Cart ({heading , title}) {
    return(
        <div className="w-[30%]">
            <h1 className="text-lg mb-2">{heading}</h1>
            <p className="w-[300px] text-gray-900">{title}</p>
        </div>
    )
}

export default function FullPage_Screen5(){
    return (
        <div className="w-full h-[100vh] py-12">
            <h1 className="text-4xl text-center mb-5">Connecting You to the World of Video</h1>

            <div className="pl-20 py-5 flex justify-start gap-y-5 flex-wrap">
                <Cart heading={"Global Access"} title={"Enjoy our content from anywhere in the world, with support for multiple languages and regions."} />
                <Cart heading={"Cross-Device Compatibility"} title={"Stream seamlessly across your devices, whether you're on your TV, laptop, or mobile phone."}/>
                <Cart  heading={"Dedicated Support"} title={"Our friendly customer service team is always available to assist you with any questions or concerns."}/>
                <Cart heading={"Copyright Protection"} title={"Rest assured that your viewing experience is secure and your privacy is our top priority."} />
            </div>
        </div>
    )
}