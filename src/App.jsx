import './App.css'
import Header from './components/Header';
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header/>      
      <section className='container'>
        <div className='apresentacao'>
          <p>
            Olá, somos <br/>
            <span>Everton e Matheus Serra</span> <br/>
            Devs Full Stack
          </p>
          <button className='btn btn-red'>
            Saiba mais sobre nós!
          </button>
        </div>
        <figure>
          <img className='img-home' src="/undraw_page-eaten_b2rt.svg" alt="Imagem da home" />
        </figure>
      </section>
      <Footer/>
    </>
  )
}

export default App
