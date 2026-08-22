import { useState, useMemo } from "react"
import Product from "../data/Products"

const getNumericPrice = (price) => {
  if (typeof price === 'number') return price
  return parseFloat(String(price || 0).replace(/[^0-9.-]+/g, '')) || 0
}

export const useProductFilter = () => {
    const [brands, setbrands] = useState('All Product')
    const [gender, setGender] = useState('')
    const [productType, setProductType] = useState([])
    const [shoeStyle, setShoeStyle] = useState('')
    const [colors, setColors] = useState([])
    const [prices, setPrices] = useState('')
    const [showFilter, setShowFilter] = useState(true)
    const [relevance, setRelevance] = useState('RELEVANCE')

    const filteredProduct = useMemo(() => {
        const filtered = Product.filter((item) =>{

            const selectedBrand = brands === 'All Product' || item.brand === brands // By default All product and matches the brands value
            const selectedGender = !gender || item.gender === gender // Matches the Gender

            const itemTypes = Array.isArray(item.product_type) ? item.product_type : [item.product_type]
            const selectedProductType =
                    productType.length === 0 ||
                    productType.some((type) => itemTypes.includes(type))// Check if there's a one single string OR array

            const selectedShoeStyle = shoeStyle.length === 0 || shoeStyle.includes(item.shoes_style)//Check the Shoe Style

            const itemColors = Array.isArray(item.colors) ? item.colors : [item.colors]
            const clickColors =
                colors.length === 0 || 
                colors.some((selectedColor) => 
                itemColors.some((itemColor) => 
                    itemColor?.toLowerCase() === selectedColor?.toLowerCase()
                    ))

            const numericPrice = typeof item.price === 'number' 
            ? item.price 
            : parseFloat(String(item.price || 0).replace(/[^0-9.]/g, '')) || 0

            const selectedPrices = (() => {
            // 1. If no price filter selected, show everything
            if (!prices) return true

            const priceStr = String(prices).toLowerCase()

            // 2. Handle "5k plus", "5000+", or "over 5000" (Greater than or equal)
            if (priceStr.includes('+') || priceStr.includes('plus') || priceStr.includes('over')) {
            // Extract numbers: converts '5k plus' -> 5000 (if 'k' is used) or strips 'plus' -> 5000
            let minPrice = parseFloat(priceStr.replace(/[^0-9.]/g, '')) || 0
            if (priceStr.includes('k') && minPrice < 1000) {
            minPrice *= 1000 // Converts '5k' to 5000
            }
            return numericPrice >= minPrice
            }

            // 3. Handle Range formats like "1000-5000" or "0-50"
            if (priceStr.includes('-')) {
            const [minStr, maxStr] = priceStr.split('-')
            const min = parseFloat(minStr.replace(/[^0-9.]/g, '')) || 0
            const max = parseFloat(maxStr.replace(/[^0-9.]/g, '')) || Infinity
            return numericPrice >= min && numericPrice <= max
            }

            // 4. Fallback for single values (e.g. "5000" -> less than or equal)
            return numericPrice <= (parseFloat(priceStr.replace(/[^0-9.]/g, '')) || Infinity)
            })()

            return selectedBrand && selectedGender && selectedProductType && selectedShoeStyle && clickColors && selectedPrices
        })

        return [...filtered].sort((a, b) => {
            const priceA = getNumericPrice(a.price)
      const priceB = getNumericPrice(b.price)
            if (relevance === 'HIGH TO LOW') {
            return priceB - priceA
            }
            if (relevance === 'LOW TO HIGH') {
            return priceA - priceB
            }
            if (relevance === 'NEW PRODUCTS') {
            return Number(b.id) - Number(a.id)
            }
      return 0 
        })
    }, [brands, gender, productType, shoeStyle, colors, prices, relevance])

    return {
        products: filteredProduct,
        brands,
        setbrands,
        gender,
        setGender,
        productType,
        setProductType,
        shoeStyle,
        setShoeStyle,
        colors,
        setColors,
        prices,
        setPrices,
        showFilter,
        setShowFilter,
        relevance,
        setRelevance,
    }
}