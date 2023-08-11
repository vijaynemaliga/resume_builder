import { useState } from 'react';
import edinfo from '../styles/completeedu.module.css';
export default function Education({education,setEducation}){
    const [intsitute,setInstitute]=useState("")
    const [branch,setBranch]=useState("")
    const [grade,setGrade]=useState("")
    
    const handleAdd=()=>{
        setEducation([...education,{}])
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        let filterededu  = education.filter((obj)=>Object.keys(obj).length>0)
        const curr_education=()=>{
          if(intsitute.length>0&&branch.length>0&&grade.length>0)
          return {intsitute,branch,grade}
        }
        setEducation([...filterededu,curr_education()])
         
    }
    return (
    <>
       <h2>EDUCATION</h2>
        {
        education.map(()=>  
        <div >
          <form onSubmit={handleSubmit} className={edinfo.edu}>
             <input type="text"    placeholder="INSTITUTE NAME"   onChange={(e)=>setInstitute(e.target.value)} className={edinfo.edu_input} required></input>
             <input type="text"    placeholder="BRANCH"           onChange={(e)=>setBranch(e.target.value)}    className={edinfo.edu_input} required></input>
             <input type="number"  placeholder="GRADE"            onChange={(e)=>setGrade(e.target.value)}     className={edinfo.edu_input} required></input>
             <button type="submit" >SAVE</button>
          </form>
           <div>
             <button onClick={handleAdd}>ADD</button>
           </div>
        </div>

        )}
    </>
    )
    
}