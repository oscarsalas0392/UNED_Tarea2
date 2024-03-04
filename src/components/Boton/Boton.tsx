import { ColorButtons, PositionButtons } from '../../utils/enums';
import './Boton.scss'

export type BotonProps =
{
      texto?:string,
      color:ColorButtons,
      icono:string,
      click: ()=>void,
      posicion?:PositionButtons

}


export const Boton:React.FC<BotonProps> = ({texto,color,icono,click,posicion}) => {
    return (
               <button className={`btn ${color} ${posicion}`}  onClick={()=>click()}>
                   { icono &&  <img alt="icono" src={icono}/>} 
                   { texto &&  <span>{texto}</span> }
               </button>
    );
  }
  