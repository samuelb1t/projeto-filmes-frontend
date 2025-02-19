 import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
 import Login from "../pages/login";
 import Home from "../pages/home";
 import Profile from "../pages/profile";

 const appRoutes = () =>{
     return(
         <Router>
             <Routes>
                 <Route path="/login" element={<Login/>}></Route>
                 <Route path="/home" element={<Home/>}></Route>
                 <Route path="/profile" element={<Profile/>}></Route>
                 <Route path="/" element={<Navigate to="/login" />}></Route>
             </Routes>
         </Router>
     )
 }

 export default appRoutes;
