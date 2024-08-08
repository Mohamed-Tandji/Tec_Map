import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import Friend from "./pages/Friends"
import Users from "./pages/Users"
import ChangeMe from "./pages/ChangeMe"
import Me from "./pages/Me"
import IndexPage from "./pages/IndexPage"



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Login />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/menu' element={<IndexPage />} />
          <Route path='auth/register' element={<Register />} />
         <Route path="/friends" element={<Friend/>} />
          <Route path='users' element={<Users />} />
          <Route path='me/update' element={<ChangeMe />} />
          <Route path='/me' element={<Me />} />

        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App