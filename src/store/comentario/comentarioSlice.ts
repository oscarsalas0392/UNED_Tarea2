import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initial =
{
    mostrarForm : false
}

export const comentarioSlice = createSlice({
    name: 'publicacion',
    initialState: initial,
    reducers: {
        editarMostrarForm:  ( state,action: PayloadAction<boolean> ) => {
            state.mostrarForm = action.payload; 
        },
     
}});


// Action creators are generated for each case reducer function
export const { editarMostrarForm} = comentarioSlice.actions;