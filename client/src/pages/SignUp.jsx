import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { Form } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10">
        {/* left */}
        <div className="">
        <Link to="/" className='font-bold dark:text-white text-4xl'>
                <span className='px-2 py-1 bg-gradient-to-r from-teal-400 to-sky-400 rounded-lg'>TechGyaan</span>
        </Link>
        </div>
        {/* right */}
        <div className="">
          <form>
            <div>
            <Label value="Your Username"/>
            <TextInput
            type="text"
            placeholder="Username"
            id="username"/>
            </div>
            <div>
            <Label value="Your Email"/>
            <TextInput
            type="text"
            placeholder="Email"
            id="email"/>
            </div>
            <div>
            <Label value="Your Password"/>
            <TextInput
            type="text"
            placeholder="Password"
            id="password"/>
            </div>
            <Button className="bg-gradient-to-r from-teal-400 to-sky-400 w-32 m-8 p-1 justify-center" type="submit">
            SignUp  
            </Button>
          </form>
          <div>
            <span>
              Have an account? 
              <Link to='/sign-in' className="text-blue-500">
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
