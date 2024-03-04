import React, { useEffect } from "react";
import { AgregarPublicacion } from "../../components";
import { useDispatch } from "react-redux";
import { editarTitulo } from "../../store/header/headerSlice";

export const AddPublicacion:React.FC = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(editarTitulo("Agregar"));
},[])

    return (
              <div className="principal_content">
                <AgregarPublicacion agregar={true} />
              </div>
         
    );
  }
  