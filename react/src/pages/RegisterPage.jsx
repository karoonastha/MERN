import React, { useState } from "react";

const user = {
  email: "karoonasth@gmail.com",
  password: "1234567890",
};

const RegisterPage = () => {
  const init = {
    name: "",
    address: "",
    phone: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(init);

  const handleChange = (e) => {
    // console.log(`${e.target.name}: ${e.target.value}`);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.length === 0) {
      return alert("Name should be provided");
    }
    if (formData.phone.length < 10) {
      return alert("Please enter full number");
    }
  if (formData.password.length < 6) {
    return alert("Password must be at least 6 characters");
  }

  if (
      formData.email === user.email &&
      formData.password === user.password
    ) {
      alert("Login successful");
      console.log("User verified:", formData);
    } else {
      alert("Invalid email or password");
    }


  setFormData(init);
};

return (
  <div className="flex justify-center items-center  h-screen w-full">
    <form
      onSubmit={handleSubmit}
      action=""
      className="rounded-lg w-[30rem] shadow-2xl flex flex-col p-4 gap-4"
    >
      <h1 className="text-3xl font-bold">Register</h1>

      <input
        onChange={handleChange}
        className="border-2 rounded-md p-1 w-full"
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        id=""
      />
      <input
        onChange={handleChange}
        className="border-2 rounded-md p-1 w-full"
        type="text"
        name="address"
        placeholder="Enter your Address"
        value={formData.address}
        id=""
      />
      <input
        onChange={handleChange}
        className="border-2 rounded-md p-1 w-full"
        type="text"
        name="phone"
        value={formData.phone}
        placeholder="Enter your phone"
      />
      <input
        onChange={handleChange}
        className="border-2 rounded-md p-1 w-full"
        type="email"
        name="email"
        value={formData.email}
        placeholder="Enter your email"
        id=""
      />
      <input
        onChange={handleChange}
        className="border-2 rounded-md p-1 w-full"
        type="password"
        name="password"
        value={formData.password}
        placeholder="Enter your password"
        id=""
      />
      <button type="submit" className="p-2 px-4 rounded-md bg-blue-500">
        Register
      </button>
    </form>
  </div>
);
};

export default RegisterPage;