import style from '../styles/preview.module.css';
        function ResumePage({ general, education, skills, experience,project }) {
          return (
            <div className={style.resume}>
              <header>
                <div className={style.headerInfo}>
                  <h1>{general.name}</h1>
                  <h3>{general.title}</h3>
                </div>
                <div className={style.headerContact}>
                  <p>{general.contact}</p>
                  <p>{general.email}</p>
                
                  <div>
                    <img
                      src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw"
                      alt="LinkedIn logo"
                    />
                    <a href={general.linkdin}>LinkedIn</a>
                  </div>
                  <div>
                    <img
                      src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
                      alt="GitHub logo"
                    />
                    <a href={general.git}>GitHub</a>
                  </div>
                  
                </div>
              </header>
            <div className={style.sections}>
              <div className={style.education}>
                <h2>EDUCATION</h2>
                {education.map((value, index) => {
                  return (
                    <div key={index}>
                      <h3>{value.intsitute}</h3>
                      <p>{value.branch}</p>
                      <p>{value.grade}</p>
                    </div>
                  );
                })}
              </div>
             
              <div className={style.experience}>
                <h2>EXPERIENCE</h2>
                {experience.map((value, index) => {
                  return (
                    <div key={index}>
                      <h3>{value.title}</h3>
                      <p>{value.role}</p>
                      <p>{value.description}</p>
                    </div>
                  );
                })}
              </div>
              <div className={style.skills}>
                <h2>SKILLS</h2>
                <ul>
                  {skills.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              </div>
              <div>
                  <h2>PROJECTS</h2>
                  {
                    project.map((value)=>{
                      return(
                        <div>
                          <h3>{value.title}</h3>
                          <p>{value.description}</p>
                        </div>
                      )
                    })
                  }
              </div>
            </div>
            <button onClick={() => window.print()}>Download PDF</button>

        </div>
          );
        }
        
        export default ResumePage;
        
