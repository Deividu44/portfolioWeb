import { Container } from 'react-bootstrap'
import StaticBadge from './StaticBadge'

function Skill ({ contentSkill }) {
  const { title_skills, languages } = contentSkill

  return (
    <>
      <Container>
        <h2 className='subtitle-content'>{title_skills}</h2>
      </Container>
      <Container className='skills-grid gap-5 text-content p-4'>
        {languages.map(lang => (
          <StaticBadge key={lang.name} information={lang} />
        ))}
      </Container>
    </>
  )
}

export default Skill