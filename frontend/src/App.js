import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addcontact from './components/Addcontact';
import Nav from './components/Nav';
import Contacts from './components/Contacts';
import Updatecontact from './components/Updatecontact';
function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
          <Nav/>
        </div>
      <Routes>
        <Route path='/' element={<Contacts/>} />
        <Route path='/add-contact' element={<Addcontact/>} />
        <Route path='/update-contact/:id' element={<Updatecontact/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
