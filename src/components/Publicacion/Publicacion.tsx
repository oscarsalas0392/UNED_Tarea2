import { Boton } from '../Boton/Boton';
import './Publicacion.scss'
import { Inicio } from '../../pages/Inicio/Inicio';
import { add, chat, edit } from '../../images';
import { ColorButtons, PositionButtons, RutaPagina } from '../../utils/enums';
import { useDispatch, useSelector } from 'react-redux';
import { actualizarCodigoSeleccionado, agregarComentario } from '../../store/publicacion/publicacionSlice';
import { useNavigate } from 'react-router-dom';
import { iPublicacion } from '../../utils/interfaces';
import { Comentario } from '../Comentario/Comentario';
import { iComentario } from '../../utils/interfaces/interfaces';
import { useEffect, useState } from 'react';
import { AgregarComentario } from '../Formulario/AgregarComentario/AgregarComentario';
import { RootState } from '../../store';

export type PublicacionProps =
{
    publicacion:iPublicacion
}


export const Publicacion:React.FC<PublicacionProps> = ({publicacion}) => {
   
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [mostrarForm,setMostrarForm] = useState<boolean>();

    const {codigo,autor, titulo,archivo,descripcion,fecha,comentarios} = publicacion;

    const clickEdit = ()=>{
        dispatch(actualizarCodigoSeleccionado(codigo));
        navigate(RutaPagina.editPublicacion);
    }
    const clickChat = ()=>{
       const content =  document.querySelector(".content_comentarios");
       content?.classList.toggle("show");
    }
    const clickAddChat = ()=>{
        mostrarForm ? setMostrarForm(false) : setMostrarForm(true); 
    }

    const close = ()=>{
        setMostrarForm(false);
    }

    return (
            <div className="content_publicacion">
                <div className='publicacion'>
                    <Boton icono={edit} click={clickEdit} posicion={PositionButtons.top} color={ColorButtons.gray}  />
                    <h2 className='autor'>{autor}</h2>
                    <h3 className='titulo'>{titulo}</h3>
                    {archivo && <img className='imagen' src={archivo} alt="imagen" /> }
                    <p className='descripcion'>{descripcion}</p>
                    <p className='fecha'>{fecha}</p>
                    <Boton icono={chat} click={clickChat} posicion={PositionButtons.bottom} color={ColorButtons.gray}   />
                </div>
              
                    <div className='content_comentarios'>
                    <h2 className='comentarios'>Comentarios</h2>
                    <Boton icono={add}  click={clickAddChat}  color={ColorButtons.primary} posicion={PositionButtons.top}  />
                    {
                        mostrarForm && <AgregarComentario close={close} codigoPublicacion={codigo} />
                    }
                    {
                        comentarios.map((comentario:iComentario)=>(
                                <Comentario key={comentario.codigo} pComentario={comentario} />
                        ))
                    }
                    </div>
                
            </div>
    );
  }
  