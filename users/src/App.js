import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import  {BrowserRouter,Route,Routes} from 'react-router-dom';
import CreateUser from './CreateUser';
import UserDetail from './UserDetail';
import EditUser from './EditUser';
function App() {
  return (
    <div className="App">
      <h2>CRUD Operation Using React Test Project</h2>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserList/>}> </Route>
        <Route path='/users/create' element={<CreateUser/>}> </Route>
        <Route path='/users/detail/:userid' element={<UserDetail/>}> </Route>
        <Route path='/users/update/:userid' element={<EditUser/>}> </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
