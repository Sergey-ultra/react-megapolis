import React from 'react';
import './App.css';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import {Preloader} from "./components/Preloader";
import {ListContainer} from "./components/ListContainer";
/*import {compose} from "redux";*/
import {connect} from "react-redux";
import {Detail} from "./components/Detail";


//-------стили--------------
import './App.css'
import './components/scss/main.scss';

const App = ({appInitialized}) => {

    return (!appInitialized)
        ? <Preloader/>
        : <BrowserRouter>
            <div className='app-wrapper'>
                <div className="container">
                    <Route exact path='/' render={() => <ListContainer/>}/>
                    <Route exact path='/items/:id' component={Detail}/>
                </div>
            </div>
        </BrowserRouter>
}
const mapStateToProps = (state) => ({
    appInitialized: state.app.appInitialized
});

export default connect(mapStateToProps, {})(App);
