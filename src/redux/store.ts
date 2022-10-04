import { configureStore } from '@reduxjs/toolkit'
import { shazamCoreApi } from './service/shazamCore'
import playerSlice from './features/playerSlice'

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware)
})
