import React from 'react';
import { BookOpen, Code, Users, Rocket } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Yazılım Dünyasına Hoş Geldiniz
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Modern teknolojileri öğrenin, geleceği şekillendirin
              </p>
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors">
                Hemen Başla
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <BookOpen className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Kapsamlı Eğitim</h3>
                <p className="text-gray-600">
                  Başlangıç seviyesinden ileri düzeye kadar detaylı kurslar
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Code className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Pratik Yapın</h3>
                <p className="text-gray-600">
                  Gerçek dünya projeleriyle deneyim kazanın
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Users className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Topluluk</h3>
                <p className="text-gray-600">
                  Diğer öğrencilerle etkileşime geçin ve birlikte öğrenin
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Rocket className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Kariyer Fırsatları</h3>
                <p className="text-gray-600">
                  İş dünyasına hazırlanın ve fırsatları yakalayın
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Courses Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Popüler Kurslar</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Web Geliştirme',
                  description: 'HTML, CSS ve JavaScript temelleri',
                  image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80'
                },
                {
                  title: 'Python Programlama',
                  description: 'Sıfırdan ileri seviyeye Python',
                  image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80'
                },
                {
                  title: 'Mobil Uygulama Geliştirme',
                  description: 'React Native ile mobil uygulamalar',
                  image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=600&q=80'
                }
              ].map((course, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                      Kursa Git
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;