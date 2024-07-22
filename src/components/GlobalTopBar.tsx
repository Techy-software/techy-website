import React from 'react'

const GlobalTopBar = () => {
  return (
    <div className="bg-white shadow-md w-full h-16 flex justify-between items-center px-6 fixed top-0 z-10">
      <div className="text-xl font-bold">Techy</div>
      <div className="flex items-center">
        <button className="mr-4">Export</button>
        <div className="flex items-center">
          <span className="mr-2">Ahmed Mealy</span>
          <img className="w-8 h-8 rounded-full" src="path_to_image" alt="Profile" />
        </div>
      </div>
    </div>
  )
}

export default GlobalTopBar