
import './AgregarPublicacion.scss';

import { useDispatch, useSelector } from "react-redux";
import { environmets } from "../../../environments";
import { useForm } from "../../../utils/hooks";
import { iFormPublicacion, iPublicacion, iPublicaciones } from "../../../utils/interfaces";
import { agregarPublicacion, editarPublicacion } from "../../../store/publicacion/publicacionSlice";
import { useNavigate } from 'react-router-dom';
import { RutaPagina } from '../../../utils/enums';
import { RootState } from '../../../store';
import { useEffect, useRef, useState } from 'react';


export type AgregarPublicacionProps =
{
      agregar:boolean,
      codigoPublicacion?:number
}

const  {eTitulo_Agregar_Publicacion,eTitulo_Editar_Publicacion,eTitulo,eDescripcion,eAutor,eArchivo,eAgregar,eEditar} = environmets;

export const AgregarPublicacion:React.FC<AgregarPublicacionProps> = ({agregar,codigoPublicacion}) => {

   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [publicacion,SetPublicacion] = useState<iPublicacion | null>(null);
   const {publicaciones,codigoSeleccionado} = useSelector<RootState,iPublicaciones>(state =>state.publicaciones);
   const [formFields,SetFormFields] = useState<iFormPublicacion>({
      autor: '',
      titulo:  '',
      descripcion:'',
      archivo:'',
      archivoBase64:'',
      extension:''
   });
   const {autor,titulo,descripcion,archivo,archivoBase64,extension, onInputChange, onResetForm} = useForm(formFields);


   useEffect(()=>{
    const publicacion =  publicaciones.find(x=> x.codigo === codigoSeleccionado);
    if(publicacion){
       SetPublicacion(publicacion);
       SetFormFields({
         autor: publicacion ? publicacion.autor : '',
         titulo: publicacion ? publicacion.titulo : '',
         descripcion:publicacion ? publicacion.descripcion :'',
         archivo: '',
         archivoBase64: publicacion ? publicacion.archivo :  '',
         extension: ''
         });
       
    }
   },[codigoSeleccionado])

   useEffect(()=>{
      onResetForm(formFields);
     },[formFields])


     const Submit = (event:any)=>{
         event.preventDefault();
         const date =  new Date();
         const fecha =  `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}` 

         if(publicacion)
         {
            const editPublicacion:iPublicacion = {codigo:publicacion.codigo,autor:autor,titulo:titulo,descripcion:descripcion,archivo:archivoBase64,extension:extension,comentarios:[],fecha };
            dispatch(editarPublicacion(editPublicacion));
         }
         else
         {
            const nuevaPublicacion:iPublicacion = {codigo:0,autor:autor,titulo:titulo,descripcion:descripcion,archivo:archivoBase64,extension:extension,comentarios:[],fecha };
            dispatch(agregarPublicacion(nuevaPublicacion));
         }

         navigate(RutaPagina.inicio);
     }

     const clickInputFile = (event:any)=>{
      event.preventDefault();
      const input:any = document.querySelector(".file");
      input.click();
     }


    return (
     <div className='content_page'>
            <form className='content_form' onSubmit={Submit} >
                  {agregar  ? <h2>{eTitulo_Agregar_Publicacion}</h2> : <h2>{eTitulo_Editar_Publicacion}</h2>} 

                  <img alt='Seleccionar archivo' className='img' src={archivoBase64}/>

                  <div className='content_input'>
                     <label htmlFor="autor" >{eAutor}</label>
                     <input type="text" required value={autor} onChange={onInputChange} name="autor" id="autor" />
                  </div> 

                  <div className='content_input'>
                     <label htmlFor="titulo">{eTitulo}</label>
                     <input type="text" required value={titulo} onChange={onInputChange}  name="titulo"  />
                  </div> 

                  <div className='content_input'>
                     <label htmlFor="descripcion">{eDescripcion}</label>
                     <textarea name="descripcion" value={descripcion} onChange={onInputChange} >
                        {descripcion} 
                     </textarea>
                  
                  </div> 

                  <div className='content_input'>
                     <label htmlFor="archivo">{eArchivo}</label>
                     <div className='inputFile'>
                        <input className='file' type="file" name="archivo" value={archivo} onChange={onInputChange} accept="image/png, image/svg, image/gif, image/jpeg"  />
                        <button onClick={clickInputFile} className='btn_inputFile' >Seleccionar imagen</button>
                     </div>
                  
                  </div>
                  
                  <input className='btn' type="submit" value={(agregar ? eAgregar : eEditar)} />
            </form>
     </div>
       
     
    );
  }
  

 