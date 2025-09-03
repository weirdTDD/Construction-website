import { Link } from 'react-router-dom'
import ServiceCard from '../../components/ui/ServiceCard.tsx'
import TestimonialCard from '../../components/ui/TestimonialCard.tsx'

const LandingPage = () => {
  const services = [
    {
      id: 1,
      title: 'Residential Construction',
      description: 'Custom home building and renovations tailored to your needs.',
      icon: '🏠'
    },
    {
      id: 2,
      title: 'Commercial Projects',
      description: 'Office buildings, retail spaces, and more for your business.',
      icon: '🏢'
    },
    {
      id: 3,
      title: 'Renovations',
      description: 'Transform your existing space into something extraordinary.',
      icon: '🛠️'
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: 'George Yeboah',
      role: 'Homeowner',
      content: 'Morhe Construction Group transformed our outdated home into a modern masterpiece. Highly recommend their services!',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Ohene Agyei',
      role: 'Business Owner',
      content: 'Professional team that delivered our commercial space on time and under budget.',
      rating: 5
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-30"
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Construction site"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Building Your Vision, Crafting Reality
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Quality construction services with over 20 years of experience in residential and commercial projects.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-yellow-600 md:py-4 md:text-lg md:px-10"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Comprehensive construction solutions for every need
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Morhe Construction Group
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Founded in 2003, Morhe Construction Group has grown from a small local contractor to a regional leader in construction services. Our team of skilled professionals is committed to excellence in every project we undertake.
              </p>
              <div className="mt-8">
                <div className="inline-flex rounded-md shadow">
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-secondary"
                  >
                    Learn more about us
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                className="rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Construction team"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to start your project?</span>
                <span className="block text-secondary">Get in touch today.</span>
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-indigo-200">
                Our team is ready to discuss your construction needs and provide a free, no-obligation quote.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
                >
                  Contact Us
                </Link>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-indigo-700"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage;