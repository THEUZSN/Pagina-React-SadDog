import styles from './Contatos.module.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer'

function Contatos() {

  return (
    <>
      <Header/>      
      <section className={styles.container}> 
      <h1>Contatos</h1>
      </section>
      <Footer/>
    </>
  )
}

export default Contatos