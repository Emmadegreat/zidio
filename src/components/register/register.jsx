import { Link } from "react-router-dom";
import axios from 'axios'
import badge from "../../assets/images/badge.png";
import facebook from "../../assets/images/facebook.png";
import icon from "../../assets/images/icon.png";
import { useState } from "react";
import whatsapp from "../../assets/images/whatsapp.png";

const Register = () => {
  const [fullname, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("link to backend api/register", {
        fullname,
        username,
        email,
        password,
        confirmPassword
      });
      console.log(response.data);
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <section className="flex justify-around bg-blue-100">
      <section className="w-[45%] hidden md:flex">
        <img
          src={badge}
          alt="page badge"
          className="max-w-[70%] h-[550px] relative top-0 left-16 bottom-0"
        />
      </section>

      <section className="md:w-[45%] w-full flex flex-col items-center text-justify py-16">
        <h5 className="text-center font-semibold text-gray-900 text-[1.1rem] py-4">
          Please Fill out this form to Register
        </h5>
        <form
          action=""
          method="post"
          onSubmit={HandleSubmit}
          className="md:w-[70%] w-[80%]"
        >
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="text-[1.1rem] font-medium">
              Full name
            </label>
            <input
              className="h-[36px] rounded-3xl bg-blue-100 border border-solid border-blue-500 px-4 py-2"
              type="text"
              name="fullname"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="username" className="text-[1.1rem] font-medium">
              Username
            </label>
            <input
              className="h-[36px] rounded-3xl bg-blue-100 border border-solid border-blue-500 px-4 py-2"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-[1.2rem] font-medium">
              email
            </label>
            <input
              className="h-[36px] rounded-3xl bg-blue-100 border border-solid border-blue-500 px-4 py-2"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="text-[1.2rem] font-medium">
              Password
            </label>
            <input
              className="h-[36px] rounded-3xl bg-blue-100 border border-solid border-blue-500 px-4 py-2"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="confirmPassword"
              className="text-[1.2rem] font-medium"
            >
              Confirm Password
            </label>
            <input
              className="h-[36px] rounded-3xl bg-blue-100 border border-solid border-blue-500 px-4 py-2"
              type="password"
              name="confirm_password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="my-4">
            <button
              type="submit"
              className="bg-[#656ed3] rounded-3xl text-[1.1rem] w-full text-white p-[0.3rem]"
            >
              Register
            </button>
          </div>
          <p className="text-center text-[1.2rem] font-medium">
            Yes i have an account,
            <Link to={"/login"} className="hover:text-borderPurple pl-1">
              Login
            </Link>
          </p>
        </form>

        <div className="flex justify-center pt-6">
          <a href="#">
            <img src={facebook} alt="facebook-link" />
          </a>
          <a href="">
            <img src={whatsapp} alt="whatsapp-link" className="px-4" />
          </a>
          <a href="">
            <img src={icon} alt="site link" />
          </a>
        </div>
      </section>
    </section>
  );
};

export default Register;
