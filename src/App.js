import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import SocialLinks from './SocialLinks';

function App() {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch both skills and projects simultaneously
    Promise.all([
      axios.get('http://localhost:8000/api/skills/'),
      axios.get('http://localhost:8000/api/projects/')
    ])
    .then(([skillsResponse, projectsResponse]) => {
      console.log('Fetched skills:', skillsResponse.data);
      console.log('Fetched projects:', projectsResponse.data);
      setSkills(skillsResponse.data);
      setProjects(projectsResponse.data); // Set projects data in state
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setError('Failed to load data');
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <h2>Hi, I'm Meghana Katraju! <span role="img" aria-label="wave">👋</span></h2>
        <div className="profile-picture">
          <img src="/images/my-picture.jpg" alt="Meghana Katraju" />
        </div>
        <div className="intro">
          <h3>About Me</h3>
          <p>
          I’m Meghana Katraju, a Computer Science graduate student at the University of Texas at Arlington. My background includes hands-on internships with AWS in cloud, Path Creators in robotics, cybersecurity in Indian Servers Company, and Python for data science in IBM. I’ve led projects in biometric security, road lane detection, and network management at Cisco. Proficient in Java, JavaScript, REACT, SQL, PostgreSQL, Spring tools, and more, I'm eager for full-time opportunities and open to connecting on LinkedIn.
          </p>
        </div>
        <div className="education">
          <h3>Education</h3>
          <p>
            <strong>University of Texas at Arlington</strong><br />
            Master of Science in Computer Science<br />
            [2024]
          </p>
          <p>
            <strong>Jawaharlal Nehru Technological University</strong><br />
            Bachelor of Computer Science<br />
            [2022]
          </p>
        </div>
        <div className="skills">
          <h3>My Skills</h3>
          {loading && <p>Loading skills...</p>}
          {error && <p>{error}</p>}
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
        <div className="projects">
          <h3>My Projects</h3>
          {loading && <p>Loading projects...</p>}
          {error && <p>{error}</p>}
          <ul className="projects-list">
            {projects.map((project, index) => (
              <li key={index} className="project-item">{project}</li>
            ))}
          </ul>
        </div>
        <SocialLinks />
      </header>
    </div>
  );
}

export default App;

