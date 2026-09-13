import { Suspense, useState } from "react";
import Banner from "./component/Banner";
import Navbar from "./component/NavBar";
import type { Technology } from "./types/types";
import Technologies from "./component/Technologies";
import { ToastContainer } from "react-toastify";
import Footer from "./component/Footer";

const techStackFetch = async (): Promise<Technology[]> => {
  const res = await fetch("/data/data.json");
  const data = await res.json();
  return data;
};



function App() {

  const [technologiesPromise] = useState(() => techStackFetch());
  return (
    <>
      <Navbar/>
      <Banner/>
      <main>
        <Suspense fallback={<h1 className="flex justify-center ">loading....</h1>}>
            <Technologies technologiesPromise={technologiesPromise}  />
            <ToastContainer/>
        </Suspense>
      </main>
      <Footer/>
    </>
  );
}

export default App;
