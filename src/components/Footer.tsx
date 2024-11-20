import React from 'react';
import { Mail, Phone, Info } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>salihorhannb@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+90 555 123 4567</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hakkımızda</h3>
            <p className="text-sm">
              SLearn, yazılım öğrenmek isteyenler için oluşturulmuş modern bir eğitim platformudur.
              Amacımız, kaliteli eğitimi herkes için erişilebilir kılmaktır.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-white">Ana Sayfa</a>
              <a href="#" className="block hover:text-white">Kurslar</a>
              <a href="#" className="block hover:text-white">SSS</a>
              <a href="#" className="block hover:text-white">Gizlilik Politikası</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} SLearn. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}