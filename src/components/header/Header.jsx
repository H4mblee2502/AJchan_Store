import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PH from '../../assets/ph.png';

function Header (){
    return(
        <div className='grid grid-cols-3 gap-4 mt-4 items-center'>

            <div className='flex items-center gap-1'>
                <img src={PH} alt="PH" width={25}/>
                <span className='font-medium'>PH</span>
            </div>


            <div className='flex gap-1 justify-self-center'>
                <h3 className='font-bold'>Free Shipping!</h3>
                <span className='font-light'>On All Orders</span>
            </div>


            <div className='flex justify-self-end'>
                <ul className='flex gap-2 list-none'>
                    <li>
                        <a 
                        href="#" 
                        className="header-link-hover">
                            Store Locator 
                            <LocationOnOutlinedIcon sx={{ fontSize: 20 }}/>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="header-link-hover">
                            Track Order
                            <LocalShippingOutlinedIcon sx={{ fontSize: 20 }} />
                        </a>
                    </li>
                    <li><a href="#" className="header-link-hover">Help Centre</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;