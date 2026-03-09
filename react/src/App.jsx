import { useEffect, useState } from "react";
import Form from "./components/Form";
import { FaHome } from "react-icons/fa";

const App = () => {
  // const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("");
  const [status, setStatus] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // useEffect(()=>{
  //   handleAdd();
  // },[])

  // const handleAdd = () => {
  //   setCount((prev) => prev + 1);
  //   console.log(count);
  // };

  return (

   <div className="h-screen flex justify-center items-center">
  <button className="h-[50px] w-[120px] bg-amber-500 text-white font-semibold rounded-lg flex justify-center items-center hover:bg-amber-600 transition"
  onClick={() => setShowPopup(true)}>
    Open
  </button>
  {showPopup && (
    <div className="fixed inset-0 flex justify-center items-center bg-black/40">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-lg font-bold">Are you sure?</h2>

        <div className="flex flex-row gap-4 justify-center">
          <button
                onClick={() => alert("Confirmed")}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Yes
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                No
              </button>
        </div>
      </div>
    </div>
  )}
</div>


    //  <div
    //   className={`h-screen flex justify-center items-center ${
    //     status ? "bg-white" : "bg-green-800"

    //   }`}
    // >
    // <button
    //   onClick={() => setStatus(!status)}
    //   className={`p-3 px-6 rounded-md text-white cursor-pointer transition-all duration-300 ${
    //       status ? "bg-green-500" : "bg-red-500"
    //     }`}
    // >
    //   <FaHome/>
    //   {status ? "OFF" : "ON"}
    // </button>
    // </div>
    // <div className="h-screen" style={{ backgroundColor: bgColor }}>
    //   <div className="bg-transparent flex justify-between px-16 items-center">
    //     {/* <span>{count}</span>
    //   <button onClick={handleAdd} className="p-2 px-4 rounded-md bg-blue-500">
    //     +
    //   </button> */}
    //     {/* <Form text={"Register"} /> */}
    //     <button
    //       onClick={() => setBgColor("red")}
    //       className="p-2 px-4 rounded-md text-white cursor-pointer bg-red-500"
    //     >
    //       Red
    //     </button>
    //     <button
    //       onClick={() => setBgColor("green")}
    //       className="p-2 px-4 rounded-md text-white cursor-pointer bg-green-500"
    //     >
    //       Green
    //     </button>
    //     <button
    //       onClick={() => setBgColor("blue")}
    //       className="p-2 px-4 rounded-md text-white cursor-pointer bg-blue-500"
    //     >
    //       Blue
    //     </button>
    //     <button
    //       onClick={() => setBgColor("black")}
    //       className="p-2 px-4 rounded-md text-white cursor-pointer bg-black"
    //     >
    //       Black
    //     </button>
    //     <button
    //       onClick={() => setBgColor("yellow")}
    //       className="p-2 px-4 rounded-md text-white cursor-pointer bg-yellow-500"
    //     >
    //       Yellow
    //     </button>
    //   </div>
    // </div>
  );
};

export default App;