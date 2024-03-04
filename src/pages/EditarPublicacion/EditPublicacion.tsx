import React, { useEffect } from "react";
import { AgregarPublicacion } from "../../components";
import { editarTitulo } from "../../store/header/headerSlice";
import { useDispatch } from "react-redux";

export const EditPublicacion:React.FC = () => {

   const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(editarTitulo("Editar"));
    },[])
    
    return (
             <div className="principal_content">
                <AgregarPublicacion agregar={false} />
             </div>
    );
  }
  