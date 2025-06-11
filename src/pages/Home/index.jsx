import styles from './Home.module.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Container from '../../components/Container';
import img from "/undraw_page-eaten_b2rt.svg";

function Home() {

  return (
    <>
      <Header/>
      <Container>
      <section className={styles.home}>
        <div className={styles.apresentacao}>
          <p>
            Olá, somos <br/>
            <span>Everton e Matheus Serra</span> <br/>
            Devs Full Stack
          </p>
          <button className={`${styles["btn"]} ${styles["btn-red"]}`}>
            Saiba mais sobre nós!
          </button>
        </div>
        <figure>
          <img className={styles['img-home']} src={img} alt="Imagem da home" />
        </figure>
      </section>
      </Container>      
      
      <Footer/>
    </>
  )
}

export default Home