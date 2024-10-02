
function AdvancedFilter(){
return(
    <div className="flex justify-center items-center p-4">
    <button id="dropdownDefault" data-dropdown-toggle="dropdown"
        className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        type="button">
        Advanced filter
        <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
    </button>

    <form action="#" method="get" id="dropdown" className="z-10 hidden max-w-screen-sm p-3 space-y-4 bg-white rounded-lg shadow dark:bg-gray-700"
        aria-labelledby="dropdownDefault">
        <h5 id="drawer-label" className="inline-flex items-center text-gray-500 dark:text-gray-400">
        Filter
        </h5>

        <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Price Range
        </label>
        <div className="grid grid-cols-2 gap-3">
            <div>
            <input id="min-price" type="range" min="0" max="7000" value="300" step="1"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600" />
            </div>

            <div>
            <input id="max-price" type="range" min="0" max="7000" value="3500" step="1"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600" />
            </div>

            <div className="flex items-center justify-between space-x-2 md:col-span-2">
            <div className="w-full">
                <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">From</label>
                <input type="number" id="min-price-input" value="300" min="0" max="7000"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="" />
            </div>

            <div className="w-full">
                <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">To</label>
                <input type="number" id="max-price-input" value="3500" min="0" max="7000"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="" />
            </div>
            </div>
        </div>
        </div>

        <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Sales
        </label>
        <div className="grid grid-cols-2 gap-3">
            <div>
            <input id="min-sales" type="range" min="0" max="7000" value="300" step="1"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600" />
            </div>

            <div>
            <input id="max-sales" type="range" min="0" max="7000" value="3500" step="1"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600" />
            </div>

            <div className="flex items-center justify-between space-x-2 md:col-span-2">
            <div className="w-full">
                <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">From</label>
                <input type="number" id="min-sales-input" value="1" min="0" max="300"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="" />
            </div>

            <div className="w-full">
                <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">To</label>
                <input type="number" id="max-sales-input" value="100" min="0" max="300"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="" />
            </div>
            </div>
        </div>
        </div>

        <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Category
        </label>
        <ul className="grid w-full grid-cols-2 gap-3">
            <li>
            <input type="checkbox" id="gaming" name="category" value="" className="hidden peer" />
            <label
                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer dark:hover:text-white dark:border-gray-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-gray-100 dark:bg-gray-600 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-600">
                Gaming
            </label>
            </li>
            <li>
            <input type="checkbox" id="electronics" name="category" value="" className="hidden peer" />
            <label
                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer dark:hover:text-white dark:border-gray-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-gray-100 dark:bg-gray-600 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-600">
                Electronics
            </label>
            </li>
            <li>
            <input type="checkbox" id="phone" name="category" value="" className="hidden peer" checked />
            <label
                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer dark:hover:text-white dark:border-gray-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-gray-100 dark:bg-gray-600 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-600">
                Phone
            </label>
            </li>

            <li>
            <input type="checkbox" id="tv-monitor" name="category" value="" className="hidden peer" />
            <label
                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer dark:hover:text-white dark:border-gray-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-gray-100 dark:bg-gray-600 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-600">
                TV/Monitor
            </label>
            </li>
            <li>
            <input type="checkbox" id="laptop" name="category" value="" className="hidden peer" />
            <label
                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer dark:hover:text-white dark:border-gray-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-gray-100 dark:bg-gray-600 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-600">
                Laptop
            </label>
            </li>
            <li>
            <input type="checkbox" id="watch" name="category" value="" className="hidden peer" checked />
            <label
                className="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer dark:hover:text-white dark:border-gray-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-gray-100 dark:bg-gray-600 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-600">
                Watch
            </label>
            </li>
        </ul>
        </div>

        <div>
        <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
            State
        </h6>

        <ul
            className="flex flex-col items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full border-b border-gray-200 dark:border-gray-600">
            <div className="flex items-center pl-3">
                <input id="state-all" type="radio" value="" name="list-radio" checked
                className="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                All
                </label>
            </div>
            </li>
            <li className="w-full border-b border-gray-200 dark:border-gray-600">
            <div className="flex items-center pl-3">
                <input id="state-new" type="radio" value="" name="list-radio"
                className="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                New
                </label>
            </div>
            </li>
            <li className="w-full">
            <div className="flex items-center pl-3">
                <input id="state-used" type="radio" value="" name="list-radio"
                className="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Refurbished
                </label>
            </div>
            </li>
        </ul>
        </div>

        <div className="flex mt-6 space-x-4">
        <button type="submit"
            className="px-2.5 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Show 32 Results
        </button>
        <button type="reset"
            className="px-2.5 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Reset
        </button>
        </div>
    </form>
    </div>
);
}

export default AdvancedFilter;
