import { useState } from 'react';
export default function Project({project,setProject}){
     const [title,setTitle]=useState('');
     const [description, setDescription] = useState("");
     const handleSubmit=(e)=>{
      e.preventDefault();
      const newProject=project.filter((value)=>value.length)
       setProject([...newProject,curr_project()])
     }
     const curr_project=()=>{
      if(title&&description)
      return {title,description}
    }
    const handleClick=()=>{
      setProject([...project,{}])
    }
    
    return(
        <div>
          <h2>project</h2>
          {
            project.map((value,index)=>{ 
              return( 
            <form onSubmit={handleSubmit} key={index}>
            <input type="text" 
            placeholder="project title"
             onChange={(e)=>setTitle(e.target.value)}
             ></input>
            <textarea  
             placeholder="description" 
             required
             onChange={(e)=>setDescription(e.target.value)}
             > </textarea>
             <button type='submit'>save</button>
           </form>)}
           )
          }
      <button onClick={handleClick}>Add Project</button>

        </div>
    )
}