import Search from "./search"

function Home() {
  return (
    <div className="Home-Class">
      <h1 className="home-h1">Главная страница</h1>
      <p className="Description">
        Привет пользователь, это платформа написана для сугубо
        ознакомительного и развивающего формата
      </p>
      <img className="home-photo" src="home-photo.jpg" alt="Не удалось загрузить" />
      <h1 className="home-h1">Найти урок</h1>
      <Search/>
    </div>
  )
}

export default Home