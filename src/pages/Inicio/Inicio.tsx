
import './Inicio.scss'
import {  useNavigate } from "react-router-dom";
import { ColorButtons, RutaPagina } from "../../utils/enums";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { iPublicacion, iPublicaciones } from "../../utils/interfaces";
import { Boton, Publicacion } from "../../components";
import { add } from '../../images';
import { useEffect } from 'react';
import { editarTitulo } from '../../store/header/headerSlice';



const {addPublicacion,editPublicacion} = RutaPagina;

export const Inicio = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {publicaciones} = useSelector<RootState,iPublicaciones>(state =>state.publicaciones);

    const clickAgregar = ()=>{
        navigate(addPublicacion);
    }

    useEffect(()=>{
        dispatch(editarTitulo("Publicaciones"));
    },[])

    return (
        <div className="content_inicio">
                <div className="content_publicaciones">
                        <div className='publicaciones'>
                                <div className='content_btn'>
                                        <Boton texto='Agregar'icono={add} color={ColorButtons.primary} click={clickAgregar} />
                                </div>
                                <div className='content_all_publicaciones'>
                                       {
                                                
                                                publicaciones.map((publicacion:iPublicacion)=>(
                                                <Publicacion key={publicacion.codigo} publicacion={publicacion} />
                                                ))
                                        }
                                </div>
                         
                        </div>
                </div>
                <div className="content_anuncios">
                 
                </div>
        </div>
         
    );
  }
