import React from 'react'

const Contact = () => {
  return (
    <div className='bg-white'>
      <div className ='relative bg-gray-900' >
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-30"
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Construction blueprint"
          />
        </div>
        <div>
          <h1 className='text-4xl font extra'>
            Contact Our Professionals
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Contact
