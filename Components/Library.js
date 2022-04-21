import React from 'react'
import IMAGES from '../public/images/images'
import Image from 'next/image'

function Library() {
  return (
    <div
      className="mt-16 h-screen select-none flex-nowrap overflow-y-scroll px-10 pb-52 scrollbar-hide"
      draggable="false"
    >
      <div className="mt-1 ">
        <h2 className="pb-3 text-2xl font-bold text-white">Browse All</h2>
        <div className="flex flex-wrap justify-around gap-y-10 gap-x-3 text-white ">
          {[
            {
              Name: 'Folk',
              imgs: IMAGES.logofolk,
              description: 'Beautiful instrumental music',
            },
            {
              Name: 'Classical',
              imgs: IMAGES.logoclassical,
              description: 'Beautiful instrumental music',
            },
            {
              Name: 'Rock',
              imgs: IMAGES.logoinstrumental,
              description: 'Beautiful instrumental music',
            },
          ].map((item, index) => (
            <div
              key={item.Name + index}
              className="h-56 w-44 justify-center  rounded-md border-0 bg-blue-100 bg-opacity-10 hover:bg-opacity-[.14]"
            >
              <div className="mt-4 flex justify-center overflow-hidden rounded-xl border-0">
                <Image src={item.imgs} height={145} width={145} />
              </div>
              <div className="mt-3 ml-4 mr-4 truncate">
                <h2 className="text-sm">{item.Name}</h2>
                <p className="truncate text-sm text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Library
