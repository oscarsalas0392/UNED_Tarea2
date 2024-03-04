
import './Comentario.scss'
import { iComentario } from "../../utils/interfaces";


export type ComentarioProps =
{
      pComentario:iComentario
}
export const Comentario:React.FC<ComentarioProps>= ({pComentario}) => {
   
    const {autor,comentario} = pComentario;

    return (
            <div className="content_comentario">
                <p className='autor'>{autor}</p>
                <p className='comentario'>{comentario}</p>
            </div>
    );
  }
  