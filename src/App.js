import Home from "./pages/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import PersonalCabinet from "./pages/PersonalCabinet/PersonalCabinet";
import PetInfo from "./pages/PetInfo/PetInfo";
import EditProfile from "./pages/EditProfile/EditProfile";
import PetCreation from "./pages/PetCreation/PetCreation";
import EditPet from "./pages/EditPet/EditPet";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/registration" element={<Registration/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/cabinet" element = {<PersonalCabinet/>}></Route>
              <Route path="/pet/info/:searchParameter" element={<PetInfo/>}></Route>
              <Route path="/user/edit" element={<EditProfile/>}></Route>
              <Route path="/pet/add-new-pet" element={<PetCreation/>}></Route>
              <Route path="/pet/edit" element={<EditPet/>}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
