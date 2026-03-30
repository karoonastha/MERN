import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrash, FaUserEdit } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Table = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setData(res.data);
      } catch {
        toast.error("Failed to fetch data");
      }
    };
    fetchData();
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://fakestoreapi.com/products/${id}`);
      toast.success("Product deleted successfully.");
      setData((prev) => prev.filter((item) => item.id !== id));
    } catch {
      toast.error("Error while deleting product");
    }
  };
  const handleEdit = (item) => {
    navigate(`/edit/${item.id}`, { state: { product: item } });
  };

  return (
    <div className="p-4">
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="overflow-x-auto border border-gray-300 rounded">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-gray-200 border-b">
            <tr>
              <th className="px-6 py-3 border">Image</th>
              <th className="px-6 py-3 border">Product Name</th>
              <th className="px-6 py-3 border">Description</th>
              <th className="px-6 py-3 border">Category</th>
              <th className="px-6 py-3 border">Price(Rs.)</th>
              <th className="px-6 py-3 border">Action</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((item) => (
              <tr
                key={item.id}
                className="bg-white border-b hover:bg-gray-100"
              >
                <td className="px-6 py-4 border">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-10 w-10 object-contain"
                  />
                </td>
                <td className="px-6 py-4 border">{item.title}</td>
                <td className="px-6 py-4 border">
                  {item.description?.slice(0, 100)}...
                </td>
                <td className="px-6 py-4 border">{item.category}</td>
                <td className="px-6 py-4 border">{item.price}</td>
                <td className="px-6 py-4 border flex gap-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-blue-500 text-white p-2 rounded flex items-center"
                  >
                    <FaUserEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white p-2 rounded flex items-center"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;