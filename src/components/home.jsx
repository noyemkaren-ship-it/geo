

function Home() {
  return (
    <div className="Home-Class">
      <section className="hero-section">
        <h1 className="home-h1">Добро пожаловать на платформу!</h1>
        <p className="Description">
          Привет, пользователь! Это учебно-развивающая платформа, созданная для
          ознакомительного формата. Здесь вы можете изучать новые технологии,
          пробовать свои силы в разработке и расширять кругозор в мире IT.
        </p>
        <img
          className="home-photo"
          src="home-photo.jpg"
          alt="Иллюстрация платформы"
        />
      </section>

      <section className="features-section">
        <h2>Что вы найдёте на платформе?</h2>
        <ul className="features-list">
          <li>
            <strong>📚 Обучающие материалы</strong> — статьи, руководства и
            примеры кода для начинающих и продвинутых разработчиков.
          </li>
          <li>
            <strong>🛠 Практические задания</strong> — интерактивные упражнения
            для закрепления теории.
          </li>
          <li>
            <strong>🌐 Сообщество</strong> — обмен опытом, обсуждение проектов и
            взаимопомощь.
          </li>
          <li>
            <strong>🚀 Развитие навыков</strong> — от базового синтаксиса до
            создания полноценных приложений.
          </li>
        </ul>
      </section>

      {/* Блок со статистикой (можно заменить на реальные данные) */}
      <section className="stats-section">
        <h2>Платформа в цифрах</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">учебных модулей</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">?</span>
            <span className="stat-label">активных пользователей</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">доступ к материалам</span>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <h2>Готовы начать?</h2>
        <p>
          Присоединяйтесь к сообществу, выбирайте интересующий курс и
          погружайтесь в обучение. Всё бесплатно и создано для вашего развития!
        </p>
        <button className="cta-button" onClick={() => alert('Нажмите на вкладку все уроки')}>
          Начать обучение
        </button>
      </section>

      <footer className="home-footer">
        <p>© 2025 Учебная платформа. Связь: support@example.com</p>
      </footer>
    </div>
  );
}

export default Home;