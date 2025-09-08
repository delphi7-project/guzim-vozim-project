import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const ServicesPage = () => {
  const services = [
    {
      icon: 'Package',
      title: 'Перевозка грузов',
      description: 'Транспортировка грузов любой сложности',
      features: [
        'Грузоподъёмность до 20 тонн',
        'Различные типы кузовов',
        'Попутная загрузка',
        'Экспресс-доставка'
      ],
      price: 'от 35 руб/км'
    },
    {
      icon: 'Home',
      title: 'Квартирные переезды',
      description: 'Профессиональные переезды с грузчиками',
      features: [
        'Упаковка вещей',
        'Разборка/сборка мебели',
        'Подъём на этаж',
        'Страхование имущества'
      ],
      price: 'от 3 500 руб'
    },
    {
      icon: 'Building2',
      title: 'Офисные переезды',
      description: 'Переезд офисов и предприятий',
      features: [
        'Минимальные простои',
        'Сохранность техники',
        'Логистическое планирование',
        'Работа в выходные'
      ],
      price: 'от 15 000 руб'
    },
    {
      icon: 'Hammer',
      title: 'Стройматериалы',
      description: 'Доставка строительных материалов',
      features: [
        'Кирпич, блоки, панели',
        'Сыпучие материалы',
        'Длинномерные грузы',
        'Разгрузка на объекте'
      ],
      price: 'от 40 руб/км'
    },
    {
      icon: 'Zap',
      title: 'Срочная доставка',
      description: 'Экспресс-доставка в кратчайшие сроки',
      features: [
        'Подача за 30 минут',
        'Приоритетная доставка',
        'Отслеживание груза',
        'Работа в праздники'
      ],
      price: 'от 2 000 руб'
    },
    {
      icon: 'Snowflake',
      title: 'Рефрижераторы',
      description: 'Перевозка скоропортящихся грузов',
      features: [
        'Температурный режим',
        'Мониторинг условий',
        'Продукты питания',
        'Медицинские препараты'
      ],
      price: 'от 55 руб/км'
    },
    {
      icon: 'Shield',
      title: 'Ценные грузы',
      description: 'Транспортировка ценных грузов',
      features: [
        'Повышенная безопасность',
        'Сопровождение груза',
        'Дополнительное страхование',
        'Специальные автомобили'
      ],
      price: 'по договору'
    },
    {
      icon: 'Plane',
      title: 'Негабаритные грузы',
      description: 'Перевозка негабаритных и тяжеловесных грузов',
      features: [
        'Спецтранспорт',
        'Разрешительные документы',
        'Сопровождение ГИБДД',
        'Планирование маршрута'
      ],
      price: 'по договору'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр транспортных и логистических услуг. 
            Профессиональный подход к каждому заказу.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-orange-200">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-r from-orange-500 to-blue-600 w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Icon name={service.icon as any} className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <p className="text-gray-600">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <Icon name="Check" className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="border-t pt-4">
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-orange-600">{service.price}</span>
                  </div>
                  <Button className="w-full" size="sm">
                    Заказать услугу
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Icon name="Clock" className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">24/7</h3>
              <p className="text-gray-600">Работаем круглосуточно без выходных</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <Icon name="Shield" className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Страхование</h3>
              <p className="text-gray-600">Полная страховка всех перевозимых грузов</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <Icon name="Users" className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Опыт</h3>
              <p className="text-gray-600">Более 10 лет на рынке транспортных услуг</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Нужна консультация?
          </h2>
          <p className="text-xl text-orange-100 mb-6">
            Наши специалисты помогут подобрать оптимальное решение для ваших задач
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
      </div>
    </div>
  );
};