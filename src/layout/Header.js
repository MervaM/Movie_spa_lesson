import {NavLink, Link} from 'react-router-dom';

const setActive = ({isActive}) => isActive ? 'active-link' : '';
function Header() {
    return (
        <nav className="indigo darken-4">
            <div className="nav-wrapper container">
                {/* <a href="#" className="brand-logo">Movies App</a> */}
                <Link to='/'> Movies App</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <NavLink to='/about' className={setActive}>Home</NavLink>
                        {/* <a href="#">Home</a> */}
                    </li>
                    <li>
                        <NavLink to='/' className={setActive}>About me</NavLink>
                        {/* <a href="#">About Me</a> */}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export { Header };