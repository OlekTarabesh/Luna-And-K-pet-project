import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import Catalog from './routes/catalog-component/catalog';
import About from './routes/about-component/about.component';
import Delivery from './routes/delivery-component/delivery.component';
import Contacts from './routes/contacts-component/contacts.component';
import './App.css';

function App() {
  return (
    <Routes >
      <Route path='/' element={<Header />}/>
      <Route path='/catalog' element={<Catalog />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/delivery' element={<Delivery />}/>
      <Route path='/contacts' element={<Contacts />}/>
    </Routes>
    
  );
}

export default App;

//need some change
