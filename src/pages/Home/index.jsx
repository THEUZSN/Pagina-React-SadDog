import styles from './Home.module.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Container from '../../components/Container';
import Image from "/undraw_page-eaten_b2rt.svg"
import { useState, useEffect } from 'react';

function Home() {

  const [likes, setLikes] = useState(0)

  useEffect(()=>{
    if (likes > 9){
      alert(`Voce tem ${likes} likes`);
    }
  }, [likes]);

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
          <p className={styles.likesContainer}>
          <button className={styles.likeButton} onClick={()=>{
            setLikes(likes+1)
            }}>👍</button>

          <div className={styles.likeQuant}>{likes}</div>
          <button className={styles.deslikeButton} onClick={()=>{
            setLikes(likes-1)
            }}>👎</button>
          </p>
        </div>
        <figure>
          <img className={styles['img-home']} src={Image} alt="Imagem da home" />
        </figure>
      </section>
      </Container>      
      
      <Footer/>
    </>
  )
}

export default Home