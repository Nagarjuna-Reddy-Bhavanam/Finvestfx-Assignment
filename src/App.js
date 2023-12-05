import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Menu from './Menu';
import CreateMenu from './CreateMenu';
import UpdateMenu
  from './UpdateMenu';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu />}></Route>
          <Route path='/create' element={<CreateMenu />}></Route>
           <Route path='/update/:id' element={<UpdateMenu/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
