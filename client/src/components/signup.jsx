import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/register", formData);
      setError("User Added Successfully");
    } catch (e) {
      console.error("error posting data", e);
      if (e.response.status === 400) {
        setError("Email Already Exists, please go to login page");
      } else {
        setError("an error occurred, please try again");
      }
    }
  };

  return (
    <div className=" bg-custom-blue  text-white lg:px-24 md:px-12 flex">
      {/* Left Section */}
      <div className="">
        <div className="pt-12">
          <img
            src="
            https://www.integrityfixed.com/Portals/101/logo.png
            "
            alt="web logo"
            className=" h-24"
          />
          <div className=" flex gap-3 items-center pt-16">
            <img
              src="
              https://cdn4.iconfinder.com/data/icons/VISTA/business/png/400/shopping_cart.png
              "
              alt="cart logo"
              className=" size-12"
            />
            <span>Matching items for your car</span>
          </div>
          <div className=" flex gap-3 items-center pt-2">
            <img
              src="
            https://cdn.iconscout.com/icon/free/png-256/free-wishlist-9184293-7490866.png?f=webp&w=256
            "
              alt="wishlist logo"
              className=" size-12"
            />
            <span>Get product recommendations</span>
          </div>
        </div>
        <div className="pt-20">
          <img
            src="
            https://purepng.com/public/uploads/large/purepng.com-ford-mustang-red-car-back-sidecarcarsvehiclevehiclestransport-561521126642ao5q4.png
          "
            alt="car"
            className=" w-[600px] h-[300px]"
          />
        </div>
      </div>

      {/* Right Section */}

      <div className="bg-white text-black w-[500px] flex flex-wrap flex-col items-center pt-12">
        <p className="text-2xl font-semibold">Create a profile</p>
        <p>
          Already a customer?{" "}
          <Link to={"/login"} className="text-blue-600">
            Log In
          </Link>
        </p>
        <button
          type="button"
          className="mt-4 text-white lg:w-72  bg-custom-red hover:bg-red-500/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-around mr-2 mb-2"
        >
          <svg
            className="mr-2 -ml-1 w-4 h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Sign up with Google
        </button>
        <p className="pb-4">---------------- OR ----------------</p>
        <div>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            id="first_name"
            className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="First Name *"
            required
          />
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Last Name *"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email Address *"
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password *"
            required
          />
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
            className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Confirm Password *"
            required
          />
        </div>
        <div className="w-96 my-4">
          <input type="checkbox" name="marketing" id="marketing" />
          <label htmlFor="marketing" className="pl-2">
            I agree to receive promotions, and other marketing materials via
            e-mail from{" "}
            <a href="/" className="text-blue-500">
              Integrity.com
            </a>
          </label>
        </div>
        <div className="w-96 mb-4">
          <input type="checkbox" name="terms" id="terms" />
          <label htmlFor="terms" className="pl-2">
            I confirm that I have read, and consent to Integrity.com{" "}
            <a href="#" className="text-blue-500">
              Terms and conditions and Privacy policy
            </a>
          </label>
        </div>
        <div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="text-white mt-4 lg:w-72 bg-blue-500 hover:bg-blue-400/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
          >
            Create An Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
