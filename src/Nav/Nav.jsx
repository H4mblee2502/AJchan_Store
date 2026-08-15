import './Nav.css'
import Logo from '../assets/Logo.png'
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function NavLinkButtons({selectedCategory, onSelectedCategory, className}){
    const categories = ['All Product', 'Nike', 'Adidas', 'Converse', 'Puma', 'Vans'];

    return (
        <div className={className}>
            {categories.map((cat) => (
                <button
                    key={cat}
                    className={selectedCategory === cat ? 'active' : ''}
                    onClick={() => onSelectedCategory(cat)}
                >{cat}</button>
            ))}
        </div>
    );
}

function Nav ({ selectedCategory, onSelectedCategory }) {
    return (
        <div className='Navigation'>

            <div className='wrapper-nav left-nav'>
                <img src={Logo} alt="Logo" width={45} />
                <span>AJChan Store</span>
            </div>
            <NavLinkButtons 
            className="wrapper-nav middle-nav"
            selectedCategory={selectedCategory}
            onSelectedCategory={onSelectedCategory}
            />


            <div className='wrapper-nav right-nav'>
                <button type="button">Sign In</button>

                <ul>
                    <li><PersonIcon /></li>
                    <li><FavoriteBorderIcon /></li>
                    <li><ShoppingCartOutlinedIcon /></li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;