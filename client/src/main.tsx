import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { MantineProvider } from '@mantine/core'
import RaceStore from './store/RaceStore.ts'
import { ClassesStore } from './store/ClassesStore.ts'

interface State {
  RStore: RaceStore,
  CStore: ClassesStore,
}

const RStore = new RaceStore();
const CStore = new ClassesStore();

export const Context = createContext<State>({
  RStore,
  CStore,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Context.Provider value={{RStore, CStore}}>
      <MantineProvider>
        <App />
      </MantineProvider>
    </Context.Provider>
  </React.StrictMode>,
)
