import { useState } from "react"
import { getData } from "../data/data"
import Lesson from "./lesson"
import Search from "./search"

function Lessons() {
  const data = getData()
  const [need, setNeed] = useState(false)

  return <>
    <button onClick={() => {
      if (need) {
        setNeed(false)
      } else {
        setNeed(true)
      }
    }}>Пойск</button>
    {
    need && <div className="body-content">
      <h1 className="home-h1">Пойск урока</h1>
      <Search/>
    </div>
    }
    
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
  </>
}

export default Lessons