import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Mapdemo from './Mapdemo';
import Props from './Props';
import Counter from './Counter';
import Componentmount from './Componentmount';
import Componentupdate from './Componentupdate';
import Demousestate from './Demousestate';
import Formcomp from './components/Formcomp';
import Promisedemo from './components/Promisedemo';
import { createContext } from 'react';
import ChildA from './components/ChildA';
const mydata=createContext()
const data1=createContext()
function App() {
  return (
    <div className="App">
     <h1>hello</h1> 
     {/* <Header></Header>
     <Navbar></Navbar>
     <Mapdemo></Mapdemo>
     <Props name="joe"></Props>
     <Counter></Counter>
     <Componentmount></Componentmount>
     <Componentupdate></Componentupdate>
     <Demousestate></Demousestate>
     <Formcomp></Formcomp> */}
     <mydata.Provider value={"vtech"}>
      <data1.Provider value={"ddg"}>
        
      </data1.Provider>
      <ChildA></ChildA>
     </mydata.Provider>
     <Promisedemo></Promisedemo>
    </div>
  );
}
export default App;
export {mydata}
