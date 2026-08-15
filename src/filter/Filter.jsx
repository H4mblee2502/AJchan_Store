import SwitchToggle from '@mui/icons-material/TuneOutlined'
import Minus from '@mui/icons-material/RemoveOutlined'
import Plus from '@mui/icons-material/AddOutlined'
import './Filter.css'
import { useState } from 'react'

function Filter({
  onHide,
  selectedGender,
  setSelectedGender,
  selectedProductTypes = [],
  onProductTypeChange,
  selectedShoesTypes = [],
  onShoesTypesChange,
  selectedPrices = [],
  onPriceChange
}) {
  const [isGenderOpen, setIsGenderOpen] = useState(true)
  const [isProductTypeOpen, setIsProductTypeOpen] = useState(true)
  const [isShoeStyleOpen, setIsShoeStyleOpen] = useState(true)
  const [isPricesOpen, setIsPricesOpen] = useState(true)
  const [isColorsOpen, setIsColorsOpen] = useState(true)

  const genderOptions = ['Men', 'Women', 'Unisex']
  const productTypeOptions = [
    'Lifestyle',
    'Running',
    'Walking',
    'Sports',
    'Training & Gym'
  ]
  const shoeStyleOptions = ['Low Top', 'Mid Top', 'High Top']
  const colorsOptions = [
    'black',
    'white',
    'blue',
    'red',
    'yellow',
    'orange',
    'brown',
    'green',
    'cream',
    'pink',
    'purple'
  ]
  const priceOptions = [
    { label: '₱100 - ₱1000', value: '100-1000' },
    { label: '₱1500 - ₱2500', value: '1500-2500' },
    { label: '₱3000 - ₱4500', value: '3000-4500' },
    { label: '₱5000 +', value: '5000 +' }
  ]

  return (
    <div className="filter">
      {/* Hide Filter Button */}
      <div className="wrapper-filter">
        <button className="switchToggle" onClick={onHide}>
          <span>Hide Filter</span>
          <SwitchToggle />
        </button>
      </div>

      {/* Gender Filter */}
      <div className="wrapper-filter">
        <button
          className="genderSwitchToggle"
          onClick={() => setIsGenderOpen((prev) => !prev)}
        >
          <h3>GENDER</h3>
          {isGenderOpen ? <Minus /> : <Plus />}
        </button>
        {isGenderOpen && (
          <div className="options">
            {genderOptions.map((gender) => (
              <label key={gender}>
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={selectedGender === gender}
                  onChange={(e) => setSelectedGender(e.target.value)}
                />
                <span>{gender}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Product Type Filter */}
      <div className="wrapper-filter">
        <button
          className="genderSwitchToggle"
          onClick={() => setIsProductTypeOpen((prev) => !prev)}
        >
          <h3>PRODUCT TYPE</h3>
          {isProductTypeOpen ? <Minus /> : <Plus />}
        </button>
        {isProductTypeOpen && (
          <div className="options">
            {productTypeOptions.map((productType) => (
              <label key={productType}>
                <input
                  type="checkbox"
                  name={productType}
                  checked={selectedProductTypes.includes(productType)}
                  onChange={() => onProductTypeChange(productType)}
                />
                <span>{productType}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Shoes Style Filter */}
      <div className="wrapper-filter">
        <button
          className="genderSwitchToggle"
          onClick={() => setIsShoeStyleOpen((prev) => !prev)}
        >
          <h3>SHOES STYLE</h3>
          {isShoeStyleOpen ? <Minus /> : <Plus />}
        </button>
        {isShoeStyleOpen && (
          <div className="options">
            {shoeStyleOptions.map((shoes) => (
              <label key={shoes}>
                <input
                  type="checkbox"
                  name={shoes}
                  checked={selectedShoesTypes.includes(shoes)}
                  onChange={() => onShoesTypesChange(shoes)}
                />
                <span>{shoes}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Colors Filter */}
      <div className="wrapper-filter">
        <button
          className="genderSwitchToggle"
          onClick={() => setIsColorsOpen((prev) => !prev)}
        >
          <h3>COLORS</h3>
          {isColorsOpen ? <Minus /> : <Plus />}
        </button>
        {isColorsOpen && (
          <div className="options-colors">
            {colorsOptions.map((colors) => (
              <span key={colors} className={`color ${colors}`} />
            ))}
          </div>
        )}
      </div>

      {/* Prices Filter */}
      <div className="wrapper-filter">
        <button
          className="genderSwitchToggle"
          onClick={() => setIsPricesOpen((prev) => !prev)}
        >
          <h3>PRICES</h3>
          {isPricesOpen ? <Minus /> : <Plus />}
        </button>
        {isPricesOpen && (
          <div className="options">
            {priceOptions.map((prices) => (
              <label key={prices.value}>
                <input
                  type="checkbox"
                  name="priceRange"
                  checked={selectedPrices.includes(prices.value)}
                  onChange={() => onPriceChange(prices.value)}
                />
                <span>{prices.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Filter