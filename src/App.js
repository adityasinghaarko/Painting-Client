import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NavigationBar from './Components/SharedComponents/NavigationBar/NavigationBar';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AddService from './Components/AddService/AddService';
import AddAdmin from './Components/AddAdmin/AddAdmin';
import Sidebar from './Components/SharedComponents/Sidebar/Sidebar';
import Footer from './Components/SharedComponents/Footer/Footer';
import ManageServices from './Components/ManageServices/ManageServices';
import AddReview from './Components/AddReview/AddReview';
import MyBookings from './Components/MyBookings/MyBookings';
import Book from './Components/Book/Book';


export const UserContext = createContext()

function App() {
  const [signedInUser, setSignedInUser] = useState({isAdmin: false});
  return (
    <UserContext.Provider value={[signedInUser, setSignedInUser]}>
      <Router>
        <NavigationBar></NavigationBar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard">
            <div className="row">
              <Sidebar></Sidebar>
              <Footer></Footer>
            </div>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/manageServices">
            <ManageServices></ManageServices>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/book/:serviceId">
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/myBookings">
            <MyBookings></MyBookings>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addReview">
            <AddReview></AddReview>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
