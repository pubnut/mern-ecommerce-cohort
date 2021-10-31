const ProductScreen = () => {
  return (
    <>
    <h1 className="text-2xl font-medium">Product Detail</h1>
    <div className="my-8">
      <div className="grid grid-flow-col-dense grid-cols-8 gap-5">
        <div className="col-span-3">
          <img className="w-full rounded-xl" src="http://placehold.it/200"></img>
        </div>
        <div className="col-span-3">
          <div className="rounded-xl bg-white shadow p-5">
            <h3 className="text-xl font-semibold mb-3">Playstation 5</h3>
            <p className="text-base font-normal text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div className="col-span-2">
          <div className="rounded-xl bg-white shadow">
            <dl className="divide-y divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 px-5">
                <dt className="text-sm font-medium text-gray-500">Price</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">$350.00</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 px-5">
                <dt className="text-sm font-medium text-gray-500">Status</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">In Stock</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 px-5">
                <dt className="text-sm font-medium text-gray-500">Quantity</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
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
                </dd>
              </div>
            </dl>
            <div className="border-t border-gray-200 p-5">
              <button type="button" className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default ProductScreen
