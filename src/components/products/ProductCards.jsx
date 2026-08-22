import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteIcon from '@mui/icons-material/Favorite'
import useFilter from '../../context/useContext'
import SEARCH from '../../assets/search.png';

export default function ProductCards() {
  const { optionSorted, relevance, setRelevance , products} = useFilter()
  const [favorite, setFavorite] = useState([]);
  const noFoundItems = products.length > 0;

  const toggleFavorite = (productId) => {
        if (favorite.includes(productId)){
            setFavorite(favorite.filter(id => id !== productId));
        } else { 
            setFavorite([...favorite, productId]);
        }
    }
    
  return(
    <div className='flex flex-col grow w-full min-w-0'>
      <div className='flex justify-between items-center w-full'>
        <h3 className='font-bold text-xl'>{products.length} results</h3>
        <label htmlFor={relevance}>
          <select
            value={relevance}
            onChange={(e) => setRelevance(e.target.value)}
            className='p-4px font-semibold text-xs'
          >
            {optionSorted.map((sorted) => (
              <option 
                value={sorted}
                key={sorted}
              >{sorted}</option>
            ))}
          </select>
        </label>
      </div>
      {!noFoundItems ? (
        <div className='flex flex-col justify-center items-center grow w-full min-h-[350px] text-center mt-[2rem]'>
          <img 
            src={SEARCH} 
            alt="Not Found Items"  
            className='w-3xs h-auto mb-4'
          />
          <h1 className='text-2xl font-semibold mb-2'>No Result Found</h1>
          <p className='text-[0.95rem] m-0'>We couldn't find the item you were looking for.</p>
        </div>
      ) : (
        <div className='grid grid-cols-4 mt-4 g-8 w-full'>
          {products.map((item) => {

            const isThisItemFavorite = favorite.includes(item.id)
            return (
              <div
                key={item.id}
                className='relative w-[266px] p-4 flex flex-col justify-between gap-4'
              >
                <button 
                  className='absolute t-0 left-0 cursor-pointer border-none' 
                  onClick={() => toggleFavorite(item.id)}
              >
                {isThisItemFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
              </button>
              <img 
                src={item.url} 
                alt={item.title} 
                className='w-3xs h-[210px] p-4'
              />
              <h3 className='text-sm'>{item.title}</h3>
              <p>&#x20B1;{item.price}</p>
              <p>
                {Array.isArray(item.colors) 
                  ? `${item.colors.length} ${item.colors.length > 1 ? "Colors" : "Color"} Available`
                  : "1 Color Available"}
              </p>
                <div className="flex flex-wrap gap-1">
                  {(Array.isArray(item.colors) ? item.colors : item.colors ? [item.colors] : []).map((color, index) => (
                  <span
                    key={index}
                    style={{ backgroundColor: color }}
                    className="w-[25px] h-[25px] rounded-full cursor-pointer inline-block border border-gray-500"
                    title={color}
                  />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}

    </div>
  )
}