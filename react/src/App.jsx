import { useEffect, useState } from "react";
import Form from "./components/Form";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


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

//    <div className="h-screen flex justify-center items-center">
//   <button className="h-[50px] w-[120px] bg-amber-500 text-white font-semibold rounded-lg flex justify-center items-center hover:bg-amber-600 transition"
//   onClick={() => setShowPopup(true)}>
//     Open
//   </button>
//   {showPopup && (
//     <div className="fixed inset-0 flex justify-center items-center bg-black/40">
//       <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//         <h2 className="text-lg font-bold">Are you sure?</h2>

//         <div className="flex flex-row gap-4 justify-center">
//           <button
//                 onClick={() => alert("Confirmed")}
//                 className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//               >
//                 Yes
//               </button>
//               <button
//                 onClick={() => setShowPopup(false)}
//                 className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//               >
//                 No
//               </button>
//         </div>
//       </div>
//     </div>
//   )}
// </div>
 


    <div className="min-h-screen bg-white flex justify-center items-center p-6">
      
      <div className="w-[900px] border-2 border-blue-500 rounded-2xl p-8">

        <h1 className="text-black text-5xl text-center mb-6 font-semibold">
          Todo List
        </h1>

        <div className="flex justify-center items-center gap-4 mb-8">
          
          <div className="flex items-center border border-black rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent px-4 py-2 text-black outline-none w-[300px]"
            />
            <button className="bg-red-400 w-10 h-10 flex items-center justify-center">
              <FaSearch/>
            </button>
          </div>

          <button className="border border-black text-black px-6 py-2 rounded-lg">Add
          </button>

        </div>

        <div className="grid grid-cols-3 gap-6">

          <div className="border border-black rounded-xl p-4 text-black">
            <h2 className="font-semibold mb-2">Title: Hello</h2>

            <p className="text-sm mb-4">
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>

            <div className="flex gap-3">
              <button className="border border-black px-3 py-1 rounded">
                Edit
              </button>

              <button className="border border-black px-3 py-1 rounded">
                Delete
              </button>
            </div>
          </div>

          <div className="border border-black rounded-xl p-4 min-h-[180px] flex flex-col justify-between">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ipsam velit voluptatem neque doloribus nisi obcaecati quasi eaque sapiente laudantium? Eveniet deserunt placeat quae aperiam iusto tenetur velit molestiae iste.</div>
          <div className="border border-black rounded-xl p-4 min-h-[180px] flex flex-col justify-between">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloremque illo, hic perspiciatis architecto vel ullam commodi necessitatibus, sit officiis distinctio explicabo optio? Suscipit inventore ut officiis nobis</div>
        </div>

      </div>
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