import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import { Link } from 'react-router-dom';

function Page404(){
    return(
        <>
            <Header />
                <Container>
                    <h1>Página Não Encontrada </h1>
                    <Link to="/">Voltar à Home Page</Link>
                </Container>
            <Footer />
        </>
    )
}
export default Page404