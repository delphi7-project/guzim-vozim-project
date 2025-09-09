import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const ExpressServicesPage = () => {
  const expressServices = [
    {
      title: 'Экспресс 30 минут',
      description: 'Подача транспорта в течение 30 минут',
      features: ['Подача за 30 мин', 'Приоритетная доставка', 'Отслеживание в реальном времени'],
      price: '+100% к тарифу',
      time: '30 мин',
      icon: 'Zap'
    },
    {
      title: 'Экспресс 1 час',
      description: 'Быстрая доставка в течение часа',
      features: ['Подача за 1 час', 'Прямая доставка', 'SMS-уведомления'],
      price: '+75% к тарифу',
      time: '1 час',
      icon: 'Clock'
    },
    {
      title: 'Экспресс 2 часа',
      description: 'Срочная доставка за 2 часа',
      features: ['Подача за 2 часа', 'Гарантированные сроки', 'Страхование груза'],
      price: '+50% к тарифу',
      time: '2 часа',
      icon: 'Timer'
    },
    {
      title: 'Экспресс день в день',
      description: 'Доставка в день обращения',
      features: ['Доставка в тот же день', 'Удобное время', 'Подтверждение доставки'],
      price: '+25% к тарифу',
      time: 'в день заказа',
      icon: 'Calendar'
    }
  ];

  const expressAdvantages = [
    {
      icon: 'Zap',
      title: 'Максимальная скорость',
      description: 'Самые быстрые сроки подачи транспорта и доставки в городе'
    },
    {
      icon: 'MapPin',
      title: 'GPS-мониторинг',
      description: 'Отслеживание груза в реальном времени через мобильное приложение'
    },
    {
      icon: 'Shield',
      title: 'Гарантия сроков',
      description: 'Возврат денег при нарушении заявленных сроков доставки'
    },
    {
      icon: 'Phone',
      title: 'Постоянная связь',
      description: 'Персональный менеджер ведёт ваш заказ от начала до конца'
    }
  ];

  const urgentCases = [
    {
      case: 'Медицинские препараты',
      description: 'Срочная доставка лекарств и медицинского оборудования',
      icon: 'Heart'
    },
    {
      case: 'Документы и договоры',
      description: 'Важные документы, требующие немедленной доставки',
      icon: 'FileText'
    },
    {
      case: 'Запчасти и комплектующие',
      description: 'Срочные запчасти для остановки производства',
      icon: 'Settings'
    },
    {
      case: 'Образцы и пробы',
      description: 'Лабораторные образцы с ограниченным сроком годности',
      icon: 'TestTube'
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
              Экспресс-доставка
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Когда время критично - выбирайте экспресс-доставку. 
              Подача транспорта от 30 минут, доставка в кратчайшие сроки.
            </p>
          </div>

          {/* Express Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {expressServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-red-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-red-100 w-12 h-12 rounded-lg mr-4 flex items-center justify-center">
                        <Icon name={service.icon as any} className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    <Badge className="bg-red-500 text-white">
                      {service.time}
                    </Badge>
                  </div>
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
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-red-600">{service.price}</span>
                    <Button className="bg-red-600 hover:bg-red-700">Заказать срочно</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Advantages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Преимущества экспресс-доставки
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expressAdvantages.map((advantage, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Icon name={advantage.icon as any} className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{advantage.title}</h3>
                    <p className="text-gray-600 text-sm">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Urgent Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Когда нужна экспресс-доставка
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {urgentCases.map((urgentCase, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <Icon name={urgentCase.icon as any} className="h-8 w-8 text-orange-600 mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{urgentCase.case}</h3>
                        <p className="text-gray-600">{urgentCase.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-red-50 rounded-2xl p-8 mb-16">
            <div className="text-center">
              <Icon name="Phone" className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Экстренная линия 24/7
              </h2>
              <p className="text-gray-600 mb-6">
                Для особо срочных заказов звоните на горячую линию
              </p>
              <div className="text-3xl font-bold text-red-600 mb-4">
                +7 (999) 911-911-9
              </div>
              <p className="text-sm text-gray-500">
                Среднее время ответа: 15 секунд
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Нужна срочная доставка?
            </h2>
            <p className="text-xl text-red-100 mb-6">
              Звоните прямо сейчас - подадим транспорт в течение 30 минут!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="animate-pulse">
                <Icon name="Phone" className="h-5 w-5 mr-2" />
                Срочный заказ
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-500">
                <Icon name="MessageCircle" className="h-5 w-5 mr-2" />
                Написать в чат
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};