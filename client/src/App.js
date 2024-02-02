import './App.css';
import AboutProduct from './pages/AboutPoduct/AboutProduct';
import Home from "./pages/Home/home";
import Profile from "./pages/profile/Profile"
import {
      Navigate,
      createBrowserRouter,
      RouterProvider,
      Outlet} from "react-router-dom";
import Authentication from "./pages/Authentication/Authentication"
import { useContext } from 'react';
import { Context } from './Context/AuthContext';
 import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
function App() {
 const {current} = useContext(Context);
 
  const queryClient = new QueryClient();

const Layout = () => {
  return (
    <QueryClientProvider client={queryClient}>
<Outlet/>
</QueryClientProvider>
  )

}
const ProtectedRoute = ({children}) => {
  if (!current) {
    return <Navigate to = "/Authentication" />
  }
  return children;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile/:id",
        element: <Profile/>,
      },
    ]
  },
  {
    path: "/Authentication",
    element: <Authentication/>
  },
  {
    path: "/product",
    element: <AboutProduct/>,
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
  // <RouterProvider router = {router} />
  <RouterProvider router={router}/>
  );
}

export default App;
