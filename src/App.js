import { createBrowserRouter } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home';
import Seladoras from './Pages/Seladoras';
import Relogios from './Pages/Relógio_de_Ponto';
import Datadores from './Pages/Datadores';
import Contadoras from './Pages/Contadoras';
import Dosadoras from './Pages/Dosadoras';
import Empacotar from './Pages/Empacotar';
import Envasadoras from './Pages/Envasadoras';
import Encapsular from './Pages/Encapsular';
import Embalagens from './Pages/Embalagens';
import Suprimentos from './Pages/Suprimentos';
import Novidades from './Pages/Novidades';
import Outlet from './Pages/Outlet';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/seladoras',
    element: <Seladoras/>
  },
  {
    path: '/relogio',
    element: <Relogios/>
  },
  {
    path: '/datadores',
    element: <Datadores/>
  },
  {
    path: '/contadoras',
    element: <Contadoras/>
  },
  {
    path: '/dosadoras',
    element: <Dosadoras/>
  },
  {
    path: '/empacotar',
    element: <Empacotar/>
  },
  {
    path: '/envasadoras',
    element: <Envasadoras/>
  },
  {
    path: '/encapsular',
    element: <Encapsular/>
  },
  {
    path: '/embalagens',
    element: <Embalagens/>
  },
  {
    path: '/suprimentos',
    element: <Suprimentos/>
  },
  {
    path: '/novidades',
    element: <Novidades/>
  },
  {
    path: '/outlet',
    element: <Outlet/>
  }
])
   
export { router };