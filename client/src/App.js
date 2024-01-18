import './App.css';
import AboutProduct from './pages/AboutPoduct/AboutProduct';
import Home from "./pages/Home/home";
import Profile from "./pages/profile/Profile"
import {
      BrowserRouter,
      Routes,
      Route} from "react-router-dom";

function App() {
 
  
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/product' element = {<AboutProduct/>}/>
    <Route path = '/profile' element = {<Profile/>}/>
   </Routes>
   </BrowserRouter>

  );
}

export default App;
