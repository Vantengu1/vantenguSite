import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
    {
        path : '/',
        element : <Home />,
    }, 
    // {
    //     path : '/about',
    //     element : <About />,
    // }, 
    // {
    //     path : '/projects',
    //     element : <Projects />,
    // }, 
    // {
    //     path : '/contacts',
    //     element : <Contacts />,
    // },
    {
        path : '*',
        element : <NotFound />
    }
]);

export default router;