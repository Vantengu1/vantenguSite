 
import { RouterProvider } from 'react-router-dom'
import './styles/globals.css'
import router from './router'
// import About from './components/About'
// import Downbaner from './components/Downbaner'
// import Footer from './components/Footer'
// import Header from './components/Header'
// import Hero from './components/Hero'
// import Portfolio from './components/Portfolio'
// import Servis from './components/Servis'
// import { ThemeContext, themes } from '../src/contexts/ThemeContext'
// import Toggle from './components/Toggle/index'


function App() {
  
  return (
    <RouterProvider router={router} />
  )
}

export default App


{/* <ThemeContext.Consumer>
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
</ThemeContext.Consumer> */}