import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { OrderForm } from '@/components/forms/OrderForm';
import { useState } from 'react';

export const HomePage = () => {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const features = [
    {
      icon: 'Timer',
      title: 'Быстро',
      description: 'Минимальное время подачи транспорта. Работаем 24/7.'
    },
    {
      icon: 'Shield',
      title: 'Безопасно',
      description: 'Полная страховка грузов. Опытные водители.'
    },
    {
      icon: 'DollarSign',
      title: 'Выгодно',
      description: 'Конкурентные цены. Прозрачное ценообразование.'
    },
    {
      icon: 'MapPin',
      title: 'По всей России',
      description: 'Доставляем в любую точку страны.'
    }
  ];

  const services = [
    {
      icon: 'Package',
      title: 'Перевозка грузов',
      description: 'Любые виды грузов до 20 тонн'
    },
    {
      icon: 'Home',
      title: 'Переезды',
      description: 'Квартирные и офисные переезды'
    },
    {
      icon: 'Building',
      title: 'Стройматериалы',
      description: 'Доставка стройматериалов на объект'
    },
    {
      icon: 'Zap',
      title: 'Экспресс-доставка',
      description: 'Срочная доставка за 2-4 часа'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-50 to-blue-50 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-600/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                  Возим Грузим
                </span>
                <br />
                по всей России
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Надёжная транспортная компания с опытом более 10 лет. 
                Перевозим грузы любой сложности быстро, безопасно и выгодно.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="animate-pulse-scale text-lg px-8 py-4"
                  onClick={() => setShowOrderForm(true)}
                >
                  <Icon name="Calculator" className="h-5 w-5 mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  <Icon name="Phone" className="h-5 w-5 mr-2" />
                  Заказать звонок
                </Button>
              </div>
              <div className="flex items-center gap-8 mt-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <Icon name="Clock" className="h-4 w-4 mr-2 text-orange-500" />
                  Работаем 24/7
                </div>
                <div className="flex items-center">
                  <Icon name="Shield" className="h-4 w-4 mr-2 text-blue-500" />
                  Страховка грузов
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in">
              <img 
                src="/img/db1fc999-de7d-4a9a-9e38-598a12a4fed2.jpg" 
                alt="Грузоперевозки" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Почему выбирают нас?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы предоставляем профессиональные услуги грузоперевозок с гарантией качества
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-gradient-to-r from-orange-500 to-blue-600 w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Icon name={feature.icon as any} className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Полный спектр транспортных и логистических услуг
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="bg-orange-100 w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Icon name={service.icon as any} className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/services">
              <Button size="lg">
                Все услуги
                <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Готовы сделать заказ?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Получите расчёт стоимости за 2 минуты или закажите обратный звонок
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="animate-pulse-scale">
              <Icon name="Calculator" className="h-5 w-5 mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
              <Icon name="Phone" className="h-5 w-5 mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </section>

      {/* Order Form Modal */}
      {showOrderForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-semibold">Оформление заказа</h2>
              <button 
                onClick={() => setShowOrderForm(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <Icon name="X" className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <OrderForm onClose={() => setShowOrderForm(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};