import React, { Component } from 'react';
import Pokegame from './Pokegame';
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.refreshPage = this.refreshPage.bind(this);
    }

    refreshPage() {
        window.location.reload();
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className="App">
                <Pokegame />
                <div >
                    <button onClick={this.refreshPage} >Play Next Hand</button>
                </div>
            </div>
        );
    }
}

export default App;