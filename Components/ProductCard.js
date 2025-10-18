import React from "react";
import { Button } from "@/components/ui/button";

export default function ProductCard({ product }) {
  return (
    <div className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 mb-6">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>
      
      <div className="space-y-3 text-center">
        <h3 className="text-lg font-light text-gray-900 tracking-tight">
          {product.name}
        </h3>
        
        {product.description && (
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            {product.description}
          </p>
        )}
        
        <div className="pt-2">
          <div className="text-base text-gray-900 font-light mb-4">
            ${product.price}
          </div>
          
          <Button 
            variant="outline"
            className="w-full border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 font-light"
            size="sm"
          >
            Añadir
          </Button>
        </div>
      </div>
    </div>
  );
}