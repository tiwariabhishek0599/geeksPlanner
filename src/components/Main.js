import {useState} from 'react'


function Main(){
    const[subject,setSubject]=useState("");
    const[hour,setHour]=useState(0);
    const[planner,setPlanner]=useState([]);
    function addPlanner(){
        setPlanner([...planner,{subjectInput:subject,hourInput:hour}])
        setSubject("");
        setHour("");
    }
    function onChangeHandler(e,fun){
        fun(e.target.value);
    }
    const incrementHour=(index)=>{
        setPlanner((prevPlanner)=>{
            const updatedPlanner=[...prevPlanner];
            updatedPlanner[index]={
                ...updatedPlanner[index],
                hourInput:parseInt(updatedPlanner[index].hourInput)+1,
            }
            return updatedPlanner;
    });
    }
    const decrementHour=(index)=>{
        setPlanner((prevPlanner)=>{
            const updatedPlanner=[...prevPlanner];
            updatedPlanner[index]={
                ...updatedPlanner[index],
                hourInput:parseInt(updatedPlanner[index].hourInput)-1,
            }
            return updatedPlanner;
    });
    }
    
    return( 
        <div>   
            
           <h1>Geekster education Planner</h1>
           <input type="text" placeholder="Subject" value={subject} onChange={(e)=>{
            onChangeHandler(e,setSubject)
           }}></input>
           <input type="number" placeholder="Hour" value={hour} onChange={(e)=>{
            onChangeHandler(e,setHour)}}></input>
           <button onClick={addPlanner}>Add</button>
           {
            planner.map((ele,index)=>(
                <div>
                    {ele.subjectInput} - {ele.hourInput} hours
                    <button onClick={()=>incrementHour(index)}>+</button>
                    <button onClick={()=>decrementHour(index)}>-</button>
                </div>
            ))
           }
        </div>
    );
}
export default Main;