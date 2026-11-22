import { getData } from "../data/data"
import Lesson from "./lesson"

function Lessons() {
  const data = getData()

  return (
    <div className="alls">
      {data.map((l) => (
        <div className="one-line" key={l.id}>
          <h3 className="title">{l.name}</h3>
          <details className="ofer">
            <summary>Подробнее</summary>
            <Lesson info={l} />
          </details>
        </div>
      ))}
    </div>
  )
}

export default Lessons