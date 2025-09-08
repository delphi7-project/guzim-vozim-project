import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-orange-500 to-blue-600 p-2 rounded-lg">
                <Icon name="Truck" className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Возим Грузим</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Надёжные грузоперевозки по всей России. Оперативно, безопасно, выгодно.
              Работаем 24/7 для вашего комфорта.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+79991234567" className="flex items-center text-orange-400 hover:text-orange-300">
                <Icon name="Phone" className="h-5 w-5 mr-2" />
                +7 (999) 123-45-67
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                Услуги
              </Link>
              <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
                Тарифы
              </Link>
              <Link to="/geography" className="text-gray-300 hover:text-white transition-colors">
                География
              </Link>
              <Link to="/fleet" className="text-gray-300 hover:text-white transition-colors">
                Автопарк
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="flex flex-col space-y-2 text-gray-300">
              <div className="flex items-center">
                <Icon name="MapPin" className="h-4 w-4 mr-2" />
                Москва, ул. Транспортная, 1
              </div>
              <div className="flex items-center">
                <Icon name="Mail" className="h-4 w-4 mr-2" />
                info@vozim-gruzim.ru
              </div>
              <div className="flex items-center">
                <Icon name="Clock" className="h-4 w-4 mr-2" />
                Круглосуточно
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Возим Грузим. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};