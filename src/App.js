import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

//import Main from './components/Main';

//function App() {
//  return (
		//  <div>
    //      <Header />
  //        <Sidebar />
//          <Main />
//          <Footer />
//    </div>
//  );
//}

function App() {
    return (
        <div>
            <Header />
            <Sidebar />
            <Footer />
        </div>
    );
}

export default App;
