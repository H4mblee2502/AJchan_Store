import { createContext, useContext } from "react"
import { useProductFilter } from '../hooks/useProductFilter'

export const FilterContext = createContext({
  products: [],
  
  brands: 'All Product',
  categories: ['All Product', 'Nike', 'Adidas', 'Converse', 'Puma', 'Vans'],
  setbrands: () => {},

  gender: '',
  setGender: () => {},
  genderOptions: ['Men', 'Women', 'Unisex'],

  productType: [],
  setProductType: () => {},
  productTypeOptions: [
    'Lifestyle',
    'Running',
    'Walking',
    'Sports',
    'Training & Gym'
  ],

  shoeStyle: '',
  setShoeStyle: () => {},
  shoeStyleOptions: ['Low Top', 'Mid Top', 'High Top'],

  colors: [],
  setColors: () => {},
  colorsOptions: [
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
  ],

  prices: '',
  setPrices: () => {},
  priceOptions: [
    { label: '₱100 - ₱1000', value: '100-1000' },
    { label: '₱1500 - ₱2500', value: '1500-2500' },
    { label: '₱3000 - ₱4500', value: '3000-4500' },
    { label: '₱5000 +', value: '5000 +' }
  ],

  setShowFilter: () => {},

  relevance: 'RELEVANCE',
  setRelevance: () => {},
  optionSorted: ['RELEVANCE', 'HIGH TO LOW', 'LOW TO HIGH', 'NEW PRODUCTS'],

})

export const FilterProvider = ({ children }) => {
  const filterState = useProductFilter()
  const categories = ['All Product', 'Nike', 'Adidas', 'Converse', 'Puma', 'Vans']
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
  const optionSorted = ['RELEVANCE','HIGH TO LOW', 'LOW TO HIGH', 'NEW PRODUCTS'];
  return (
    <FilterContext.Provider value={{ 
        ...filterState, 
        categories,
        genderOptions,
        productTypeOptions,
        shoeStyleOptions,
        colorsOptions,
        priceOptions,
        optionSorted
        }}>
      {children}
    </FilterContext.Provider>
  )
}

export default function useFilter() {
  return useContext(FilterContext)
}