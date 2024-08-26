// import { useState } from "react";
// import "./App.css";
// import OffButton from "./components/OffButton";
// import OnButton from "./components/OnButton";

// function App() {
//   const [isOn, setIsOn] = useState(false);
//   return (
//     <>
//       <div className="h-screen w-full flex justify-center items-center">
//         {isOn ? (
//           <OnButton isOn={isOn} setIsOn={setIsOn} />
//         ) : (
//           <OffButton isOn={isOn} setIsOn={setIsOn} />
//         )}
//       </div>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";
import OffButton from "./components/OffButton";
import OnButton from "./components/OnButton";

function App() {
  const [isOn, setIsOn] = useState(false);
  return (
    <>
      {/* h-screen w-full flex justify-center items-center */}
      <div
        className={
          isOn
            ? "h-screen w-full flex justify-center items-center"
            : "h-screen w-full flex justify-center items-center bg-slate-800"
        }
      >
        {/* <OnButton isOn={isOn} setIsOn={setIsOn} /> */}

        <OffButton isOn={isOn} setIsOn={setIsOn} />
      </div>
    </>
  );
}

export default App;
