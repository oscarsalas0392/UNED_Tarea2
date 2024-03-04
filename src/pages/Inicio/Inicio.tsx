
import './Inicio.scss'
import {  useNavigate } from "react-router-dom";
import { ColorButtons, RutaPagina } from "../../utils/enums";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { iPublicacion, iPublicaciones } from "../../utils/interfaces";
import { Boton, Publicacion } from "../../components";
import { add } from '../../images';



const {addPublicacion,editPublicacion} = RutaPagina;

export const Inicio = () => {

    const navigate = useNavigate();

    const {publicaciones} = useSelector<RootState,iPublicaciones>(state =>state.publicaciones);

    const clickAgregar = ()=>{
        navigate(addPublicacion);
    }

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
