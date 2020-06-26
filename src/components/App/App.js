import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../Home/Home';
import NotFound from '../elements/NotFound/NotFound';
import Movie from "../Movie/Movie"


const App = () =>{
return(
    <BrowserRouter basename = 'MovieApp'>
        <Switch>
            <Route path = '/' component ={Home} exact />
            <Route path ='/movie/:movieId' component = {Movie} exact /> 
            <Route component = {NotFound}/>   
        </Switch>
    </BrowserRouter>
)
}
 export default App;  



