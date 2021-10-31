import { ShoppingCartIcon } from '@heroicons/react/solid';

import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <header class="bg-gray-800 border-gray-200 py-6 shadow">
      <div className="container mx-auto max-w-7xl flex flex-wrap items-center justify-between m">
        <div className="flex">
          <Link to="/" className="text-2xl text-white font-semibold">MERN Shopping Cart</Link>
        </div>
        <div className="flex">
          <Link to="/cart" className="inline-flex text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-3 md:mr-0">
            <ShoppingCartIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
              Cart
            <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-red-600 text-white">4</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar