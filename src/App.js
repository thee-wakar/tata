import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import Home from './home';
import Services from './services';
import Careers from './careers';
import About from './about';
import Contact from './contact';
import Webservice from './webservice';
import Appmore from './appmore';
import Cyberservice from './cyberservice';
import Dataservice from './dataservices';
import Cloudservice from './clouservices';
import Threedservice from './threedservice';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="home/" element={<Home />} />
          <Route path='services/' element={<Services />} />
          <Route path='careers/' element={<Careers />} />
          <Route path='about/' element={<About />} />
          <Route path='contact/' element={<Contact />} />
          <Route path='webservice/' element={<Webservice />} />
          <Route path='appmore' element={<Appmore />} />
          <Route path='cyberservice/' element={<Cyberservice />} />
          <Route path='dataservice/' element={<Dataservice />} />
          <Route path='cloudservice' element={<Cloudservice />} />
          <Route path='threedservice' element={<Threedservice />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
