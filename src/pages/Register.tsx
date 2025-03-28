import { useState } from "react";
import { Link } from "react-router-dom";
import register from "../assets/shoeoffice.jpg";

const Register = () => {
  // DECLARE VARIBLES
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // DECLARE FUNCTIONS
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({ "forms ": { userName, email, password } });
  };

  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-8 rounded border border-sky-500 shadow-sm"
        >
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">Mk Footwears</h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">Hey there </h2>
          <p className="text-center mb-6">
            Enter your username email and password to register
          </p>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Username</label>
            <input
              type="text"
              value={userName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setuserName(e.target.value)
              }
              className="input rounded-tr rounded-br focus:border-r-2"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              className="input bg-sky-50 rounded-tr rounded-br focus:border-r-2"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              className="input rounded-tr rounded-br focus:border-r-2"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full  bg-sky-500 text-white py-1.5 rounded transition-all duration-300  hover:shadow-xl hover:scale-105 mb-8 "
          >
            Sign Up
          </button>
          <p className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <Link to="/login" className="!text-sky-500 nav_link">
              Login
            </Link>
          </p>
        </form>
      </div>

      <div className="hidden md:block w-1/2 bg-sky-950 h-230">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={register}
            alt="Register Image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
