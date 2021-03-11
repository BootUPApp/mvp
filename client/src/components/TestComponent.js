import React, { useRef, useEffect, useState } from "react";
import hoverEffect from "hover-effect";
import axios from "axios";


export default function App() {
  const container = useRef();

  const [Getgraduates, setGraduates] = useState();

  const [getMapper, setMapper] = useState(setGraduates)

  console.log(getMapper)


  useEffect(() => {
    console.log(container.current);

    axios.get("api/graduates").then(response => {
      setGraduates([response.data]);
    }).catch(error => {
      console.log(error)
    })
    
    new hoverEffect({
      parent: container.current,
      intensity: 0.3,
      image1: "https://picsum.photos/400/600",
      image2: "https://picsum.photos/420/620",
      displacementImage:
        "https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/fluid.jpg"
    });
  }, [container, setGraduates]);



  return (
    <div className="App">
      <h1>React Distortion Effect</h1>
      <h2>Hover over the image to see some magic happen!</h2>
      <div
        className="parent"
        id="imgContainer"
        ref={container}
        style={{
          width: 400,
          height: 600
        }}
      />
    </div>
  );
}

