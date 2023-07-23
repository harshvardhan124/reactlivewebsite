import React from "react";
import web from "../src/img/1.jpg";
import Common from "./Common";
import Footer from "./Footer";
const Home = () => {
  const title="Grow your bussiness with "
  const btn="Get Started"
  return (
    <>
      <Common title={title} imgsrc={web} visit={"./service"}btnText={btn}/>
      <div className="mt-5">
      <Footer/>
    </div>

    </>
      );
    
};

export default Home;
