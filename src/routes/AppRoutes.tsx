import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddPublicacion, EditPublicacion, Inicio } from "../pages";
import { RutaPagina } from "../utils/enums";

const {inicio,addPublicacion,editPublicacion} = RutaPagina;

export const AppRoutes:React.FC = () => {
    return (
        <Routes>
            <Route path={editPublicacion} Component={EditPublicacion}  />
            <Route path={addPublicacion} Component={AddPublicacion} />
            <Route path={inicio} Component={Inicio} />
        </Routes>
    );
  }
  