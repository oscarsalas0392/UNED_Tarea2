import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initial =
{
    titulo : "Publicaciones"
}

export const headerSlice = createSlice({
    name: 'header',
    initialState: initial,
    reducers: {
        editarTitulo:  ( state,action: PayloadAction<string> ) => {
            state.titulo = action.payload; 
        },
     
}});


// Action creators are generated for each case reducer function
export const { editarTitulo} = headerSlice.actions;