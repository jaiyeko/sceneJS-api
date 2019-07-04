import React from 'react';
import './App.css';
import Scene from "scenejs";
new Scene({
  ".square": i => ({
    0: {
      transform: "translate(-50%, -50%) rotate(45deg) scale(0)",
      "border-width": "10px",
      opacity: 0,
    },
    0.1: {
      opacity: 0.5,
      transform: "rotate(45deg) scale(0.4)",
      "border-width": "15px",
    },
    0.3: {
      transform: "rotate(45deg) scale(1)",
    },
    0.7: {
      opacity: 1,
    },
    0.8: {
      "border-width": "0px",
    },
    1: {
      opacity: 0,
    },
    options: {
      delay: 0.5 * i,
    },
  })
}, {
  iterationCount: "infinite",
  selector: true
}).play();
new Scene({
    ".overflow .text span": i => ({
      0: {
        transform: {
          translateY: "0%",
        }
      },
      1: {
        transform: {
          translateY: "100%",
        }
      },
      options: {
        delay: i * 0.6,
      }
    }), }, {
    easing: "ease-in-out",
    selector: true,
    direction: "alternate",
    iterationCount: "infinite",
  }).play();
  
function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
