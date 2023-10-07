import AppRouter from "./components/AppRouter";
import { BrowserRouter } from 'react-router-dom';
import './styles/reset.css';


const App = () => {

  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App
