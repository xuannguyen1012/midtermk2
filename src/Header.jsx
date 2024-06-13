
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Anonime</h1>
            <nav>
                <a href="#">Home</a>
                <a href="#">List anime</a>
                <input type="text" placeholder="Search anime or movie" />
            </nav>
        </header>
    );
};

export default Header;
