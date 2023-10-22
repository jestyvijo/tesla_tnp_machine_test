import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Firstdiv from './components/Firstdiv';
import Allmodels from './components/Allmodels';
import Cardetails from './components/Cardetails';
export default function Navbars(){
return(
    <>
   <BrowserRouter>
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
 
  <div class="container-fluid">
 
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
     
      <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="tes.png"
          height="25"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
      
      <ul class="navbar-nav mx-5 mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link text-white fs-5" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white fs-5" to="/model">Models</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white fs-5" href="#">Projects</a>
        </li>
      </ul>
    </div>
    <div class="d-flex align-items-center fs-4">
    <i class="fa fa-question-circle" style={{color:"white",margin:"10px"}}></i>
    <i class="fa fa-globe" style={{color:"white",margin:"10px"}}></i>
    <i class="fa fa-user-circle-o" style={{color:"white",margin:"10px"}}></i>
    </div>

  </div>

</nav>
<Routes>
  <Route path="" element={<Firstdiv/>}></Route>
  <Route path="/model" element={<Allmodels itemsPerPage={3}/>}></Route>
  <Route path=":id" element={<Cardetails/>}></Route>
</Routes>
<footer class="bg-light text-center text-lg-start">
  <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2023 Copyright:
    <a class="text-dark" href="https://mdbootstrap.com/">Tesla.com</a>
  </div>
</footer>
</BrowserRouter>
    </>
)
}