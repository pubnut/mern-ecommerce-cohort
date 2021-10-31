import { TrashIcon } from '@heroicons/react/solid';

const CartScreen = () => {
  return (
    <>
    <h1 className="text-2xl font-medium">Shopping Cart</h1>
    <div className="my-8 grid grid-flow-col-dense grid-cols-8 gap-5">
      <div className="col-span-6">
        <div className="bg-white shadow overflow-hidden sm:rounded-xl">
          <ul role="list" className="divide-y divide-gray-200">
            <li className="flex py-5">
              <div className="px-5 grid grid-cols-5 gap-5 block">
                <img src="http://placehold.it/200" className="rounded-md grid-span-1"></img>
                <span className="grid-span-1 inline-block align-middle">PlayStation 5</span>
                <div className="grid-span-1">$499</div>
                <div className="grid-span-1">
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                    Quantity
                  </label>
                  <select
                    id="quantity"
                    name="quantity"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    defaultValue="1"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="col-span-1 text-right">
                  <button type="button" className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <TrashIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                    Remove
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>      
      </div>
      <div className="col-span-2">
        <div className="rounded-xl bg-white shadow">
          <div className="p-5">
            <h2 className="text-xl font-semibold">Subtotal (X) items</h2>
            <p>$3,493.00</p>
          </div>
          <div className="border-t border-gray-200 p-5">
            <button type="button" className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default CartScreen
