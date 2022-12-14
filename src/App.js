/* import logo from './logo.svg';
import './App.css';
import ImportExport from './Components/ImportExport';
import { anotherVar, anotherVar1, AnotherImportExport} from './Components/ImportExport';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <ImportExport />
      {anotherVar}
      {anotherVar1}
      {AnotherImportExport()}
    </div>
  );
} */
import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/CLayout';
import Home from "./pages/Home";
import UserForm from "./pages/UserForm";
import UserList from "./pages/UserListData";
import NoPage from './pages/NoPageData';
import ArrayExample from './pages/ArrayExample';
import ExpensePage from './pages/ExpensePage';
import CourseGoal from './pages/CourseGoal';
import LifeCycleExample from './pages/LifeCycleExample';

function App(){
 return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="/user-form" element={<UserForm />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/array-example" element={<ArrayExample />} />
        <Route path="/expense-item" element={<ExpensePage />} />
        <Route path="/courses" element={<CourseGoal />} />
        <Route path="/life-cycle" element={<LifeCycleExample/>} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
 );

}

export default App;
