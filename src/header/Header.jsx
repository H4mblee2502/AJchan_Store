import './Header.css'
import PH from '../assets/ph.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
function Header (){
    return(
        <div className='header'>

            <div className='wrapper-header left-header'>
                <img src={PH} alt="PH" width={25}/>
                <span>PH</span>
            </div>


            <div className='wrapper-header middle-header'>
                <h3>Free Shipping!</h3>
                <span>On All Orders</span>
            </div>


            <div className='wrapper-header right-header'>
                <ul>
                    <li>
                        <a href="#">
                            Store Locator 
                            <LocationOnOutlinedIcon sx={{ fontSize: 20 }}/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Track Order
                            <LocalShippingOutlinedIcon sx={{ fontSize: 20 }} />
                        </a>
                    </li>
                    <li><a href="#">Help Centre</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;