import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Dashboard from "./pages/Dashboard"
import Layout from "./Layout"

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Layout/>,
      children: [
        {
          path: "/",
          element:<Home/>
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path: "sign-up",
          element:<SignUp/>
        },
        {
          path:"sign-in",
          element:<SignIn/>
        },
        {
          path:"dashboard",
          element:<Dashboard/>
        }
      ]
    },
    
  ]
)

function App() {
  

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
