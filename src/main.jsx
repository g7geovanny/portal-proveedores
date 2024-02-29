import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import Inicio from "./routes/Inicio";
import Prevaloracion from "./routes/Prevaloracion";
import AltaProveedor from "./routes/AltaProveedor";
import Precalificacion from "./routes/PreCalificacion";
import Plataformas from "./routes/Plataformas";


import {createBrowserRouter,RouterProvider,} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>,
  },

  {
    path: "/prevaloracion",
    element: <Prevaloracion/>
  },

  {
    path: "/altaproveedor",
    element: <AltaProveedor/>
  },

  {
    path: "/precalificacion",
    element: <Precalificacion/>
  },

  {
    path: "/plataformas",
    element: <Plataformas/>
  },


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
  
)

