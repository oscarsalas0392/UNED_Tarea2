import { configureStore } from '@reduxjs/toolkit';
import { publicacionSlice } from './publicacion/publicacionSlice';
import { comentarioSlice } from './comentario/comentarioSlice';

export const store = configureStore({
    reducer: {
        publicaciones:publicacionSlice.reducer,
        comentario:comentarioSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})