import Image from 'next/image'
import React from 'react'

function CategoryList({categoryList}) {
  return (
    <div className='mt-5'>
        <h2 className='text-primary font-bold text-2xl'>Shopping by Category</h2>
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-5 mt-2' >
            {categoryList.map((category, index)=>(
                <div className='flex flex-col  items-center bg-green-50  gap-2 p-3 rounded-lg group cursor-pointer hover:bg-green-600  '>
                    <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+category.attributes.icon.data.attributes.url}
                    width={50}
                    height={50}
                    alt='icon'
                    className='group-hover:scale-125 transition-all ease-in-out'
                    />
                    <h2 className='text-green-800'>{category.attributes.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CategoryList