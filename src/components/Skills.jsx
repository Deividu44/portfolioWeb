import { useEffect, useState } from 'react'
import Skill from './Skill'

function Skills () {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    fetch('../data.json')
      .then(res => res.json())
      .then(data => setSkills(data.skills))
  },[])

  return (
    <>
      <h1 id='skills' className='title-content'>Skills</h1>
      {skills.map(s => (
        <Skill key={s.title_skills} contentSkill={s}/>
      ))}
    </>

  )
}

export default Skills
