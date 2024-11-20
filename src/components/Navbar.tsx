import React from 'react';
import { Code2, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">SLearn</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:bg-indigo-700 px-3 py-2 rounded-md">Ana Sayfa</a>
              <a href="#" className="hover:bg-indigo-700 px-3 py-2 rounded-md">Kurslar</a>
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-md font-medium hover:bg-indigo-50">
                Giriş Yap
              </button>
              <button className="bg-indigo-500 px-4 py-2 rounded-md font-medium hover:bg-indigo-400">
                Kayıt Ol
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block hover:bg-indigo-700 px-3 py-2 rounded-md">Ana Sayfa</a>
            <a href="#" className="block hover:bg-indigo-700 px-3 py-2 rounded-md">Kurslar</a>
            <button className="block w-full text-left hover:bg-indigo-700 px-3 py-2 rounded-md">
              Giriş Yap
            </button>
            <button className="block w-full text-left hover:bg-indigo-700 px-3 py-2 rounded-md">
              Kayıt Ol
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}