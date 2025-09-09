import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const RefrigeratorServicesPage = () => {
  const temperatureRanges = [
    {
      title: 'Глубокая заморозка',
      range: '-25°C до -18°C',
      description: 'Мороженое, замороженные продукты, рыба',
      features: ['Постоянный мониторинг', 'Аварийные сигналы', 'Резервное питание'],
      icon: 'Snowflake',
      color: 'blue'
    },
    {
      title: 'Обычная заморозка',
      range: '-18°C до -5°C',
      description: 'Мясо, полуфабрикаты, замороженные овощи',
      features: ['Стабильная температура', 'Быстрая загрузка', 'Контроль влажности'],
      icon: 'Thermometer',
      color: 'cyan'
    },
    {
      title: 'Охлаждение',
      range: '0°C до +8°C',
      description: 'Молочные продукты, свежее мясо, овощи',
      features: ['Точное поддержание', 'Циркуляция воздуха', 'Гигиенические нормы'],
      icon: 'Refrigerator',
      color: 'green'
    },
    {
      title: 'Фармацевтика',
      range: '+2°C до +8°C',
      description: 'Лекарства, вакцины, медицинские препараты',
      features: ['Валидированное оборудование', 'Непрерывная запись', 'Сертификаты GDP'],
      icon: 'Pill',
      color: 'purple'
    }
  ];

  const cargoTypes = [
    {
      category: 'Продукты питания',
      items: ['Мясо и мясопродукты', 'Рыба и морепродукты', 'Молочные продукты', 'Замороженные овощи и фрукты', 'Мороженое и десерты'],
      icon: 'Apple'
    },
    {
      category: 'Медицинские препараты',
      items: ['Вакцины', 'Инсулин', 'Биологические препараты', 'Диагностические реагенты', 'Кровь и плазма'],
      icon: 'Heart'
    },
    {
      category: 'Цветы и растения',
      items: ['Срезанные цветы', 'Рассада', 'Семена', 'Луковицы', 'Саженцы'],
      icon: 'Flower'
    },
    {
      category: 'Химические вещества',
      items: ['Реактивы', 'Катализаторы', 'Полимеры', 'Красители', 'Клеи и герметики'],
      icon: 'TestTube'
    }
  ];

  const advantages = [
    {
      icon: 'Thermometer',
      title: 'Точный контроль температуры',
      description: 'Современные системы поддерживают температуру с точностью ±0.5°C'
    },
    {
      icon: 'BarChart',
      title: 'Мониторинг в реальном времени',
      description: 'Непрерывная запись температуры и влажности с передачей данных'
    },
    {
      icon: 'Shield',
      title: 'Страхование груза',
      description: 'Полное страхование скоропортящихся грузов до 5 млн рублей'
    },
    {
      icon: 'Award',
      title: 'Сертифицированное оборудование',
      description: 'Все рефрижераторы имеют сертификаты соответствия и калибровку'
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
              Рефрижераторные перевозки
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональная перевозка скоропортящихся грузов с соблюдением 
              температурного режима. Современное оборудование и опытные водители.
            </p>
          </div>

          {/* Temperature Ranges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {temperatureRanges.map((range, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className={`bg-${range.color}-100 w-12 h-12 rounded-lg mr-4 flex items-center justify-center`}>
                      <Icon name={range.icon as any} className={`h-6 w-6 text-${range.color}-600`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{range.title}</CardTitle>
                      <Badge className={`bg-${range.color}-500 text-white mt-1`}>
                        {range.range}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-600">{range.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {range.features.map((feature, featureIndex) => (
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

          {/* Cargo Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Типы грузов для рефрижераторных перевозок
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cargoTypes.map((cargo, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <Icon name={cargo.icon as any} className="h-8 w-8 text-blue-600 mr-3" />
                      <CardTitle className="text-xl">{cargo.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {cargo.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                          <Icon name="Dot" className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Advantages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Преимущества наших рефрижераторов
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

          {/* Temperature Monitoring */}
          <div className="bg-blue-50 rounded-2xl p-8 mb-16">
            <div className="text-center mb-8">
              <Icon name="BarChart" className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Система мониторинга температуры
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Все наши рефрижераторы оснащены современными системами контроля температуры
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Icon name="Smartphone" className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Мобильное приложение</h3>
                <p className="text-sm text-gray-600">Отслеживание температуры в реальном времени</p>
              </div>
              <div className="text-center">
                <Icon name="Bell" className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Аварийные уведомления</h3>
                <p className="text-sm text-gray-600">Мгновенные оповещения о нарушениях</p>
              </div>
              <div className="text-center">
                <Icon name="FileText" className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Отчёты и документы</h3>
                <p className="text-sm text-gray-600">Полная документация по температурному режиму</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Нужна рефрижераторная перевозка?
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Гарантируем соблюдение температурного режима на всём пути следования
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Icon name="Thermometer" className="h-5 w-5 mr-2" />
                Заказать рефрижератор
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-500">
                <Icon name="Phone" className="h-5 w-5 mr-2" />
                Консультация специалиста
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};