import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

const containerStyle = {
  width: "100%",
  height: "400px"
}

const center = {
  lat:6.6885,
  lng:-1.6244,
}



const Contact: React.FC = () => {

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    console.log("Form submitted", formData);
  };

  return (
    <div className='bg-white'>
      <div className ='relative bg-gray-900' >
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-30"
            src="/contact.png"
            alt="Construction blueprint"
          />
        </div>
        <div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>
            Contact Our Professionals
          </h1>
          <p className='mt-6 max-w-3xl text-xl text-gray-300'>Your reliable construction partner for life.</p>
        </div>
      </div>

    

      <section className=' w-full h-max bg-white py-10 px-8 md:px-20'>

        <div className='grid md:grid-cols-2 gap-12'>

          {/*Left Column*/}
          <div className='flex flex-col justify-center'>
            <p className='uppercase tracking-wider text-gray-500 mb-2'>
              Contact Us
            </p>
            <h2 className="text-6xl font-bold text-gray-900 mb-6 leading-snug">
                Let's start a <br />
              <span className="text-blue-900">project together.</span>
            </h2>


            <div className='space-y-24 mb-10 mt-16'>
              <div>
                <h3 className='font-bold text-gray-900'>Headquaters</h3>
                <p className='text-gray-600 text-md'>
                  Planners Avenue, Floor 3 <br/> 
                  Spintex-Road <br/>
                  Accra-Ghana <br />
                </p>
              </div>

              <div className='flex justify-between items-center'>
                <div>
                  <h3 className='font-semibold text-gray-900'>Phone</h3>
                  <p className='text-gray-600 text-sm'>+233 50 775 8740</p>
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900'>Email</h3>
                  <p className='text-gray-600 text-sm'> edwardmorhe777@gmail.com</p>
                </div>
              </div>
                
            </div>
          </div>

          {/*Right Column*/}

          <div className='bg-gray-100 p-8 rounded-md shadow-sm'>
            <form onSubmit={handleSubmit} className='space-y-7'>
              <div className ='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <input type="text" name="firstName" placeholder='First Name' value={formData.firstName} onChange={handleChange} 
                  className='w-full p-3 border rounded-md focus:ring-2 hover:ring-blue-700'
                />

                <input type="text" name="lastName" placeholder='Last Name' value={formData.lastName} onChange={handleChange} 
                  className='w-full p-3 border rounded-md focus:ring-blue-700'
                />
              </div>

              <input type="text" name="phone" placeholder='Enter your number' value={formData.phone} onChange={handleChange} 
               className='w-full p-3 border rounded-md focus:ring-2 hover:ring-blue-700'
              />

              <input type="email" name="email" placeholder='Enter your email' value={formData.email} onChange={handleChange} 
                className='w-full p-3 border rounded-md focus:ring-2 hover:ring-blue-700'
              />

              <textarea name="message" placeholder="What would you like to discuss?" value={formData.message} onChange={handleChange}
                rows={5}
                className='w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-700'
              />
              
              <button 
                type="submit"
                className='bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-400'
                >
                Send Message
              </button>

            </form>

          </div>

        </div>

        {/*Map*/}

        <div className='mt-16'>
          <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY!}>
            <GoogleMap 
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>

        </div>
        
      </section>

      
    </div>
  )
}

export default Contact;
