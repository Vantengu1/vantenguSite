import About from '../../components/About'
import Downbaner from '../../components/Downbaner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Portfolio from '../../components/Portfolio'
import Servis from '../../components/Servis'
import { ThemeContext, themes } from './../../contexts/ThemeContext'
import Toggle from '../../components/Toggle/index'


const Home = () => {
    return (
        <ThemeContext.Consumer>
            {({ theme, setTheme }) => (
                <>
                    <Toggle
                        onChange={() => {
                            if (theme === themes.light) setTheme(themes.dark);
                            else setTheme(themes.light);
                        }}
                        value={theme === themes.dark}
                    />
                    <Header />
                    <main className="main">
                        <Hero />
                        <About />
                        <Servis />
                        <Portfolio />
                        <Downbaner />
                    </main>
                    <Footer />
                </>
            )}
        </ThemeContext.Consumer>
    );
};

export default Home;