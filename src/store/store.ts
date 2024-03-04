import { configureStore } from '@reduxjs/toolkit';
import { publicacionSlice } from './publicacion/publicacionSlice';
import { headerSlice } from './header/headerSlice';

export const store = configureStore({
    reducer: {
        publicaciones:publicacionSlice.reducer,
        header:headerSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})