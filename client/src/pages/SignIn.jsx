import { Button, Label, TextInput, Alert } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { signInStart,signInSuccess,signInFailure } from "../redux/user/userSlice";


const SignIn = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const dispatch = useDispatch();
  const {loading, error: errorMessage} = useSelector(state=>state.user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.email || !formData.password){
      return dispatch(signInFailure('Please fill out all the fields'))
    }
    try {
      dispatch(signInStart());
      const res = await fetch("http://localhost:3000/api/auth/signin", {
        // Use full URL for testing
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      if(data.success === false){
        dispatch(signInFailure(data.message));
      }
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      //if sign in successful
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
      console.log(data);
    } catch (err) {
      dispatch(signInFailure(error.message));
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
              SignIn
            </Button>
          </form>
          <div>
            <span>
              Dont Have an account?
              <Link to="/sign-up" className="text-blue-500">
                SignUp
              </Link>
            </span>
          </div>
        <div>
       
          {errorMessage && (
            <Alert className='mt-5 bg-red-200' color='failure'>
               TechGyaan Says: {errorMessage}
            </Alert>
          )}
        </div>
          
        </div>
      </div>
    </div>
  );
}

export default SignIn