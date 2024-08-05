import Skill from './Skill'

function Skills ({ skills }) {
  return (
    <>
      <h1 id='skills' className='title-content'>Skills</h1>
      {skills?.map(s => (
        <Skill key={s.titleSkills} contentSkill={s} />
      ))}
    </>

  )
}

export default Skills
