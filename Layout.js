import React from "react";
import { Menu, X, Instagram, Facebook, Twitter } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      <style>
        {`
          :root {
            --primary: #1a1a1a;
            --secondary: #666666;
            --accent: #e8e8e8;
          }
          
          .font-modern {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            letter-spacing: -0.02em;
          }
          
          .hover-minimal {
            transition: opacity 0.2s ease;
          }
          
          .hover-minimal:hover {
            opacity: 0.6;
          }
        `}
      </style>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 font-modern">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-light tracking-tight text-gray-900">
                INOLVIDABLES
              </h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-12">
                <a href="#home" className="text-sm text-gray-600 hover-minimal font-light">
                  Inicio
                </a>
                <a href="#products" className="text-sm text-gray-600 hover-minimal font-light">
                  Colección
                </a>
                <a href="#about" className="text-sm text-gray-600 hover-minimal font-light">
                  Filosofía
                </a>
                <a href="#contact" className="text-sm text-gray-600 hover-minimal font-light">
                  Contacto
                </a>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover-minimal"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-6 pt-4 pb-6 space-y-4">
              <a href="#home" className="block text-sm text-gray-600 hover-minimal font-light">
                Inicio
              </a>
              <a href="#products" className="block text-sm text-gray-600 hover-minimal font-light">
                Colección
              </a>
              <a href="#about" className="block text-sm text-gray-600 hover-minimal font-light">
                Filosofía
              </a>
              <a href="#contact" className="block text-sm text-gray-600 hover-minimal font-light">
                Contacto
              </a>
            </div>
          </div>
        )}
      </nav>
      
      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>
      
      {/* Footer */}
      <footer id="contact" className="bg-white border-t border-gray-100 font-modern">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Brand */}
            <div className="space-y-6">
              <h3 className="text-xl font-light tracking-tight text-gray-900">
                INOLVIDABLES
              </h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                Fragancias que permanecen en la memoria.
              </p>
            </div>
            
            {/* Contact */}
            <div className="space-y-6">
              <h4 className="text-sm font-light text-gray-900 tracking-wide uppercase">Contacto</h4>
              <div className="space-y-3 text-sm text-gray-500 font-light">
                <p>hola@inolvidables.com</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            {/* Social */}
            <div className="space-y-6">
              <h4 className="text-sm font-light text-gray-900 tracking-wide uppercase">Síguenos</h4>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover-minimal">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover-minimal">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover-minimal">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom */}
          <div className="border-t border-gray-100 pt-10 mt-16">
            <p className="text-xs text-gray-400 font-light text-center">
              © 2024 Inolvidables. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}