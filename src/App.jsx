import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import styles from './App.css';
import Logo from './assets/icons/logo.svg'
class App extends React.Component {

    
    render () {
        return (
            <React.Fragment>
                <CssBaseline />
                <div className={styles.title}>
                    {this.props.title} 
                    <Logo width="50px" height="50px"/>
                </div>
            </React.Fragment>
        )
    }
}

export default App;