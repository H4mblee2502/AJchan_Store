import Header from './header/Header'
import Nav from './Nav/Nav'
import Filter from './filter/Filter'
import ListOfProducts from './Product/Product'
import { Product } from './Product/data/Products'
import './App.css'
import { useState } from 'react'
import SwitchFilter from '@mui/icons-material/TuneOutlined'

function App() {
  const [showFilter, setShowFilter] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('All Product')


  const [selectedGender, setSelectedGender] = useState('')
  const [selectedProductTypes, setSelectedProductTypes] = useState([])
  const [selectedShoesTypes, setSelectedShoesTypes] = useState([])
  const [selectedPrices, setSelectedPrices] = useState([])

  const handleCheckboxChange = (value, state, setState) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value))
    } else {
      setState([...state, value])
    }
  }


  const isPriceRange = (price, range) => {
    const numPrice =
      typeof price === 'number'
        ? price
        : parseFloat(String(price).replace(/[^0-9.-]+/g, '')) || 0

    if (range === '100-1000') return numPrice >= 100 && numPrice <= 1000
    if (range === '1500-2500') return numPrice >= 1500 && numPrice <= 2500
    if (range === '3000-4500') return numPrice >= 3000 && numPrice <= 4500
    if (range === '5000 +') return numPrice >= 5000
    return true
  }

  const filteredProducts = Product.filter((item) => {
    const matchesBrand =
      selectedCategory === 'All Product' || item.brand === selectedCategory
    if (!matchesBrand) return false

    if (selectedGender && item.gender !== selectedGender) return false
    if (
      selectedProductTypes.length > 0 &&
      !selectedProductTypes.includes(item.product_type)
    ) {
      return false
    }
    if (
      selectedShoesTypes.length > 0 &&
      !selectedShoesTypes.includes(item.shoes_style)
    ) {
      return false
    }
    if (
      selectedPrices.length > 0 &&
      !selectedPrices.some((range) => isPriceRange(item.price, range))
    ) {
      return false
    }

    return true
  })

  return (
    <div>
      <Header />
      <Nav
        selectedCategory={selectedCategory}
        onSelectedCategory={setSelectedCategory}
      />
      <div className="main">
        {showFilter ? (
          <Filter
            onHide={() => setShowFilter((prev) => !prev)}
            selectedGender={selectedGender}
            setSelectedGender={setSelectedGender}
            selectedProductTypes={selectedProductTypes}
            onProductTypeChange={(type) =>
              handleCheckboxChange(
                type,
                selectedProductTypes,
                setSelectedProductTypes
              )
            }
            selectedShoesTypes={selectedShoesTypes}
            onShoesTypesChange={(style) =>
              handleCheckboxChange(
                style,
                selectedShoesTypes,
                setSelectedShoesTypes
              )
            }
            selectedPrices={selectedPrices}
            onPriceChange={(price) =>
              handleCheckboxChange(price, selectedPrices, setSelectedPrices)
            }
          />
        ) : (
          <button
            className="switch-btn"
            onClick={() => setShowFilter((prev) => !prev)}
          >
            <SwitchFilter />
          </button>
        )}
        <ListOfProducts listOfItemProducts={filteredProducts} />
      </div>
    </div>
  )
}

export default App