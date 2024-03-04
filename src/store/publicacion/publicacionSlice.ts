import { iComentario } from './../../utils/interfaces/interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { iPublicacion, iPublicaciones } from '../../utils/interfaces';


const initial : iPublicaciones =
{
    publicaciones: [
        {
            codigo:0,
            autor:"Oscar Salas Miranda",
            titulo:"React UseState",
            descripcion:"El useState es un Hook (hablaremos de lo que esto significa en un momento). Lo llamamos dentro de un componente de función para agregarle un estado local. React mantendrá este estado entre re-renderizados. useState devuelve un par: el valor de estado actual y una función que le permite actualizarlo. Puedes llamar a esta función desde un controlador de eventos o desde otro lugar.",
            archivo:"data:image/png;base64,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",
            extension:"",
            fecha:"3/3/2024",
            comentarios: [{
                codigo:"3/3/20241",
                autor:"Oscar Salas Miranda",
                comentario:"Excelente aporte, el useState es uno de los hook mas utilizados en react.",
                fecha:"3/3/2024"
            }],
        },

    ],
    codigo: 1,
    codigoSeleccionado:-1,
}

export const publicacionSlice = createSlice({
    name: 'publicacion',
    initialState: initial,
    reducers: {
        agregarPublicacion:  ( state,action: PayloadAction<iPublicacion> ) => {
            const publicacion:iPublicacion = action.payload;
            publicacion.codigo = state.codigo;
            state.publicaciones.push(publicacion);
            state.codigo = state.codigo + 1; 
        },
        editarPublicacion:  ( state,action: PayloadAction<iPublicacion> ) => {
            const publicacion:iPublicacion = action.payload;
            state.publicaciones[publicacion.codigo] = publicacion;
         
           
        },
        agregarComentario:  ( state,action: PayloadAction<{codigoPublicacion:number,comentario:iComentario }> ) => {
            const {codigoPublicacion,comentario} = action.payload;
            comentario.codigo = Date.now()+codigoPublicacion.toString();
            state.publicaciones[codigoPublicacion].comentarios.push(comentario);
        },
        actualizarCodigoSeleccionado:  ( state,action: PayloadAction<number> ) => {
            state.codigoSeleccionado = action.payload;
        },
}});


// Action creators are generated for each case reducer function
export const { agregarPublicacion,agregarComentario,actualizarCodigoSeleccionado,editarPublicacion} = publicacionSlice.actions;