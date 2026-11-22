import { useState } from "react"
import { getData } from "../data/data"
import Lesson from "./lesson"
import Search from "./search"

function Lessons() {
  const data = getData()
  const [need, setNeed] = useState(false) // false = поиск скрыт, true = показан

  return (
    <div className="lessons-container">
      {/* Кнопка поиска */}
      <div className="search-toggle-wrap">
        <button 
          onClick={() => setNeed(!need)} 
          className={need ? "Clicked-button-home" : "Click-button-home"}
        >
          {need ? "Скрыть поиск" : "Поиск"}
        </button>
      </div>

      {/* Блок поиска (появляется при need === true) */}
      {need && (
        <div className="search-block">
          <h2 className="home-h1">Поиск урока</h2>
          <Search />
        </div>
      )}

      {/* Список всех уроков */}
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
    </div>
  )
}

export default Lessons