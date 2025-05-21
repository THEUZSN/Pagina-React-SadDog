import styles from './Sobre.module.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer'

function Sobre() {

  return (
    <>
      <Header/>      
      <section className={styles.container}>
      <h1>Sobre</h1>
      </section>
      <Footer/>
    </>
  )
}

export default Sobre