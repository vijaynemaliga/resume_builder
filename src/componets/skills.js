import {useState} from "react"
import style from '../styles/skills.module.css'
export default function Skill({skills,setskills}){
    const[skill,setSkill]=useState()
    const handleclickskill=(e)=>{
        e.preventDefault();
        const updated_skills=skills.filter((skill)=>skill)
        if(skill!=='')
        setskills([...updated_skills,skill]);
        setSkill('')
    }
    const handleAddClick=()=>{
       setskills([...skills,false])
    }
    return(
        <div className={style.skill}>
            <h2>SKILLS</h2>
            {skills.map((value,index)=>( 
         
            <form onSubmit={ handleclickskill}>
                <input type='text' placeholder={`SKILL ${index + 1}`} onChange={(e)=>setSkill(e.target.value)}  className={style.skill_input} required></input>
                <button  type='submit'>SAVE</button>
            </form>
            ))}
        <div>
           <button onClick={handleAddClick}>ADD</button>   
         </div>
        </div>
    )
}