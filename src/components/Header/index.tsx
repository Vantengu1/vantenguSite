import { Link } from "react-router-dom"
import style from "./style.module.css"

const Header = () => {


    return(
        <header className={style.header}>
            <Link to='/' className={style.logo}>
                <span>{'{Vantengu/}'}</span>
            </Link>
            <nav className={style.nav}>
                <Link to='/'>Home</Link>
                <Link to='/about'>About Me</Link>
                <Link to='/technology'>Technologes</Link>
                <Link to='/project'>Projects</Link>
            </nav>
            <nav className={style.menu__burger}>
                <button className={style.burger}></button>
                <div className={style.menu__mobile}>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About Me</Link>
                    <Link to='/technology'>Technologes</Link>
                    <Link to='/project'>Projects</Link>
                </div>
            </nav>
            <div className={style.socialsBlock}>
                <button className={style.socials}>Contact Me</button>
            </div>
        </header>
    );
};

export default Header;