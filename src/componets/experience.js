import { useState } from 'react';
import style from '../styles/experience.module.css'
export default function Experience({experience,setExperience}){
    const [title, setTitle] = useState("")
    const [role, setRole] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const newExperience = experience.filter((value)=>(value.length))
        const curr_experience=()=>{
          if(title&&role&&description)
          return {title,role,description}
        }
        setExperience([...newExperience,curr_experience()]) 
         
    }

    const handleClick = () => {
        setExperience([...experience, {}])
    }

    return(
        <div >
          <h2>EXPERIENCE</h2>
            {experience.map((value, index) => {
                return (
                  <form onSubmit={handleSubmit} key={index} className={style.experience}>
                    <input
                      type="text"
                      placeholder="working title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className={style.exp_input}
                      required
                    />
                    <input
                      type="text"
                      placeholder="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className={style.exp_input}
                      required
                    />
                    <textarea
                      placeholder="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className={style.exp_input}
                      required
                    ></textarea>
                    <button type="submit">SAVE</button>
                  </form>
                );
              })
            }
            <button onClick={handleClick}>Add Experience</button>
        </div>
    )
}
