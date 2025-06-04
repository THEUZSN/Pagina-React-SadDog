import styles from './Home.module.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Container from '../../components/Container';

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
          <img className={styles['img-home']} src="/undraw_page-eaten_b2rt.svg" alt="Imagem da home" />
        </figure>
      </section>
      </Container>      
      
      <Footer/>
    </>
  )
}

export default Home