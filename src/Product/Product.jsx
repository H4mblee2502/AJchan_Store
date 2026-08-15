import './Product.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import search from '../assets/search.png'
import { Product } from './data/Products';
import { useState } from 'react';

function FavoriteButton({ className, isFavorite, onToggle }) {
    return (
        <button 
            className={className} 
            onClick={onToggle}
        >
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </button>
    );
}
function NativeDropdown({sortBy, onSortChange}) {
    const optionSorted = ['RELEVANCE','HIGH TO LOW', 'LOW TO HIGH', 'NEW PRODUCTS'];
    
  return (
    <label>
      <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
        {optionSorted.map((sorted) =>(
        <option 
            key={sorted}
            value={sorted}>{sorted}</option>
        ))}
      </select>
    </label>
  );
}

function ListOfProducts({ listOfItemProducts = [] }){
    const [products, setProducts] = useState(Product);
    const [favorite, setFavorite] = useState([]); 
    const [relevance, setRelevance] = useState('RELEVANCE');

    const toggleFavorite = (productId) => {
        if (favorite.includes(productId)){
            setFavorite(favorite.filter(id => id !== productId));
        } else { 
            setFavorite([...favorite, productId]);
        }
    }
    const noFoundItems = listOfItemProducts.length > 0;

    const getNumericPrice = (price) => {
        if (typeof price === 'number') return price;
        return parseFloat(String(price).replace(/[^0-9.-]+/g, "")) || 0;
    };
   const sortedProducts = [...listOfItemProducts].sort((a, b) => {
        const priceA = getNumericPrice(a.price);
        const priceB = getNumericPrice(b.price);

        if (relevance === 'HIGH TO LOW') {
            return priceB - priceA; 
        }
        if (relevance === 'LOW TO HIGH') {
            return priceA - priceB; 
        }
        if (relevance === 'NEW PRODUCTS') {
            return Number(b.id) - Number(a.id); 
        }
        return 0; 
    });

    return(
        <div className="container-product">
            <div className="wrapper-menu-products">
                <h3>{sortedProducts.length} Results</h3>
                <NativeDropdown
                    sortBy={relevance}
                    onSortChange={setRelevance}
                /> 
            </div>
        {!noFoundItems ? 
            (
                <div className="noFoundItem">
                    <img src={search} alt="No Found Item" width={250} height={250} />
                    <h1>No Result Found</h1>
                    <p>We couldn't find the item you were looking for.</p>
                </div>
            ) : (
            <div className="product">
                {sortedProducts.map((item) => {
                const isThisItemFavorite = favorite.includes(item.id);

                return (
                    <div key={item.id} className="product-cards">
                        <FavoriteButton 
                            className='fav-btn' 
                            isFavorite={isThisItemFavorite} 
                            onToggle={() => toggleFavorite(item.id)} 
                        />
                        <img src={item.url} alt={item.title} width={173} height={150} />
                        <h3>{item.title}</h3>
                        <p>&#x20B1;{item.price}</p>
                        <p>{`${item.colors.length} ${item.colors?.length > 1 ? ("Colors") : ("Colors")} Available`}</p>
                    </div>
                         );
                 })}
             </div>
        )
        }
        </div>
    );
}

export default ListOfProducts;