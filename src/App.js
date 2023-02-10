import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component.jsx';
import MainPage from './components/main-page-component/main-page-component';
import Catalog from './routes/catalog-component/catalog';
import About from './routes/about-component/about.component';
import Delivery from './routes/delivery-component/delivery.component';
import Contacts from './routes/contacts-component/contacts.component';
import './App.css';

function App() {
  return (
    <Routes >
      <Route path='/' element={<Navbar />}>
        <Route index element={<MainPage />}/> 
        <Route path='/catalog' element={<Catalog />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/delivery' element={<Delivery />}/>
        <Route path='/contacts' element={<Contacts />}/>
      </Route>
    </Routes>
    
  );
}

export default App;

//need some change
