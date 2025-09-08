import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export const FleetPage = () => {
  const vehicles = [
    {
      type: 'Газель',
      model: 'ГАЗ-3302',
      capacity: '1.5 т',
      volume: '9 м³',
      dimensions: '3.0 × 2.0 × 1.8 м',
      count: 45,
      features: ['Тентованный кузов', 'Задняя и боковая загрузка', 'Гидроборт (по запросу)'],
      image: '/img/c663c48f-cdc8-4f25-bc9a-1542d60da6ae.jpg',
      price: 'от 35 ₽/км',
      popular: true
    },
    {
      type: 'Газель Макси',
      model: 'ГАЗ-A21R22',
      capacity: '2 т',
      volume: '17 м³',
      dimensions: '4.0 × 2.0 × 2.2 м',
      count: 32,
      features: ['Увеличенный кузов', 'Низкая погрузочная высота', 'Надёжная фиксация груза'],
      image: '/img/c663c48f-cdc8-4f25-bc9a-1542d60da6ae.jpg',
      price: 'от 40 ₽/км',
      popular: false
    },
    {
      type: 'Бычок',
      model: 'ГАЗ-3309',
      capacity: '3 т',
      volume: '25 м³',
      dimensions: '5.0 × 2.2 × 2.2 м',
      count: 28,
      features: ['Большой объём', 'Прочная конструкция', 'Подходит для габаритных грузов'],
      image: '/img/c663c48f-cdc8-4f25-bc9a-1542d60da6ae.jpg',
      price: 'от 50 ₽/км',
      popular: false
    },
    {
      type: 'Грузовик 5т',
      model: 'КАМАЗ-4308',
      capacity: '5 т',
      volume: '32 м³',
      dimensions: '6.0 × 2.4 × 2.4 м',
      count: 18,
      features: ['Повышенная грузоподъёмность', 'Крепкая рама', 'Междугородние перевозки'],
      image: '/img/c663c48f-cdc8-4f25-bc9a-1542d60da6ae.jpg',
      price: 'от 65 ₽/км',
      popular: false
    },
    {
      type: 'Манипулятор',
      model: 'КАМАЗ с КМУ',
      capacity: '5 т + кран 3 т',
      volume: '30 м³',
      dimensions: '6.0 × 2.4 × 2.4 м',
      count: 12,
      features: ['Кран-манипулятор', 'Самостоятельная погрузка', 'Стрела до 15 м'],
      image: '/img/c663c48f-cdc8-4f25-bc9a-1542d60da6ae.jpg',
      price: 'от 80 ₽/км',
      popular: false
    },
    {
      type: 'Рефрижератор',
      model: 'МАЗ-4371',
      capacity: '3 т',
      volume: '20 м³',
      dimensions: '4.5 × 2.0 × 2.0 м',
      count: 8,
      features: ['Температурный режим -20/+20°C', 'Мониторинг температуры', 'Скоропортящиеся грузы'],
      image: '/img/c663c48f-cdc8-4f25-bc9a-1542d60da6ae.jpg',
      price: 'от 55 ₽/км',
      popular: false
    },
    {
      type: 'Фура',
      model: 'КАМАЗ-5490 + полуприцеп',
      capacity: '20 т',
      volume: '82 м³',
      dimensions: '13.6 × 2.45 × 2.7 м',
      count: 15,
      features: ['Максимальная загрузка', 'Дальние расстояния', 'Еврофура стандарт'],
      image: '/img/c663c48f-cdc8-4f25-bc9a-1542d60da6ae.jpg',
      price: 'от 35 ₽/км',
      popular: false
    },
    {
      type: 'Низкорамный трал',
      model: 'КАМАЗ + низкорамный полуприцеп',
      capacity: '25 т',
      volume: 'негабарит',
      dimensions: 'до 12 × 2.5 × 4 м',
      count: 6,
      features: ['Негабаритные грузы', 'Спецразрешения', 'Сопровождение'],
      image: '/img/c663c48f-cdc8-4f25-bc9a-1542d60da6ae.jpg',
      price: 'по договору',
      popular: false
    }
  ];

  const fleetStats = [
    {
      icon: 'Truck',
      value: '164',
      label: 'Единиц техники',
      color: 'blue'
    },
    {
      icon: 'Users',
      value: '180+',
      label: 'Водителей',
      color: 'green'
    },
    {
      icon: 'Calendar',
      value: '10',
      label: 'Лет опыта',
      color: 'orange'
    },
    {
      icon: 'Award',
      value: '99.8%',
      label: 'Доставок в срок',
      color: 'purple'
    }
  ];

  const advantages = [
    {
      icon: 'Shield',
      title: 'Техосмотр и страховка',
      description: 'Весь транспорт проходит регулярный техосмотр и имеет действующую страховку'
    },
    {
      icon: 'Wrench',
      title: 'Собственный автопарк',
      description: 'Все автомобили находятся в собственности компании, что гарантирует их надёжность'
    },
    {
      icon: 'Clock',
      title: 'Регулярное обслуживание',
      description: 'Плановое ТО и ремонт в собственной сервисной службе'
    },
    {
      icon: 'Fuel',
      title: 'Топливо и расходники',
      description: 'Все автомобили заправлены качественным топливом и укомплектованы'
    },
    {
      icon: 'MapPin',
      title: 'GPS-мониторинг',
      description: 'Отслеживание местоположения и контроль движения в реальном времени'
    },
    {
      icon: 'Headphones',
      title: 'Связь с водителями',
      description: 'Постоянная связь с экипажами для оперативного решения вопросов'
    }
  ];

  const getColorClass = (color: string) => {
    const colorMap = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      orange: 'text-orange-600',
      purple: 'text-purple-600'
    };
    return colorMap[color as keyof typeof colorMap] || 'text-gray-600';
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Наш автопарк
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Современный парк грузовых автомобилей различной грузоподъёмности. 
            Собственный транспорт с опытными водителями для любых задач.
          </p>
        </div>

        {/* Fleet Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {fleetStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Icon name={stat.icon as any} className={`h-12 w-12 mx-auto mb-4 ${getColorClass(stat.color)}`} />
                <div className={`text-3xl font-bold mb-2 ${getColorClass(stat.color)}`}>
                  {stat.value}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Fleet Image */}
        <div className="mb-16">
          <img 
            src="/img/c663c48f-cdc8-4f25-bc9a-1542d60da6ae.jpg" 
            alt="Автопарк компании Возим Грузим" 
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Vehicle Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Типы транспорта
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  vehicle.popular ? 'border-2 border-orange-500' : ''
                }`}
              >
                {vehicle.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white z-10">
                    Популярный
                  </Badge>
                )}
                <CardHeader>
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-orange-500 to-blue-600 w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Icon name="Truck" className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-1">{vehicle.type}</CardTitle>
                    <p className="text-sm text-gray-600">{vehicle.model}</p>
                    <Badge variant="outline" className="mt-2">
                      {vehicle.count} единиц
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Грузоподъёмность:</span>
                      <span className="font-medium">{vehicle.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Объём кузова:</span>
                      <span className="font-medium">{vehicle.volume}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Размеры кузова:</span>
                      <span className="font-medium text-xs">{vehicle.dimensions}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">Особенности:</h4>
                    <ul className="space-y-1">
                      {vehicle.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                          <Icon name="Check" className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="text-center mb-4">
                      <span className="text-xl font-bold text-orange-600">{vehicle.price}</span>
                    </div>
                    <Button className="w-full" variant={vehicle.popular ? 'default' : 'outline'}>
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Advantages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Преимущества нашего автопарка
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-blue-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name={advantage.icon as any} className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Требования к транспорту
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Все автомобили нашего парка соответствуют строгим требованиям безопасности и качества
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Icon name="CheckCircle" className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-medium mb-1">Техосмотр</h4>
              <p className="text-sm text-gray-600">Каждые 6 месяцев</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Icon name="Shield" className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-medium mb-1">Страховка</h4>
              <p className="text-sm text-gray-600">ОСАГО + КАСКО</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Icon name="Wrench" className="h-6 w-6 text-orange-600" />
              </div>
              <h4 className="font-medium mb-1">Обслуживание</h4>
              <p className="text-sm text-gray-600">Регулярное ТО</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Icon name="Star" className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-medium mb-1">Состояние</h4>
              <p className="text-sm text-gray-600">Отличное</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Подберём подходящий транспорт
          </h2>
          <p className="text-xl text-orange-100 mb-6">
            Наши специалисты помогут выбрать оптимальный тип транспорта для ваших грузов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="animate-pulse-scale">
              <Icon name="Calculator" className="h-5 w-5 mr-2" />
              Подобрать транспорт
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
              <Icon name="Phone" className="h-5 w-5 mr-2" />
              Консультация
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};