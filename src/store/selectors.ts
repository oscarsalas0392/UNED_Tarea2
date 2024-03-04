import { useSelector } from "react-redux"
import { store } from "./store"
import { iPublicaciones } from "../utils/interfaces"

export type RootState = ReturnType<typeof store.getState>



