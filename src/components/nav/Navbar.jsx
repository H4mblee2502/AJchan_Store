import React from 'react'
import Logo from '../../assets/Logo.png'
import PersonIcon from '@mui/icons-material/Person'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import useFilter from '../../context/useContext'

function Navbar() {
  const { categories, brands, setbrands } = useFilter()

  const buttonBaseClass =
    "border-none text-base font-semibold whitespace-nowrap cursor-pointer relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-[#0B0909] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left"

  const buttonActiveClass =
    "font-bold underline underline-offset-[6px] decoration-2 text-black"

  return (
    <div className="mx-[6.5rem]">
      <div className="grid grid-cols-3 items-center mt-1">

        <div className="flex items-center gap-2 cursor-pointer">
          <img src={Logo} alt="Logo" width={45} />
          <span className="font-semibold">AJChan Store</span>
        </div>

        <div className="justify-self-center inline-flex gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${buttonBaseClass} ${brands === cat ? buttonActiveClass : ''}`}
              onClick={() => setbrands(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="justify-self-end flex items-center">
          <button
            type="button"
            className="mr-4 p-2 border-none font-semibold text-base cursor-pointer"
          >
            Sign In
          </button>

          <ul className="list-none inline-flex gap-4">
            <li className="cursor-pointer flex items-center">
              <PersonIcon />
            </li>
            <li className="cursor-pointer flex items-center">
              <FavoriteBorderIcon />
            </li>
            <li className="cursor-pointer flex items-center">
              <ShoppingCartOutlinedIcon />
            </li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default Navbar