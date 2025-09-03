import { StarIcon } from '@heroicons/react/20/solid'

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center">
          {testimonial.name.charAt(0)}
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-medium text-gray-900">{testimonial.name}</h4>
          <p className="text-gray-500">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{testimonial.content}</p>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialCard;