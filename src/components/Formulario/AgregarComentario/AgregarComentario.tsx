import './AgregarComentario.scss'

import { useState } from "react";
import { environmets } from "../../../environments";
import { useForm } from "../../../utils/hooks";
import { iComentario, iFormComentario } from "../../../utils/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { agregarComentario } from "../../../store/publicacion/publicacionSlice";


export type AgregarComentarioProps =
{
    codigoPublicacion:number,
    close: ()=> void
}

export const AgregarComentario:React.FC<AgregarComentarioProps> = ({codigoPublicacion,close}) => {

    const  {eDescripcion,eAutor,eAgregar} = environmets;
    const  dispatch = useDispatch();

   
    const [formFields,SetFormFields] = useState<iFormComentario>({
       autor: '',
       descripcion:'',
    });

    const {autor,descripcion,onInputChange} = useForm(formFields);

    const Submit = (event:any)=>{
        event.preventDefault();
        const date =  new Date();
        const fecha =  `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}` 
        const comentario:iComentario = { autor:autor,comentario:descripcion, fecha:fecha, codigo:"" }
        dispatch(agregarComentario({codigoPublicacion,comentario}));
        close();
    }
 
 
     return (
             <form className='content_form comentarios' onSubmit={(event:any)=>Submit(event)} >
                   <div className='content_input'>
                      <label htmlFor="autor" >{eAutor}</label>
                      <input type="text" required value={autor} onChange={onInputChange} name="autor" id="autor" />
                   </div> 

                   <div className='content_input'>
                      <label htmlFor="descripcion">{eDescripcion}</label>
                      <input type="text" required value={descripcion} onChange={onInputChange}   name="descripcion"   />
                   </div> 
 
                   <input className='btn' type="submit" value={eAgregar} />
             </form>
 
        
      
     );
   }
   
 
  