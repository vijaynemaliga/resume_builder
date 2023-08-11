import './App.css';
import {useEffect,useState } from 'react';
import Header from './componets/header';
import Education from './componets/completeeduc';
import Skill from './componets/skills';
import Experience from './componets/experience';
import Preview from './componets/preview';
import Project from './componets/project';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';
function App() {
  const [general,setGeneral]=useState({})
  const [education,setEducation]=useState([{}])
  const[skills,setSkills]=useState([false])
  const [experience, setExperience] = useState([{}])
  const [project,setProject]=useState([{}])
  console.log(experience)

  return (
<Routes>
   <Route path='/' element={
      <div className="App">
      <Header 
        setGeneral={setGeneral}
       />
      <Education
         education={education}
         setEducation={setEducation}
      />
      <Skill
          skills={skills} 
          setskills={setSkills}
       />
      <Experience  
          experience={experience} 
          setExperience={setExperience}
       />
       <Project 
         project={project}
         setProject={setProject}
        />  
       <Link to='/preview'>PREVIEW</Link>
     </div>
   }>  
    </Route>
    <Route path="/preview"  element={ 
       <Preview
          general={general}
          education={education}
          skills={skills}
          experience={experience}
          project={project}
       />}>
    </Route>
 </Routes>
  );
}

export default App;
