import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Toggle from "../../components/Toggle";
import { ThemeContext, themes } from "../../contexts/ThemeContext";


const About = () => {
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
                        
                    </main>
                    <Footer />
                </>
            )}
        </ThemeContext.Consumer>
    );
};

export default About;