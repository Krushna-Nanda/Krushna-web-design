import FullPage_Screen1 from "./Screen1/FullPage";
import FullPage_Screen2 from "./Screen2/FullPage";
import FullPage_Screen3 from "./Screen3/FullPage.Screen3";
import FullPage_Screen4 from "./Screen4/FullPage_Screen4";
import FullPage_Screen5 from "./Screen5/FullPage.Screen5";
import FullPage_Screen6 from "./Screen6/FullPage.Screen6";
import FullPage_Screen7 from "./Screen7/FullPage.Screen7";
import Navbar from "./Screen1/Navbar";
import Footer from "./Footer/Footer.jsx";

export default function App() {
  return (
    <div>
      <Navbar />
      <FullPage_Screen1 />
      <FullPage_Screen2 />
      <FullPage_Screen3 />
      <FullPage_Screen6 />
      <FullPage_Screen7 />
      <FullPage_Screen4 />
      <FullPage_Screen5 />
      <Footer />
      {/* <div className="h-[100vh]"></div> */}
    </div>
  );
}
