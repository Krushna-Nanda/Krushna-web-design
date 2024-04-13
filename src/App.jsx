import FullPage_Screen1 from "./Screen1/FullPage";
import FullPage_Screen2 from "./Screen2/FullPage";
import FullPage_Screen3 from "./Screen3/FullPage.Screen3";
import FullPage_Screen4 from "./Screen4/FullPage_Screen4";
import FullPage_Screen5 from "./Screen5/FullPage.Screen5";

export default function App() {
  return (
    <div>
      <FullPage_Screen1 />
      <FullPage_Screen2 />
      <FullPage_Screen3 />
      <FullPage_Screen4 />
      <FullPage_Screen5 />
      {/* <div className="h-[100vh]"></div> */}
    </div>
  );
}
