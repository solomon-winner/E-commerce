import './App.css';
import AboutProduct from './pages/AboutPoduct/AboutProduct';
import Home from "./pages/Home/home";
import Profile from "./pages/profile/Profile"
import {
      BrowserRouter,
      Routes,
      Route,
      Navigate,
      createBrowserRouter} from "react-router-dom";
import Authentication from "./pages/Authentication/Authentication"
import { useContext } from 'react';
import { Context } from './Context/AuthContext';
// import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
function App() {
 const {current} = useContext(Context);
 
//  const queryClient = new QueryClient();

const ProtectedRoute = ({children}) => {
  if (!current) {
    return <Navigate to = "/login" />
  }
  return children;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>

      </ProtectedRoute>
    ),
    children: []
  }
])
  
  return (
  //  <BrowserRouter>
  //  <Routes>
  //   <Route path='/' element = {<Home/>}/>
  //   <Route path='/product' element = {<AboutProduct/>}/>
  //   <Route path = '/profile' element = {<Profile/>}/>
  //  </Routes>
  //  </BrowserRouter>
  <Authentication/>

  );
}

export default App;
