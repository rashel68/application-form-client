import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import ApplicationForm from "./components/ApplicationForm/ApplicationForm";
import Home from "./components/Home/Home";
import UpdateUser from "./components/UpdateUser/UpdateUser";
import Users from "./components/Users/Users";
import Header from './components/Header/Header';
import SignatureValidator from "./components/SignatureValidator/SignatureValidator";
import AdmitCard from "./components/AdmitCard/AdmitCard";
import PaymentStatus from "./components/PaymentStatus/PaymentStatus";
import Instructions from "./components/Home/Instructions/Instructions";
import Advertisement from "./components/Advertisement/Advertisement";
import AdminRoute from "./components/AdminRoute/AdminRoute";
import Login from "./components/Login/Login";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Applicant from "./components/Applicant/Applicant";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <div>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/adevertisement">
                <Advertisement></Advertisement>
              </Route>
              <Route path="/signature">
                <SignatureValidator></SignatureValidator>
              </Route>
              <Route path="/payment">
                <PaymentStatus></PaymentStatus>
              </Route>
              <Route path="/instruction">
                <Instructions></Instructions>
              </Route>
              <Route path='/admitCard/:id'>
                <AdmitCard></AdmitCard>
              </Route>
              <Route exact path="/users">
                <Users></Users>
              </Route>
              <Route path="/applicationForm">
                <ApplicationForm></ApplicationForm>
              </Route>
              {/* <Route path="/userCollection/update/:id">
                <UpdateUser></UpdateUser>
              </Route>
              <PrivateRoute path="/adminRoute">
                <AdminRoute></AdminRoute>
              </PrivateRoute> */}
              <Route path="/login">
                <Login></Login>
              </Route>
              {/* <PrivateRoute path="/applicant">
                <Applicant></Applicant>
              </PrivateRoute> */}
              <Route path="/adminRoute">
                <AdminRoute></AdminRoute>
              </Route>
              <Route path="/applicant">
                <Applicant></Applicant>
              </Route>
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
