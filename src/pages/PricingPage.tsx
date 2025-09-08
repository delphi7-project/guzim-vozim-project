import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export const PricingPage = () => {
  const [activeTab, setActiveTab] = useState('city');

  const cityTariffs = [
    {
      title: 'Газель (до 1,5 т)',
      volume: '9 м³',
      dimensions: '3×2×1,8 м',
      basePrice: '35',
      hourPrice: '500',
      popular: false,
      features: [
        'Грузоподъёмность до 1,5 т',
        'Объём кузова 9 м³',
        'Размеры 3×2×1,8 м',
        'Задняя и боковая загрузка'
      ]
    },
    {
      title: 'Газель Макси (до 2 т)',
      volume: '17 м³',
      dimensions: '4×2×2,2 м',
      basePrice: '40',
      hourPrice: '600',
      popular: true,
      features: [
        'Грузоподъёмность до 2 т',
        'Объём кузова 17 м³',
        'Размеры 4×2×2,2 м',
        'Увеличенный объём'
      ]
    },
    {
      title: 'Бычок (до 3 т)',
      volume: '25 м³',
      dimensions: '5×2,2×2,2 м',
      basePrice: '50',
      hourPrice: '800',
      popular: false,
      features: [
        'Грузоподъёмность до 3 т',
        'Объём кузова 25 м³',
        'Размеры 5×2,2×2,2 м',
        'Для крупных грузов'
      ]
    },
    {
      title: 'Манипулятор (до 5 т)',
      volume: '30 м³',
      dimensions: '6×2,4×2,4 м',
      basePrice: '80',
      hourPrice: '1200',
      popular: false,
      features: [
        'Грузоподъёмность до 5 т',
        'Кран-манипулятор',
        'Размеры 6×2,4×2,4 м',
        'Самопогрузка/разгрузка'
      ]
    }
  ];

  const intercityTariffs = [
    {
      title: 'Газель',
      distance: 'до 500 км',
      price: '22',
      minOrder: '3000',
      features: [
        'Грузоподъёмность до 1,5 т',
        'Быстрая доставка',
        'Попутная загрузка',
        'Документооборот'
      ]
    },
    {
      title: 'Газель Макси',
      distance: 'до 1000 км',
      price: '25',
      minOrder: '4000',
      features: [
        'Грузоподъёмность до 2 т',
        'Увеличенный объём',
        'Междугородние перевозки',
        'Страхование груза'
      ]
    },
    {
      title: 'Бычок',
      distance: 'до 1500 км',
      price: '30',
      minOrder: '5000',
      features: [
        'Грузоподъёмность до 3 т',
        'Дальние расстояния',
        'Надёжная доставка',
        'Отслеживание груза'
      ]
    },
    {
      title: 'Фура (20 т)',
      distance: 'любые расстояния',
      price: '35',
      minOrder: '10000',
      features: [
        'Грузоподъёмность до 20 т',
        'По всей России',
        'Крупные партии',
        'Экспедирование'
      ]
    }
  ];

  const additionalServices = [
    { name: 'Грузчики', price: '400 руб/час/чел' },
    { name: 'Упаковка', price: '200 руб/м³' },
    { name: 'Подъём на этаж (без лифта)', price: '15 руб/этаж/место' },
    { name: 'Сборка/разборка мебели', price: '1500 руб/комната' },
    { name: 'Экспресс-подача (до 30 мин)', price: '+50% к тарифу' },
    { name: 'Работа в праздники', price: '+30% к тарифу' },
    { name: 'Ночная работа (22:00-06:00)', price: '+25% к тарифу' },
    { name: 'Километр за МКАД', price: '30 руб/км' }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Тарифы и цены
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Прозрачное ценообразование без скрытых комиссий. 
            Фиксированные тарифы для всех видов перевозок.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab('city')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'city'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              По городу
            </button>
            <button
              onClick={() => setActiveTab('intercity')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'intercity'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Междугородние
            </button>
          </div>
        </div>

        {/* City Tariffs */}
        {activeTab === 'city' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {cityTariffs.map((tariff, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  tariff.popular ? 'border-2 border-orange-500' : ''
                }`}
              >
                {tariff.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl mb-2">{tariff.title}</CardTitle>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>Объём: {tariff.volume}</div>
                    <div>Размеры: {tariff.dimensions}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-orange-600 mb-1">
                      {tariff.basePrice} ₽
                    </div>
                    <div className="text-sm text-gray-500">за км</div>
                    <div className="text-lg font-semibold text-blue-600 mt-2">
                      {tariff.hourPrice} ₽
                    </div>
                    <div className="text-sm text-gray-500">за час простоя</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {tariff.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <Icon name="Check" className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full" variant={tariff.popular ? 'default' : 'outline'}>
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Intercity Tariffs */}
        {activeTab === 'intercity' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {intercityTariffs.map((tariff, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl mb-2">{tariff.title}</CardTitle>
                  <div className="text-sm text-gray-600">
                    {tariff.distance}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-orange-600 mb-1">
                      {tariff.price} ₽
                    </div>
                    <div className="text-sm text-gray-500">за км</div>
                    <div className="text-sm text-blue-600 mt-2">
                      мин. заказ {tariff.minOrder} ₽
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {tariff.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <Icon name="Check" className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full" variant="outline">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Дополнительные услуги
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="flex justify-between items-center py-4">
                  <span className="font-medium text-gray-900">{service.name}</span>
                  <span className="text-orange-600 font-semibold">{service.price}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <Icon name="Calculator" className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Точный расчёт</h3>
              <p className="text-gray-600">Стоимость рассчитывается по фактическому расстоянию и времени</p>
            </div>
            <div>
              <Icon name="CreditCard" className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Удобная оплата</h3>
              <p className="text-gray-600">Наличными, картой или безналичный расчёт с НДС</p>
            </div>
            <div>
              <Icon name="Receipt" className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Документы</h3>
              <p className="text-gray-600">Все документы для отчётности и налогового учёта</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Рассчитать точную стоимость?
          </h2>
          <p className="text-xl text-orange-100 mb-6">
            Воспользуйтесь калькулятором или получите индивидуальное предложение
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="animate-pulse-scale">
              <Icon name="Calculator" className="h-5 w-5 mr-2" />
              Калькулятор стоимости
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
              <Icon name="Phone" className="h-5 w-5 mr-2" />
              Получить предложение
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};