import styles from './Projetos.module.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer'

function Projetos() {

  return (
    <>
      <Header/>
      <section className={styles.container}>
      <h1>Projetos</h1>
      </section> 
      <Footer/>
    </>
  )
}

export default Projetos