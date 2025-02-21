import Image from "next/image";
import Homepage from "./pages/Homepage/Homepage";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Homepage/>
    </div>
  );
}

