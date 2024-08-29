import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import './Navebar.css'

const Navebar = () =>{
  const [search, Setseacrh] = useState("")
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return

    navigate (`/search?q=${search}`)
    Setseacrh("")
  } 

    return(
    <nav id="navbar">
        <h2>
          <Link to="/"><BiCameraMovie/>LumiFlix</Link>
        </h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Busque por um filme' onChange={e => Setseacrh(e.target.value)} value={search}/>
            <button type='submit'><BiSearchAlt2/></button>
        </form>
      </nav>
    );
};

export default Navebar;