import UserList from './pages/UserList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Heading } from './pages/Emotion';
/** @jsxImportSource @emotion/react */


function App() {
  return (

    <div css={css` 
    text-align: center;
  `}>
      <Heading bg="#008f68" fg="#fae042" pad="0px" mar="0px" hei="50px" >CRUD Operation Test Project</Heading>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList />}> </Route>
          <Route path='/users/create' element={<CreateUser />}> </Route>
          <Route path='/users/update/:userid' element={<EditUser />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
