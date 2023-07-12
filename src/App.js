
import './App.css';
import { Routes, Route} from 'react-router-dom'
import Service from './Component/Service'
import Issue from './Component/Issue';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Service/>} />
        <Route path='/issuepage/:hospital' element={<Issue/>}/>
      </Routes>
    </div>
  );
}

export default App;
