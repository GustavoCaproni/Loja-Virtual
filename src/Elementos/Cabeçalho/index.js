import React from 'react';
import './Cabeçalho.css';
import Logo from '../Imagens/Logo.jpeg'
import { Link } from 'react-router-dom';

function Cabeçalho(){
    return(
        <div className='index'>

            <Link to="/">
              <img className='logo' src={Logo}/>
            </Link>

            <div className='lista1'>

            <ul>
              <Link to="/seladoras"> 
                <li>Seladoras</li>
              </Link>

              <Link to="/relogio">
                <li>Relógio De Ponto</li>
              </Link>

              <Link to="/datadores">
                <li>Datadores</li>
              </Link>

              <Link to="/contadoras">
                <li>Contadoras</li>
              </Link>

              <Link to="/dosadoras">
                <li>Dosadoras</li>
              </Link>  

              <Link to="/empacotar">
                <li>Empacotar</li>
              </Link>

              <Link to="/envasadoras">
                <li>Envasadoras</li>
              </Link>

              <Link to="/encapsular">
                <li>Encapsular</li>
              </Link>

              <Link to="/embalagens">
                <li>Embalagens</li>
              </Link>

              <Link to="/suprimentos">
                <li>Suprimentos</li>
              </Link>

              <Link to="/novidades">
                <li>Novidades</li>
              </Link>

              <Link to="/outlet">
                <li>Outlet</li>
              </Link>

            </ul>

            </div>
        
        </div>
    )
}

export default Cabeçalho;