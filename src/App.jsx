import { useState } from 'react'
import Home from './components/home'
import Lessons from './components/lessons'
import './App.css'
import Form from './components/form'

function App() {
  const [page, setPage] = useState('index')

  return (
    <>
      <div className="header">
        <h2 className="header-h2">Геометрия с Efirium</h2>

        <div className="header-buttons">
          {page !== 'index' ? (
            <button className="Click-button-home" onClick={() => setPage('index')}>
              Домой
            </button>
          ) : (
            <button className="Clicked-button-home" disabled>
              Домой
            </button>
          )}

          {page !== 'alls' ? (
            <button className="Click-button-alls" onClick={() => setPage('alls')}>
              Все уроки
            </button>
          ) : (
            <button className="Clicked-button-alls" disabled>
              Все уроки
            </button>
          )}
          {
            page !== 'formul' ? <button className='Click-button-f' onClick={setPage('formul')}>Формулы</button> : <button className='Clicked-button-f'>Формулы</button>
          }
        </div>
      </div>

      <div className="body-content">
        {page === 'index' && <Home />}
        {page === 'alls' && <Lessons />}
        {page === 'formul' && <Form/>}
      </div>
    </>
  )
}

export default App