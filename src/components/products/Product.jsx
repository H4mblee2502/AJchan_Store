import React from 'react'
import Filter from '../categories/Filter'
import ProductCards from '../products/ProductCards'
import useFilter from '../../context/useContext'
import SwitchToggle from '@mui/icons-material/TuneOutlined'

function Product() {
  const { showFilter, setShowFilter } = useFilter()
  return (
    <div className='flex w-full gap-[2rem] px-[6.5rem] mt-[1rem] '>
      {showFilter ? 
        <Filter/>
        :
        <button
          className='bg-transparent border-none cursor-pointer h-fit whitespace-nowrap'
          onClick={() => setShowFilter((prev) => !prev)}
        >
        <SwitchToggle fontSize="medium" className="text-black text-2xl" />
        </button>
      }

        <ProductCards />
    </div>
  )
}

export default Product