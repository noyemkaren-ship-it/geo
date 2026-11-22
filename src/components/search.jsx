import { useState } from "react";
import { getData } from "../data/data"

function Search() {
    const [text, setText] = useState('')
    const data = getData()
    const filteredData = data.filter((lesson) => 
        lesson.name.toLowerCase().includes(text.toLowerCase())
    )

    return <>
        <div className="search">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)} 
                placeholder="Введите названия информации..."
                className="search-input"
            />
            
            <div className="search-results">
                {filteredData.length > 0 ? (
                    filteredData.map((lesson) => (
                        <div key={lesson.id} className="search-item">
                            <h3>{lesson.name}</h3>
                        </div>
                    ))
                ) : (
                    <p className="no-results">По запросу "{text}" ничего не найдено.</p>
                )}
            </div>
        </div>
    </>
}

export default Search;