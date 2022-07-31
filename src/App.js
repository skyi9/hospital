
import './App.css';
import CardContainer from './components/CardContainer';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoctorContainer from './components/doctor/DoctorContainer';
import PatientsContainer from './components/patients/PatientsContainer';
import BankContainer from './components/bloodBank/BankContainer';

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<CardContainer />} />
          <Route exact path="/doctor" element={<DoctorContainer />} />
          <Route exact path='/patient' element={<PatientsContainer />} />
          <Route exact path='/bloodbank' element={<BankContainer />} />
        </Routes>

      </Router>
      {/* <DoctorContainer /> */}
    </>
  );
}

export default App;
