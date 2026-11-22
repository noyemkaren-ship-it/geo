function Lesson({ info }) {
  if (!info) return null

  return (
    <div className="lesson">
      <div
        className="lesson-text"
        dangerouslySetInnerHTML={{ __html: info.text }}
      />
      {info.photo && (
        <img
          className="lesson-photo"
          src={info.photo}
          alt={info.name}
        />
      )}
    </div>
  )
}

export default Lesson