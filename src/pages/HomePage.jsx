import styles from "./styles.module.css"
import mandalorian from "../assets/img/mandalorian.jpg"

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={ styles.homepage }>
        <h2>Mandalorian</h2>
        <p>американский телесериал в жанре космический вестерн</p>
        <div className={styles.photo}>
          <img src={mandalorian} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HomePage;
