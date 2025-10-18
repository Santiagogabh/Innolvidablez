import React from "react";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white border border-gray-100 p-8 space-y-6">
      <p className="text-gray-600 font-light leading-relaxed italic">
        "{testimonial.comment}"
      </p>
      
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
          {testimonial.avatar_url ? (
            <img
              src={testimonial.avatar_url}
              alt={testimonial.customer_name}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <span className="text-gray-400 font-light text-sm">
              {testimonial.customer_name.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
        
        <div>
          <div className="text-sm text-gray-900 font-light">
            {testimonial.customer_name}
          </div>
          <div className="text-xs text-gray-400 font-light">
            {testimonial.age} años
          </div>
        </div>
      </div>
    </div>
  );
}