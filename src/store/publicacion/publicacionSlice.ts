import { iComentario } from './../../utils/interfaces/interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { iPublicacion, iPublicaciones } from '../../utils/interfaces';


const initial : iPublicaciones =
{
    publicaciones: [],
    codigo: 0,
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
            comentario.codigo = comentario.fecha+codigoPublicacion.toString();
            state.publicaciones[codigoPublicacion].comentarios.push(comentario);
        },
        actualizarCodigoSeleccionado:  ( state,action: PayloadAction<number> ) => {
            state.codigoSeleccionado = action.payload;
        },
}});


// Action creators are generated for each case reducer function
export const { agregarPublicacion,agregarComentario,actualizarCodigoSeleccionado,editarPublicacion} = publicacionSlice.actions;