import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Dashboard from "./pages/Dashboard"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path: "/sign-up",
      element:<SignUp/>
    },
    {
      path:"/sign-in",
      element:<SignIn/>
    },
    {
      path:"/dashboard",
      element:<Dashboard/>
    }
  ]
)

function App() {
  

  return (
    <>
    <RouterProvider router={router} />

     <div>
     <h1 className='text-3xl text-red-900 bg-gray-400 text-center'>TechGyanKosh</h1>
     </div>
    </>
  )
}

export default App
