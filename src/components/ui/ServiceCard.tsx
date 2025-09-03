

interface Service {
  id: number
  title: string
  description: string
  icon: string
  features?: string[]
}

interface ServiceCardProps {
  service: Service
  detailed?: boolean
}

const ServiceCard = ({ service, detailed = false }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-3">{service.icon}</span>
          <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{service.description}</p>
        
        {detailed && service.features && (
          <ul className="space-y-2 mb-4">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default ServiceCard;
