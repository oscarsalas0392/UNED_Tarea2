
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Inicio } from './pages';
import { Provider } from "react-redux"
import { store } from './store';
import { AppRoutes } from './routes/AppRoutes';
import { Footer, Header } from './components';

function App() {
  return (
   <Provider store={store}>
    <Header/>
     <Router>
        <AppRoutes/>
     </Router>
     <Footer />
   </Provider>
  );
}

export default App;
