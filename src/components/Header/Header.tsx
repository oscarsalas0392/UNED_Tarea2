import { useSelector } from 'react-redux';
import './Header.scss'
import { RootState } from '../../store';

export const Header:React.FC= () => {

    const {titulo} = useSelector<RootState,any>( (state:any)=> state.header);

    return (
             <header className="content_header">
                <h1 className='tituloP'>{titulo}</h1>
             </header>
    );
  }
  