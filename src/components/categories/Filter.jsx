import React, { useState } from 'react'
import SwitchToggle from '@mui/icons-material/TuneOutlined'
import Minus from '@mui/icons-material/RemoveOutlined'
import Plus from '@mui/icons-material/AddOutlined'
import useFilter from '../../context/useContext'


function Filter() {
  {/*Hide Toggle State */}
  const [isGenderOpen, setIsGenderOpen] = useState(true)
  const [isProductTypeOpen, setIsProductTypeOpen] = useState(true)
  const [isShoeStyleOpen, setIsShoeStyleOpen] = useState(true)
  const [isPricesOpen, setIsPricesOpen] = useState(true)
  const [isColorsOpen, setIsColorsOpen] = useState(true)

  {/*Custom Hooks*/}
  const { 
    setShowFilter, 
    genderOptions, 
    gender,
    setGender, 
    productType, 
    setProductType, 
    productTypeOptions,
    shoeStyle,
    setShoeStyle,
    shoeStyleOptions,
    colors,
    setColors,
    colorsOptions,
    prices,
    setPrices,
    priceOptions,
  } = useFilter()

  {/*Handle for managing multiple selected checkbox items*/}
  const handleCheckboxChange = (value, state, setState) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value))
    } else {
      setState([...state, value])
    }
  }
  {/*Handle colors items */}
  const handleColorToggle = (colorValue) => {
    if (colors.includes(colorValue)) {
      setColors(colors.filter((c) => c !== colorValue)) // Deselect
    } else {
      setColors([...colors, colorValue]) // Select
    }
  }
  return (

    <div className='w-xs'>
      <div className='wrapper-filter'>
        <button
          className='flex items-center justify-between w-full border-none cursor-pointer'
          onClick={() => setShowFilter((prev) => !prev)}
        >
          <span>Hide Filter</span>
          <SwitchToggle />
        </button>
 
      </div>

      <div className='wrapper-filter'>
        <button 
          className='button-isHide'
          onClick={() => setIsGenderOpen((prev) => !prev)}
        >
          <h3 className='font-bold'>GENDER</h3>
          {isGenderOpen ? <Minus /> : <Plus />}
        </button>
        {isGenderOpen && (
          <div className='options'>
            {genderOptions.map((g) => (
              <label 
                key={g}  
                htmlFor='genderGroup'
                className='inline-flex gap-1 font-light'
              >
                <input 
                  type="radio" 
                  name='genderGroup'
                  value={g}
                  checked={gender === g}
                  onChange={(e) => setGender(gender === e.target.value ? '' : e.target.value)}
                />
                <span className=''>{g}</span>
              </label>
            ))}
          </div>
        )}
      </div>
      <div className='wrapper-filter'>
          <button
            className='button-isHide'
            onClick={() => setIsProductTypeOpen((prev) => !prev)}
          >
            <h3 className='font-bold'>PRODUCT TYPE</h3>
            {isProductTypeOpen ? <Minus /> : <Plus />}
          </button>
          {isProductTypeOpen && (
            <div className='options'>
              {productTypeOptions.map((productList) => (
                <label 
                  htmlFor={productList}
                  className='inline-flex gap-1 font-light'
                  key={productList}
                >
                  <input 
                    type="checkbox" 
                    name={productList}
                    checked={productType.includes(productList)}
                    onChange={() => handleCheckboxChange(productList, productType, setProductType)}
                  />
                  <span>{productList}</span>
                </label>
              ))}
            </div>
          )}
      </div>
      <div className='wrapper-filter'>
        <button
          className="button-isHide"
          onClick={(e) => setIsShoeStyleOpen(e.target.value)}
        >
          <h3 className='font-bold'>SHOES STYLE</h3>
          {isShoeStyleOpen ? <Minus /> : <Plus />}
        </button>
        {isShoeStyleOpen && (
          <div className="options">
            {shoeStyleOptions.map((shoes) => (
              <label 
                htmlFor={shoes}
                className='inline-flex gap-1 font-light'
                key={shoes}
              >
                <input 
                  type="checkbox" 
                  name={shoes}
                  checked={shoeStyle.includes(shoes)}
                  onChange={() => handleCheckboxChange(shoes, shoeStyle, setShoeStyle)}
                />
                <span>{shoes}</span>
              </label>
            ))}
          </div>
        )}
      </div>
      <div className="wrapper-filter">
        <button
          className="button-isHide"
          onClick={() => setIsColorsOpen((prev) => !prev)}
        >
          <h3 className='font-bold'>COLORS</h3>
          {isColorsOpen ? <Minus /> : <Plus />}
        </button>
        {isColorsOpen && (
          <div className="optionsColors">
            {colorsOptions.map((color) => {
              const colorHex = color === 'cream' ? '#FFFDD0' : color
              const isSelected = colors.includes(color)

              return (
              <span 
              key={color}
              style={{ backgroundColor: colorHex }}
              className="w-[25px] h-[25px] rounded-full cursor-pointer inline-block border border-gray-500"
              onClick={() => handleColorToggle(color)}
              />
            )
            })}
          </div>          
        )}
      </div>
      
      <div className="wrapper-filter">
        <button
          className="button-isHide"
          onClick={() => setIsPricesOpen((prev) => !prev)}
        >
          <h3 className='font-bold'>PRICES</h3>
          {isPricesOpen ? <Minus /> : <Plus />}
        </button>
        {isPricesOpen && (
          <div className="options">
              {priceOptions.map((price) => (
                <label 
                  htmlFor={price}
                  className='inline-flex gap-1 font-light'
                  key={price.value}
                >
                  <input
                    type='checkbox'
                    name={price}
                    checked={prices.includes(price.value)}
                    onChange={() => setPrices(prices === price.value ? '' : price.value)}  
                  >
                  </input>
                  <span>{price.label}</span>
                </label>
              ))}
          </div>
        )}
 
      </div>
    </div>
  )
}

export default Filter