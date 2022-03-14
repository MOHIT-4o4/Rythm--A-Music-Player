import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'

export default function Search() {
  return (
    <React.Fragment>
      <div className="flex justify-center px-20 ml-20 mt-3">
        <div className="mb-3 xl:w-96">
          <div className="flex mb-0  outline-none">
            <input
              type="text"
              id="search"
              className="form-control relative m-0 block rounded-l-2xl w-full min-w-0 flex-auto bg-white bg-clip-padding px-4 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
              placeholder="Search...."
              required
            />
            <button className="btn items-center rounded-r-2xl bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition  duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
              <SearchIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
