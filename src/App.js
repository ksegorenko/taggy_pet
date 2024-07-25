import Home from "./pages/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import PersonalCabinet from "./pages/PersonalCabinet/PersonalCabinet";
import PetInfo from "./pages/PetInfo/PetInfo";
import EditProfile from "./pages/EditProfile/EditProfile";
import PetCreation from "./pages/PetCreation/PetCreation";
import EditPet from "./pages/EditPet/EditPet";
import RemovePassword from "./pages/RemovePassword/RemovePassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import PetTreatment from "./pages/PetTreatment/PetTreatment"


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/registration" element={<Registration/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/user" element = {<PersonalCabinet/>}></Route>
              <Route path="/pet/info" element={<PetInfo/>}></Route>
              <Route path="/user/edit" element={<EditProfile/>}></Route>
              <Route path="/pet/add" element={<PetCreation/>}></Route>
              <Route path="/pet/edit/:petId" element={<EditPet/>}></Route>
              <Route path="/reset-password" element={<RemovePassword/>}></Route>
              <Route path="/reset-password/:resetToken" element={<ResetPassword/>}></Route>
              <Route path="/pet/edit/:petId/treatment" element={<PetTreatment/>}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
