import { Link } from "react-router-dom";
import darkElem from "../../assets/images/darkElem.svg";
import laptop from "../../assets/images/laptop.svg";
import lighterElem from "../../assets/images/lighterElem.svg";
import { useState } from "react";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section
      className="bg-offWhite h-screen overflow-y-hidden pt-[20vh]
      md:bg-gradient-to-r from-offWhite from-70% to-bodyPurple to-30% md:pt-0

    "
    >
      <div className="max-sm:pl-4 max-md:pl-4 pl-[7rem]">
        <div className="flex items-center justify-center gap-[3rem] md:gap-[4rem] ">
          <form
            action=""
            method="get"
            className="md:w-[45%] w-[90%]

           flex flex-col gap-4
        "
          >
            <h2 className="font-bold text-center">Welcome Back!</h2>

            <div className="grid gap-2">
              <label
                htmlFor="email address"
                className="text-left text-[0.9rem]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="h-[2.25rem] rounded-3xl border border-borderPurple outline-none px-4 py-2 focus:border-bodyPurple focus:outline-bodyPurple "
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="email address"
                className="text-left text-[0.9rem]"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                className="h-[2.25rem] rounded-3xl border border-borderPurple outline-none px-4 py-2 focus:border-bodyPurple focus:outline-bodyPurple "
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="bg-borderPurple rounded-3xl text-[1.1rem] w-full text-white p-[0.3rem]"
              >
                Login
              </button>
            </div>
            <p>
              Dont have an account?{" "}
              <Link to={"/"} className="hover:text-borderPurple">
                Register
              </Link>
            </p>
          </form>

          <div className="hidden md:flex">
            <img src={laptop} alt="Laptop icon" />
          </div>
        </div>

        <div className="h-1/4  relative -mt-[4rem] -ml-[9rem] hidden md:flex">
          <img src={darkElem} className="" />
          <img src={lighterElem} className="absolute top-2" />
        </div>
      </div>
    </section>
  );
};

export default Login;
