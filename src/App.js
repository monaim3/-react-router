
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Nomatch from './Component/Nomatch/Nomatch';
import TeamDeatils from './Component/TeamDeatils/TeamDeatils';

function App() {


  return (
    
       <Router>
         <Switch>
           <Route path="/home">
             <Home></Home>
           </Route>
           <Route exact path="/">
           <Home> </Home>
           </Route>
           
           <Route path ="/Team/:idTeam">
             <TeamDeatils></TeamDeatils>
           </Route>
           <Route path="*">
              <Nomatch></Nomatch>
           </Route>
         </Switch>
       </Router>
    
    
  );
}

export default App;
