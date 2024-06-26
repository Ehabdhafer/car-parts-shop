import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../validation_schema";
import { useAuth } from "../hooks/Authcontext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values, { setSubmit }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/register",
        values
      );
      toast.success("User Added Successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      login(response.data.token);
      setTimeout(() => {
        navigate("/");
      }, 2500);
      setError("User Added Successfully");
    } catch (e) {
      console.error("error posting data", e);
      if (e.response.status === 400) {
        setError("Email Already Exists, please go to login page");
      } else {
        setError("an error occurred, please try again");
      }
    }
    setSubmit(false);
  };

  return (
    <div className=" bg-custom-blue  text-white lg:px-24 md:px-12 flex">
      <ToastContainer />

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
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <ErrorMessage
                  name="first_name"
                  component="div"
                  className="text-red-500 text-sm"
                />
                <Field
                  type="text"
                  name="first_name"
                  className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5"
                  placeholder="First Name *"
                />
              </div>
              <div>
                <ErrorMessage
                  name="last_name"
                  component="div"
                  className="text-red-500 text-sm"
                />
                <Field
                  type="text"
                  name="last_name"
                  className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5"
                  placeholder="Last Name *"
                />
              </div>
              <div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
                <Field
                  type="email"
                  name="email"
                  className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5"
                  placeholder="Email Address *"
                />
              </div>
              <div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
                <Field
                  type="password"
                  name="password"
                  className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5"
                  placeholder="Password *"
                />
              </div>
              <div>
                <ErrorMessage
                  name="confirm_password"
                  component="div"
                  className="text-red-500 text-sm"
                />
                <Field
                  type="password"
                  name="confirm_password"
                  className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5"
                  placeholder="Confirm Password *"
                />
              </div>
              <div className="w-96 my-4">
                <Field type="checkbox" name="marketing" />
                <label htmlFor="marketing" className="pl-2">
                  I agree to receive promotions, and other marketing materials
                  via e-mail from{" "}
                  <a href="/" className="text-blue-500">
                    Integrity.com
                  </a>
                </label>
              </div>
              <div className="w-96 mb-4">
                <ErrorMessage
                  name="terms"
                  component="div"
                  className="text-red-500 text-sm"
                />
                <Field type="checkbox" name="terms" />
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
                  disabled={isSubmitting}
                  className="text-white bg-blue-500 hover:bg-blue-400/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center"
                >
                  {isSubmitting ? "Submitting..." : "Sign Up"}
                </button>
              </div>
              {error && (
                <div className="text-red-500 text-sm mt-4">{error}</div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
