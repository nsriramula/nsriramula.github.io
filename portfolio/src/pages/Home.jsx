import { Divider, Stack } from "@mui/material";
import "./Home.css";
import { useEffect, useState } from "react";
import Navbar from '../components/Navbar';

function Home() {
  const scrollLineLength = "50vh";
  const [posX, setPosX] = useState(-1);
  const [posY, setPosY] = useState(-1);
  const [transformX, setTransformX] = useState(0);
  const [transformY, setTransformY] = useState(0);
  useEffect(() => {
    document.title = "Niraj Sriramula";
    window.addEventListener("mousemove", (event) => {
      setPosX(event.clientX);
      setPosY(event.clientY);
    
      setTransformX(
        -((event.clientX - window.innerWidth / 2) / window.innerWidth) * 20
      );
    });
  }, []);

  return (
    <>
    <Navbar></Navbar>
    <div  className="lala is-onscreen"
          data-prlx="0 0.25"
          style={{ position: "relative" }}
          >
      <div className="article-heading">
        <h1 className="article-heading__title t-heading t-medium:s t-bigger:m t-biggest:l">
          <span>
            Hi, my name is <b>Niraj</b><span className="dot">.</span>
          </span>
        </h1>
      </div>
    </div>
    </>
  );
}

export default Home;
