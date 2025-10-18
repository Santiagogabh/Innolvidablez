import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProductCard from "../Components/ProductCard";
import TestimonialCard from "../Components/TestimonialCard";

export default function Home() {
  const { data: products = [], isLoading: loadingProducts } = useQuery({
    queryKey: ['products'],
    queryFn: () => base44.entities.Product.filter({ featured: true }, '-created_date', 6),
  });

  const { data: testimonials = [], isLoading: loadingTestimonials } = useQuery({
    queryKey: ['testimonials'],
    queryFn: () => base44.entities.Testimonial.list('-created_date', 3),
  });

  return (
    <div className="font-modern">
      {/* Hero Section */}
      <section id="home" className="min-h-[90vh] flex items-center justify-center bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <div className="space-y-8">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 tracking-tight leading-none">
                Fragancias<br />
                <span className="italic">Inolvidables</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
                Cada aroma cuenta una historia única que permanece en el tiempo
              </p>
            </div>
            
            <div className="pt-4">
              <Button 
                size="lg"
                variant="outline"
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 font-light px-8"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explorar colección
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-32 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
              Colección
            </h2>
            <p className="text-gray-500 font-light">
              Nuestra selección de fragancias esenciales
            </p>
          </div>
          
          {loadingProducts ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="space-y-6">
                  <div className="bg-gray-100 aspect-[3/4] animate-pulse" />
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-100 w-1/2 mx-auto animate-pulse" />
                    <div className="h-3 bg-gray-100 w-3/4 mx-auto animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Brand Philosophy Section */}
      <section id="about" className="py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight text-center">
              Nuestra Filosofía
            </h2>
            
            <div className="space-y-8 text-center">
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Creemos en la simplicidad y la autenticidad. Cada fragancia es una expresión 
                pura de ingredientes cuidadosamente seleccionados.
              </p>
              
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Sin artificios, sin excesos. Solo la esencia perfecta que se convierte en 
                un recuerdo inolvidable.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-200">
              <div className="text-center space-y-2">
                <div className="text-3xl font-light text-gray-900">100%</div>
                <div className="text-sm text-gray-500 font-light">Natural</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-light text-gray-900">+50</div>
                <div className="text-sm text-gray-500 font-light">Fragancias</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-light text-gray-900">24h</div>
                <div className="text-sm text-gray-500 font-light">Duración</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
              Testimonios
            </h2>
          </div>
          
          {loadingTestimonials ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-gray-100 h-48 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center space-y-12">
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
            Encuentra tu fragancia
          </h2>
          
          <Button 
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 font-light px-8"
          >
            Explorar colección
          </Button>
        </div>
      </section>
    </div>
  );
}