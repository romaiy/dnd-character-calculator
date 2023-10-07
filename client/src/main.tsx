import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { MantineProvider } from '@mantine/core'
import RaceStore from './store/RaceStore.ts'

interface State {
  RStore: RaceStore,
}

const RStore = new RaceStore();

export const Context = createContext<State>({
  RStore,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Context.Provider value={{RStore}}>
      <MantineProvider>
        <App />
      </MantineProvider>
    </Context.Provider>
  </React.StrictMode>,
)
