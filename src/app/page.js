import Image from "next/image";
import Top from "./component/Home/Top";
import Status from "./component/Home/Status";
import Broke from "./component/Home/Broke";
import Figure from "./component/Home/Figure";
import Explore from "./component/Home/Explore";
import Explore1 from "./component/Home/Explore1";
import Navigate from "./component/Home/Navigate";
import Navigate1 from "./component/Home/Navigate1";
import Plan from "./component/Home/Plan";
import Plan1 from "./component/Home/Plan1";
import Contact from "./component/Home/Contact";
import Footar from "./component/Home/Footar";
import Footar1 from "./component/Home/Footar1";
import Footar2 from "./component/Home/Footar2";

export default function Home() {
  return (
    <div>
     <Top/>
     <Status/>
     <Broke/>
     <Figure/>
     <Explore/>
     <Explore1/>
     <Navigate/>
     <Navigate1/>
     <Plan/>
     <Plan1/>
     <Contact/>
     <Footar/>
     <Footar1/>
     <Footar2/>
    </div>
  );
}
