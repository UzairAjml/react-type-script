import React from 'react'
import { FState as  Props } from '../App' 
interface FProps{
    friends:Props["friends"],
    setFriends:React.Dispatch<React.SetStateAction<Props["friends"]>>,
    setOutsideInput:any
}
 
const List:React.FC<FProps> = ({friends,setFriends,setOutsideInput}) => {

    const renderList = (): JSX.Element[] => {
        return friends.map((friends, index) => {
            return (
                <li key={friends.id} className="List">
                    <div className="List-header">
                        <img className="List-img" src={friends.url} alt='OOps...'/>
                        <h2>{friends.name}</h2>
                    </div>
                    <p>{friends.age} years old</p>
                    <p className="List-note">{friends.team}</p>
                 <p> <button className='btn-del' onClick={()=>onDelete(friends.id)}  > Delete</button> <button className='btn-edit' onClick={()=>onEdit(index)} >Edit</button></p>  
                </li>
            )
        })
    }



    const onEdit=(index:number)=>{ 
         setOutsideInput(friends[index]);

    }

    const onDelete=(id:number):void=>{

        setFriends(friends.filter(friend =>friend.id!==id));
    }

 

    return (
        <div>
            {renderList()}
        </div>
    )
}

export default List
