import React from 'react';
import styles from './App.css';
import Logo from './assets/icons/logo.svg'
import Gohan from './assets/img/gohan.jpg'

// const App = ({ title }) => <div className={styles.title}>
//     {title} 
//     <Logo width="50px" height="50px"/>
//     <img src={Gohan}/>
//     </div>;

class App extends React.Component {

    render () {
        return (
            <div className={styles.title}>
                {this.props.title} 
                <Logo width="50px" height="50px"/>
                <img src={Gohan}/>
            </div>
        )
    }
}

export default App;