import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage'
import StarWarsPage from './pages/StarWarsPage'
import GalleryPage from './pages/GalleryPage';
import ContactsPage from './pages/ContactsPage';
import Header from './components/Header/Header'



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/cursor-hw-21/" element={ <HomePage title='Home'/> } />
        <Route path="/contacts/" element={ <ContactsPage title='Contacts' /> } />
        <Route path="/gallery/" element={ <GalleryPage title='Gallery' /> } />
        <Route path="/starwars/" element={ <StarWarsPage title='Star Wars' /> } />
      </Routes>
    </Router>
  );
}

export default App;
