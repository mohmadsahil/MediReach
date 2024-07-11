import { Home } from './Screens/Home/Home.jsx';
import {BrowserRouter,Route, Routes} from "react-router-dom" 
import { Login } from './Screens/Login/Login.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
