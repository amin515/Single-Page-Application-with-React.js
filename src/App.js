import AddDevs from "./Components/AdminPanel/Admin/AddDevs";
import Admin from "./Components/AdminPanel/Admin/Admin";
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header";
import Profile from "./Components/Team/Profile/Profile";
import Team from "./Components/Team/Team";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AdminDataView from "./Components/AdminPanel/Admin/AdminDataView";
import EditProfile from "./Components/Team/Profile/EditProfile";

function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
     <Route path='/' element={ <Team /> } />
     <Route path='/Profile/:id' element={ <Profile /> } />
     <Route path='/Admin' element={ <Admin /> } />
     <Route path='/AddDevs' element={ <AddDevs /> } />
     <Route path='/EditProfile/:id' element={ <EditProfile /> } />
    </Routes>
    <Footer />
    </BrowserRouter>
    {/* <AdminDataView /> */}
    </>
    
  );
}

export default App;
