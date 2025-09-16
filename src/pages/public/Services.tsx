import ServiceCard from '../../components/ui/ServiceCard.tsx'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Residential Construction',
      description: 'From custom homes to renovations, we bring your residential vision to life with quality craftsmanship.',
      icon: '🏠',
      features: [
        'Custom home building',
        'Home additions',
        'Kitchen & bathroom remodels',
        'Whole-house renovations'
      ]
    },
    {
      id: 2,
      title: 'Commercial Construction',
      description: 'We build functional, attractive commercial spaces that meet your business needs and exceed expectations.',
      icon: '🏢',
      features: [
        'Office buildings',
        'Retail spaces',
        'Restaurants',
        'Medical facilities'
      ]
    },
    {
      id: 3,
      title: 'Renovations & Remodeling',
      description: 'Transform your existing space into something fresh, functional, and beautiful.',
      icon: '🛠️',
      features: [
        'Interior remodeling',
        'Exterior renovations',
        'Structural upgrades',
        'Historic restorations'
      ]
    },
    {
      id: 4,
      title: 'Project Management',
      description: 'Let us handle the coordination and oversight of your construction project from start to finish.',
      icon: '📋',
      features: [
        'Full project coordination',
        'Subcontractor management',
        'Permit acquisition',
        'Budget tracking'
      ]
    },
    {
      id: 5,
      title: 'Design-Build',
      description: 'Seamless integration of design and construction for a streamlined building experience.',
      icon: '✏️',
      features: [
        'Architectural design',
        'Engineering services',
        'Space planning',
        'Material selection'
      ]
    },
    {
      id: 6,
      title: 'Consulting',
      description: 'Expert advice to help you plan and execute your construction project successfully.',
      icon: '💡',
      features: [
        'Feasibility studies',
        'Cost estimating',
        'Construction planning',
        'Quality control'
      ]
    }
  ]

  return (
    <div className="bg-white">
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-30"
            src="/public/about.png"
            alt="Construction blueprint"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Comprehensive construction solutions tailored to your needs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What We Offer
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            From concept to completion, we provide a full range of construction services
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} detailed />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services