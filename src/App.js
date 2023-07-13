
import './App.css';
import { Routes, Route} from 'react-router-dom'
import Service from './Component/Service'
import Issue from './Component/Issue';
import Single from './Component/Single';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Service/>} />
        <Route path='/issuepage/:hospital' element={<Issue/>}/>
        <Route path='/image/:id' element={<Single/>}/>
      </Routes>
    </div>
  );
}

export default App;
