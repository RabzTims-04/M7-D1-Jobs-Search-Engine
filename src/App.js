import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from "./components/Home/Home"
import Details from "./components/Details/Details"
import { BrowserRouter,Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react'

function App() {

  const [searchJobs, setSearchJobs] = useState([])  
  const [searchCompanies, setSearchCompanies] = useState([])

  const jobsData = (value) => {
    setSearchJobs(value)
  }

  const companiesData = (value) => {
    setSearchCompanies(value)
  }
  
  return (
    <BrowserRouter>
    <NavBar/>
      <Route exact path="/" render={(routerProps)=> <Home companies={companiesData} jobs={jobsData} {...routerProps}  />} />
      <Route exact path="/details/:id" render={(routerProps)=> <Details companies={searchCompanies} jobs={searchJobs} {...routerProps}  />} />
    </BrowserRouter>
  );
}

export default App;
