import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import User from "../../../api/models/user.model";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        // Use full URL for testing
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      if(res.ok){
        navigate('/sign-in');
      }
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error("Error:", err);
    }
  };
  
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10">
        {/* left */}
        <div>
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-teal-400 to-sky-400 rounded-lg">
              TechGyaan
            </span>
          </Link>
        </div>
        {/* right */}
        <div>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your Username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="Email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              className="bg-gradient-to-r from-teal-400 to-sky-400 w-32 m-8 p-1 justify-center"
              type="submit"
            >
              SignUp
            </Button>
          </form>
          <div>
            <span>
              Have an account?
              <Link to="/sign-in" className="text-blue-500">
                SignIn
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
