import './App.css';
import AboutProduct from './pages/AboutPoduct/AboutProduct';
import Home from "./pages/Home/home";
import Profile from "./pages/profile/Profile"
import {
      Navigate,
      BrowserRouter as Router,
      Routes,
      Route,
      Outlet} from "react-router-dom";
import Authentication from "./pages/Authentication/Authentication"
import { useContext } from 'react';
import { Context} from './Context/AuthContext';
 import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
function App() {
 const {current} = useContext(Context);
 
  const queryClient = new QueryClient();

const Layout = () => {
  return (
<Outlet/>
  )

}
const ProtectedRoute = ({children}) => {
  if (!current) {
    return <Navigate to = "/Authentication" />
  }
  return children;
}
 
  return (
  
  <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route 
        path='/'
        element = {
          <ProtectedRoute>
            <Layout/>
          </ProtectedRoute>
        }
        />

        <Route path = '/' element = {<Home/>} />
        <Route path='/profile/:id' element = {<Profile/>} />
        <Route path='/Authentication' element = {<Authentication/>} />
        <Route path = '/product' element = {<AboutProduct/>} />
        
      </Routes>
    </Router>
</QueryClientProvider>
  );
}

export default App;
