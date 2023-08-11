import { useState,useEffect } from "react";
import header from '../styles/header.module.css';
export default function Header({setGeneral}){
    const [name,setName]=useState('')
    const [title,setTitle]=useState('')
    const [contact,setContact]=useState('')
    const [email,setEmail]=useState('')
    const [linkdin,setLinkdin]=useState('')
    const [git,setGit]=useState('')
    
    const handleSubmit= (e)=>{
        e.preventDefault();
        setGeneral({name,title,contact,email,linkdin,git})
      
    }
   

    return(
      <div >
        <h1>RESUME BUILDER</h1>
        <form onSubmit={handleSubmit} className={header.basicinfo}>
        
          <div className={header.title}>
           <input type ="text" placeholder="NAME" onChange={(e)=>setName(e.target.value)}></input>
           <input type ="text" placeholder="YOUR PROFESSIONAL TITLE" onChange={(e)=>setTitle(e.target.value)}></input>
          </div>
          <div className={header.general}>
            <input type ="number" placeholder="contact no" onChange={(e)=>setContact(e.target.value)}></input>
            <input type="email"  placeholder="EMAIL"  onChange={(e)=>setEmail(e.target.value)} ></input>
            <input type="url"  placeholder="linkdin"  onChange={(e)=>setLinkdin(e.target.value)} ></input>
            <input type="url" placeholder="gitub" onChange={(e)=>setGit(e.target.value)} ></input>
          </div>
          <button type="submit">SAVE</button>
        </form>
      </div>
    )
}