function StaticBadge ({ information }) {
  const { name, badgeUrl } = information

  return (
    <>
      <a href={badgeUrl} target='_blank' rel='noreferrer'>
        <img
          title={name}
          alt={`Logo de ${name}`}
          className='static-badge'
          src={`${badgeUrl}`}
        />
      </a>
    </>
  )
}

export default StaticBadge
