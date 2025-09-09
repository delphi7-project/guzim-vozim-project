import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const MovingServicesPage = () => {
  const movingTypes = [
    {
      title: 'Квартирный переезд',
      description: 'Переезд из квартиры в квартиру любой сложности',
      features: ['Упаковка вещей', 'Разборка/сборка мебели', 'Подъём на этаж', 'Уборка'],
      price: 'от 3 500 ₽',
      popular: true,
      icon: 'Home'
    },
    {
      title: 'Офисный переезд',
      description: 'Переезд офисов и коммерческих помещений',
      features: ['Планирование переезда', 'Упаковка техники', 'Минимальные простои', 'Работа в выходные'],
      price: 'от 15 000 ₽',
      popular: false,
      icon: 'Building'
    },
    {
      title: 'Дачный переезд',
      description: 'Перевозка вещей на дачу и обратно',
      features: ['Сезонные вещи', 'Садовый инвентарь', 'Мебель для дачи', 'Гибкий график'],
      price: 'от 2 800 ₽',
      popular: false,
      icon: 'TreePine'
    },
    {
      title: 'Переезд пианино',
      description: 'Специализированная перевозка музыкальных инструментов',
      features: ['Специальное оборудование', 'Опытные грузчики', 'Страхование', 'Настройка после переезда'],
      price: 'от 8 000 ₽',
      popular: false,
      icon: 'Music'
    }
  ];

  const additionalServices = [
    { name: 'Грузчики', price: '400 ₽/час/чел', icon: 'Users' },
    { name: 'Упаковочные материалы', price: 'от 200 ₽/м³', icon: 'Package' },
    { name: 'Разборка/сборка мебели', price: '1500 ₽/комната', icon: 'Wrench' },
    { name: 'Подъём на этаж без лифта', price: '15 ₽/этаж/место', icon: 'ArrowUp' },
    { name: 'Временное хранение', price: '50 ₽/м³/сутки', icon: 'Warehouse' },
    { name: 'Уборка после переезда', price: '2000 ₽/квартира', icon: 'Sparkles' }
  ];

  const movingSteps = [
    {
      step: '1',
      title: 'Заявка и оценка',
      description: 'Принимаем заявку, выезжаем на осмотр, составляем смету'
    },
    {
      step: '2',
      title: 'Подготовка',
      description: 'Привозим упаковочные материалы, упаковываем вещи'
    },
    {
      step: '3',
      title: 'Погрузка',
      description: 'Разбираем мебель, аккуратно грузим в автомобиль'
    },
    {
      step: '4',
      title: 'Транспортировка',
      description: 'Безопасно перевозим ваши вещи по указанному адресу'
    },
    {
      step: '5',
      title: 'Разгрузка',
      description: 'Заносим вещи, собираем мебель, расставляем по местам'
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
              Услуги переезда
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональные переезды любой сложности. 
              Берём на себя все заботы - от упаковки до расстановки мебели.
            </p>
          </div>

          {/* Moving Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {movingTypes.map((moving, index) => (
              <Card key={index} className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${moving.popular ? 'border-2 border-orange-500' : ''}`}>
                {moving.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white">
                    Популярный
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg mr-4 flex items-center justify-center">
                      <Icon name={moving.icon as any} className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{moving.title}</CardTitle>
                      <p className="text-gray-600">{moving.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {moving.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <Icon name="Check" className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-600">{moving.price}</span>
                    <Button variant={moving.popular ? 'default' : 'outline'}>Заказать</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Moving Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Как проходит переезд
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {movingSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-orange-500 to-blue-600 w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Дополнительные услуги
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Icon name={service.icon as any} className="h-6 w-6 text-orange-600 mr-3" />
                        <span className="font-medium">{service.name}</span>
                      </div>
                      <span className="text-orange-600 font-semibold">{service.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Планируете переезд?
            </h2>
            <p className="text-xl text-orange-100 mb-6">
              Получите бесплатную консультацию и расчёт стоимости переезда
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Icon name="Calculator" className="h-5 w-5 mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
                <Icon name="Phone" className="h-5 w-5 mr-2" />
                Бесплатная консультация
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};