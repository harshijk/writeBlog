import { Route , Routes } from "react-router-dom"
import { HomePage,CreatePost,PageNotFound } from "../pages"
import { ProtectedRoutes } from "./ProtectedRoutes"

export const Allrouter = () => {
  return (
    <Routes >
        <Route path="/" element ={<HomePage />} />
        <Route path='create' element={<ProtectedRoutes><CreatePost/></ProtectedRoutes>}/>
        <Route path='*' element={<PageNotFound/>} />
    </Routes>
  )
}
