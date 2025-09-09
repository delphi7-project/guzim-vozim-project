import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const OversizedServicesPage = () => {
  const oversizedTypes = [
    {
      title: 'Строительная техника',
      description: 'Экскаваторы, бульдозеры, краны, погрузчики',
      maxWeight: 'до 80 тонн',
      maxSize: '20×4×4 м',
      features: ['Низкорамные тралы', 'Сопровождение ГИБДД', 'Разрешительные документы'],
      icon: 'Construction'
    },
    {
      title: 'Промышленное оборудование',
      description: 'Станки, прессы, котлы, трансформаторы',
      maxWeight: 'до 120 тонн',
      maxSize: '15×3.5×4.5 м',
      features: ['Специальные крепления', 'Демонтаж/монтаж', 'Страхование до 50 млн ₽'],
      icon: 'Settings'
    },
    {
      title: 'Модульные конструкции',
      description: 'Бытовки, контейнеры, модульные дома',
      maxWeight: 'до 40 тонн',
      maxSize: '12×3×3.5 м',
      features: ['Быстрая погрузка', 'Сохранность конструкций', 'Доставка на объект'],
      icon: 'Home'
    },
    {
      title: 'Яхты и катера',
      description: 'Водный транспорт любых размеров',
      maxWeight: 'до 60 тонн',
      maxSize: '25×5×4 м',
      features: ['Специальные прицепы', 'Подготовка к транспортировке', 'Спуск на воду'],
      icon: 'Ship'
    }
  ];

  const transportTypes = [
    {
      name: 'Низкорамный трал',
      capacity: 'до 80 тонн',
      dimensions: '13.6×2.5×3.0 м',
      description: 'Для перевозки высокой техники',
      icon: 'Truck'
    },
    {
      name: 'Платформа с раздвижными бортами',
      capacity: 'до 40 тонн',
      dimensions: '13.6×2.5×2.7 м',
      description: 'For широких грузов',
      icon: 'Square'
    },
    {
      name: 'Модульный трал',
      capacity: 'до 200 тонн',
      dimensions: 'до 30×4×4 м',
      description: 'Для сверхтяжёлых грузов',
      icon: 'Layers'
    },
    {
      name: 'Автокран-вездеход',
      capacity: 'до 100 тонн',
      dimensions: 'любые размеры',
      description: 'Для труднодоступных мест',
      icon: 'Crane'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Техническое обследование',
      description: 'Выезд специалиста, замеры, оценка сложности'
    },
    {
      step: '2',
      title: 'Получение разрешений',
      description: 'Оформление всех необходимых документов и согласований'
    },
    {
      step: '3',
      title: 'Планирование маршрута',
      description: 'Выбор оптимального пути с учётом ограничений'
    },
    {
      step: '4',
      title: 'Подготовка груза',
      description: 'Демонтаж, упаковка, подготовка к транспортировке'
    },
    {
      step: '5',
      title: 'Транспортировка',
      description: 'Перевозка с сопровождением и контролем'
    },
    {
      step: '6',
      title: 'Разгрузка и монтаж',
      description: 'Установка груза на место назначения'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Перевозка негабаритных грузов
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональная транспортировка сверхтяжёлых и негабаритных грузов. 
              Полный комплекс услуг от получения разрешений до установки на объекте.
            </p>
          </div>

          {/* Oversized Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {oversizedTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 w-12 h-12 rounded-lg mr-4 flex items-center justify-center">
                      <Icon name={type.icon as any} className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                      <p className="text-gray-600">{type.description}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <Badge variant="outline">до {type.maxWeight}</Badge>
                    <Badge variant="outline">до {type.maxSize}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <Icon name="Check" className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Transport Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Специализированный транспорт
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {transportTypes.map((transport, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Icon name={transport.icon as any} className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{transport.name}</h3>
                    <div className="space-y-1 text-sm text-gray-600 mb-3">
                      <p><strong>Грузоподъёмность:</strong> {transport.capacity}</p>
                      <p><strong>Размеры:</strong> {transport.dimensions}</p>
                    </div>
                    <p className="text-xs text-gray-500">{transport.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Process Steps */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Этапы перевозки негабаритного груза
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-10 h-10 rounded-full mr-4 flex items-center justify-center text-white font-bold">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-yellow-50 rounded-2xl p-8 mb-16">
            <div className="text-center mb-8">
              <Icon name="AlertTriangle" className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Требования к негабаритным перевозкам
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Перевозка негабаритных грузов требует соблюдения особых требований
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <Icon name="FileText" className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Разрешения</h3>
                <p className="text-sm text-gray-600">Специальные разрешения на перевозку</p>
              </div>
              <div className="text-center">
                <Icon name="Route" className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Маршрут</h3>
                <p className="text-sm text-gray-600">Согласованный маршрут движения</p>
              </div>
              <div className="text-center">
                <Icon name="Car" className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Сопровождение</h3>
                <p className="text-sm text-gray-600">Автомобили прикрытия ГИБДД</p>
              </div>
              <div className="text-center">
                <Icon name="Clock" className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Время движения</h3>
                <p className="text-sm text-gray-600">Ограничения по времени суток</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Нужна перевозка негабарита?
            </h2>
            <p className="text-xl text-purple-100 mb-6">
              Получите бесплатную консультацию и расчёт стоимости перевозки
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Icon name="Calculator" className="h-5 w-5 mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-500">
                <Icon name="Phone" className="h-5 w-5 mr-2" />
                Консультация инженера
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};