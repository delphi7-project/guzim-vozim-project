import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const InternationalServicesPage = () => {
  const countries = [
    {
      name: 'Беларусь',
      capital: 'Минск',
      distance: '700 км',
      time: '12-15 часов',
      price: 'от 45 000 ₽',
      popular: true,
      flag: '🇧🇾'
    },
    {
      name: 'Казахстан',
      capital: 'Алматы',
      distance: '3200 км',
      time: '4-5 дней',
      price: 'от 120 000 ₽',
      popular: true,
      flag: '🇰🇿'
    },
    {
      name: 'Украина',
      capital: 'Киев',
      distance: '850 км',
      time: '15-18 часов',
      price: 'от 55 000 ₽',
      popular: false,
      flag: '🇺🇦'
    },
    {
      name: 'Армения',
      capital: 'Ереван',
      distance: '2100 км',
      time: '3-4 дня',
      price: 'от 85 000 ₽',
      popular: false,
      flag: '🇦🇲'
    },
    {
      name: 'Киргизия',
      capital: 'Бишкек',
      distance: '3800 км',
      time: '5-6 дней',
      price: 'от 140 000 ₽',
      popular: false,
      flag: '🇰🇬'
    },
    {
      name: 'Узбекистан',
      capital: 'Ташкент',
      distance: '2800 км',
      time: '4-5 дней',
      price: 'от 110 000 ₽',
      popular: false,
      flag: '🇺🇿'
    }
  ];

  const services = [
    {
      title: 'Таможенное оформление',
      description: 'Полное сопровождение таможенных процедур',
      features: ['Подготовка документов', 'Декларирование', 'Уплата пошлин', 'Получение разрешений'],
      icon: 'FileText'
    },
    {
      title: 'Страхование грузов',
      description: 'Международное страхование на весь путь',
      features: ['Страхование до 10 млн ₽', 'Покрытие всех рисков', 'Быстрое урегулирование', 'Международные полисы'],
      icon: 'Shield'
    },
    {
      title: 'Экспедирование',
      description: 'Сопровождение груза на всём маршруте',
      features: ['Персональный экспедитор', 'Контроль на границах', 'Решение проблем', 'Отчёты о движении'],
      icon: 'Users'
    },
    {
      title: 'Складские услуги',
      description: 'Временное хранение на границе',
      features: ['Склады в пунктах пропуска', 'Консолидация грузов', 'Перегрузка', 'Охраняемое хранение'],
      icon: 'Warehouse'
    }
  ];

  const documents = [
    { name: 'CMR накладная', description: 'Международная товарно-транспортная накладная' },
    { name: 'Инвойс', description: 'Счёт-фактура на английском языке' },
    { name: 'Упаковочный лист', description: 'Детальное описание груза' },
    { name: 'Сертификат происхождения', description: 'Подтверждение страны происхождения товара' },
    { name: 'Разрешение на перевозку', description: 'Специальные разрешения для отдельных видов грузов' },
    { name: 'Страховой полис', description: 'Международный полис страхования груза' }
  ];

  const advantages = [
    {
      icon: 'Globe',
      title: 'Опыт международных перевозок',
      description: 'Более 8 лет работы на международном рынке транспортных услуг'
    },
    {
      icon: 'Award',
      title: 'Лицензии и сертификаты',
      description: 'Все необходимые лицензии для международных автоперевозок'
    },
    {
      icon: 'Languages',
      title: 'Многоязычная поддержка',
      description: 'Общение с клиентами на русском, английском и других языках'
    },
    {
      icon: 'Headphones',
      title: 'Поддержка 24/7',
      description: 'Круглосуточная поддержка на всём пути следования груза'
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
              Международные перевозки
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Надёжная доставка грузов в страны СНГ и дальнего зарубежья. 
              Полное таможенное сопровождение и страхование грузов.
            </p>
          </div>

          {/* Countries */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {countries.map((country, index) => (
              <Card key={index} className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${country.popular ? 'border-2 border-green-500' : ''}`}>
                {country.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white">
                    Популярное направление
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{country.flag}</div>
                  <CardTitle className="text-xl">{country.name}</CardTitle>
                  <p className="text-gray-600">{country.capital}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex justify-between">
                      <span>Расстояние:</span>
                      <span className="font-medium">{country.distance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Время в пути:</span>
                      <span className="font-medium">{country.time}</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-600 mb-3">{country.price}</div>
                    <Button className="w-full" variant={country.popular ? 'default' : 'outline'}>
                      Заказать доставку
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Дополнительные услуги
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <Icon name={service.icon as any} className="h-8 w-8 text-blue-600 mr-3" />
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
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
          </div>

          {/* Documents */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Необходимые документы
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map((doc, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <Icon name="FileText" className="h-6 w-6 text-orange-600 mr-3 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">{doc.name}</h3>
                        <p className="text-gray-600 text-sm">{doc.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Advantages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Наши преимущества
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((advantage, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Icon name={advantage.icon as any} className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{advantage.title}</h3>
                    <p className="text-gray-600 text-sm">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Border Crossings */}
          <div className="bg-blue-50 rounded-2xl p-8 mb-16">
            <div className="text-center mb-8">
              <Icon name="MapPin" className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Пункты пропуска
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Работаем через основные пункты пропуска на границе с соседними странами
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Беларусь</h3>
                <p className="text-sm text-gray-600">Красное, Велижа, Рудня</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Казахстан</h3>
                <p className="text-sm text-gray-600">Сагарчин, Озинки, Таскала</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Другие страны</h3>
                <p className="text-sm text-gray-600">По согласованию с клиентом</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Планируете международную перевозку?
            </h2>
            <p className="text-xl text-green-100 mb-6">
              Получите консультацию по таможенному оформлению и расчёт стоимости
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Icon name="Globe" className="h-5 w-5 mr-2" />
                Консультация по таможне
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-500">
                <Icon name="Calculator" className="h-5 w-5 mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};