import { useState } from 'react';  
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';


export interface FState{
  friends:{
    id:number,
    name:string,
    age:number,
    url:string,
    team:string,    
  }[]
}



function App() {

  const [friends,setFriends]=useState<FState["friends"]>([
    {
      id:1,
      name:'Messi',
      age:34,
      url:"https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg",
      team:'PSG'
    }
  ]);

  const [input,setInput]=useState({
    id:"",
    name:"",
    age:"",
    url:"",
    team:""

})


 

  console.log(friends);
  return (
    <div className="App">
      <header>
        <h1>Top Rated Players</h1>
      </header>
      <List friends={friends} setOutsideInput={setInput}  setFriends={setFriends}/>
      <AddToList friends={friends}  inputFriends={input} setFriends={setFriends} /> 
      
    </div>
  );
}

export default App;
