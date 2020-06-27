import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'
import Home from '../Home/Home';
import NotFound from '../elements/NotFound/NotFound';
import Movie from "../Movie/Movie"


const App = () =>{
return(
    <HashRouter basename = 'MovieApp'>
        <Switch>
            <Route path = '/' component ={Home} exact />
            <Route path ='/movie/:movieId' component = {Movie} exact /> 
            <Route component = {NotFound}/>   
        </Switch>
    </HashRouter>
)
}
 export default App;  



