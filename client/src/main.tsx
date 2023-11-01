import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { MantineProvider } from '@mantine/core'
import RaceStore from './store/RaceStore.ts'
import { ClassesStore } from './store/ClassesStore.ts'
import { CharactersStore } from './store/CharactersStore.ts'

interface State {
  RStore: RaceStore,
  CStore: ClassesStore,
  ChStore: CharactersStore,
}

const RStore = new RaceStore();
const CStore = new ClassesStore();
const ChStore = new CharactersStore();

export const Context = createContext<State>({
  RStore,
  CStore,
  ChStore,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Context.Provider value={{RStore, CStore, ChStore}}>
      <MantineProvider
      theme={{
        globalStyles: (theme) => ({
          '.button': {
            width: '209px',
            height: '56px',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
            backgroundColor: theme.colors.indigo[7],
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: theme.colors.indigo[9],
            }
          },
          '.buttonOutline': {
            width: '209px',
            height: '56px',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
            backgroundColor: theme.colors.gray[1],
            borderRadius: '8px',
            color: theme.colors.indigo[9],
            '&:hover': {
              border: '2px solid #4263eb',
              backgroundColor: theme.colors.gray[1],
            }
          },
          '.input': {
            input: {
              height: '56px',
              width: '370px',
              borderRadius: '8px',
              padding: '12px',
              fontSize: '16px',
              lineHeight: '24px',
            },
            label: {
              marginBottom: '6px',
              fontSize: '16px',
              lineHeight: '22px'
            },
            div: {
              fontSize: '14px',
              lineHeight: '22px',
              width: 'fit-content',
            }
          },
          '.rangeInput': {
            label: {
              marginBottom: '6px',
              fontSize: '16px',
              lineHeight: '22px'
            },
          },
          '.radio': {
            label: {
              paddingLeft: '8px',
              fontSize: '16px'
            },
            div: {
              fontSize: '16px',
              lineHeight: '22px',
              
            }
          },
          '.mantine-RadioGroup-label': {
            marginBottom: '12px'
          },
          '.mantine-Select-dropdown': {
            div: {
              width: 'auto'
            }
          },
          '.mantine-Input-rightSection': {
            svg: {
              marginRight: '12px'
            }
          },
          '.textInput': {
            input: {
              height: '56px',
              width: '450px',
              borderRadius: '8px',
              padding: '12px',
              fontSize: '16px',
              lineHeight: '24px',
            },
            label: {
                marginBottom: '6px',
                fontSize: '16px',
                lineHeight: '22px'
            },
            div: {
              fontSize: '14px',
              lineHeight: '22px'
            }
          }
        })
      }}
      >
        <App />
      </MantineProvider>
    </Context.Provider>
  </React.StrictMode>,
)
