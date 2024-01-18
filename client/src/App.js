import './App.css';
import AboutProduct from './pages/AboutPoduct/AboutProduct';
import Home from "./pages/Home/home";
import Profile from "./pages/profile/Profile"
import {createBrowserRouter,
        RouterProvider,
        Outlet,
      Navigate,
      BrowserRouter,
      Routes,
      Route} from "react-router-dom";
// import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

function App() {
  // const Layout = () => {
  //   return (
  //     <QueryClientProvider>
  //       <>
        
  //       </>
  //     </QueryClientProvider>
  //   )
  //}

  
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
//  <div className="App">
//      {/* <Home/> */}
//      {/* <Profile/> */}
//      <AboutProduct/>
//     </div>