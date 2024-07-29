function StaticBadge ({ information }) {
  const { name, badge_url } = information

  return (
    <>
      <a href={badge_url}>
        <img
          title={name}
          alt={`Logo de ${name}`}
          className='static-badge'
          src={`${badge_url}`} />
      </a>
    </>
  ) 
}

export default StaticBadge
