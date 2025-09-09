import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const WarehouseServicesPage = () => {
  const warehouseServices = [
    {
      title: 'Краткосрочное хранение',
      description: 'Хранение грузов до 30 дней',
      price: '50 ₽/м³/сутки',
      features: ['Охраняемая территория', 'Видеонаблюдение', 'Контроль доступа', 'Страхование'],
      icon: 'Clock'
    },
    {
      title: 'Долгосрочное хранение',
      description: 'Хранение грузов от 1 месяца',
      price: '1200 ₽/м³/месяц',
      features: ['Скидки при долгосрочном хранении', 'Климат-контроль', 'Инвентаризация', 'Отчёты'],
      icon: 'Calendar'
    },
    {
      title: 'Температурное хранение',
      description: 'Хранение с поддержанием температуры',
      price: '80 ₽/м³/сутки',
      features: ['Температура от -25°C до +25°C', 'Мониторинг 24/7', 'Аварийные системы', 'Сертификаты'],
      icon: 'Thermometer'
    },
    {
      title: 'Опасные грузы',
      description: 'Специализированное хранение ADR',
      price: 'по договору',
      features: ['Лицензированные склады', 'Специальное оборудование', 'Обученный персонал', 'Экстренные службы'],
      icon: 'AlertTriangle'
    }
  ];

  const additionalServices = [
    {
      title: 'Приёмка и отгрузка',
      description: 'Профессиональная обработка грузов',
      services: ['Приёмка по количеству и качеству', 'Взвешивание и обмер', 'Фотофиксация', 'Оформление документов'],
      icon: 'Package'
    },
    {
      title: 'Упаковка и маркировка',
      description: 'Подготовка грузов к отправке',
      services: ['Переупаковка', 'Паллетирование', 'Стрейч-плёнка', 'Маркировка штрих-кодами'],
      icon: 'Tag'
    },
    {
      title: 'Консолидация грузов',
      description: 'Сборка сборных грузов',
      services: ['Формирование партий', 'Оптимизация загрузки', 'Совместимость грузов', 'Экономия на доставке'],
      icon: 'Layers'
    },
    {
      title: 'Складская логистика',
      description: 'Управление товарными потоками',
      services: ['WMS система', 'Инвентаризация', 'Отчётность', 'Интеграция с учётными системами'],
      icon: 'BarChart'
    }
  ];

  const warehouseLocations = [
    {
      city: 'Москва',
      address: 'Московская область, г. Домодедово',
      area: '5000 м²',
      features: ['Класс А', 'Рампы', 'Ж/д ветка', 'Таможенный склад'],
      distance: '25 км от МКАД'
    },
    {
      city: 'Санкт-Петербург',
      address: 'Ленинградская область, г. Всеволожск',
      area: '3000 м²',
      features: ['Класс А', 'Рампы', 'Охрана', 'Видеонаблюдение'],
      distance: '15 км от КАД'
    },
    {
      city: 'Казань',
      address: 'Республика Татарстан, г. Казань',
      area: '2000 м²',
      features: ['Класс B+', 'Рампы', 'Охрана', 'Пожарная сигнализация'],
      distance: '10 км от центра'
    }
  ];

  const advantages = [
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Круглосуточная охрана, видеонаблюдение, контроль доступа'
    },
    {
      icon: 'Thermometer',
      title: 'Климат-контроль',
      description: 'Поддержание оптимальной температуры и влажности'
    },
    {
      icon: 'Smartphone',
      title: 'Онлайн-мониторинг',
      description: 'Отслеживание остатков через личный кабинет'
    },
    {
      icon: 'Award',
      title: 'Сертификация',
      description: 'Склады соответствуют международным стандартам'
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
              Складские услуги
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Современные складские комплексы класса А для хранения любых видов грузов. 
              Полный спектр складских и логистических услуг.
            </p>
          </div>

          {/* Warehouse Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {warehouseServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-green-100 w-12 h-12 rounded-lg mr-4 flex items-center justify-center">
                        <Icon name={service.icon as any} className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500 text-white">
                      {service.price}
                    </Badge>
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

          {/* Additional Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Дополнительные услуги
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {additionalServices.map((service, index) => (
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
                      {service.services.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                          <Icon name="Dot" className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Warehouse Locations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Наши складские комплексы
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {warehouseLocations.map((location, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <Icon name="MapPin" className="h-5 w-5 text-orange-600 mr-2" />
                      {location.city}
                    </CardTitle>
                    <p className="text-gray-600 text-sm">{location.address}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Площадь:</span>
                        <span className="font-medium">{location.area}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Расстояние:</span>
                        <span className="font-medium">{location.distance}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {location.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Advantages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Преимущества наших складов
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((advantage, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Icon name={advantage.icon as any} className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{advantage.title}</h3>
                    <p className="text-gray-600 text-sm">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Warehouse Management System */}
          <div className="bg-green-50 rounded-2xl p-8 mb-16">
            <div className="text-center mb-8">
              <Icon name="Monitor" className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Система управления складом (WMS)
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Современная WMS система для полного контроля над складскими операциями
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Icon name="Smartphone" className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Личный кабинет</h3>
                <p className="text-sm text-gray-600">Онлайн-доступ к информации о грузах</p>
              </div>
              <div className="text-center">
                <Icon name="BarChart" className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Отчёты и аналитика</h3>
                <p className="text-sm text-gray-600">Детальные отчёты по движению товаров</p>
              </div>
              <div className="text-center">
                <Icon name="Zap" className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Автоматизация</h3>
                <p className="text-sm text-gray-600">Автоматические уведомления и процессы</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Нужны складские услуги?
            </h2>
            <p className="text-xl text-green-100 mb-6">
              Получите консультацию по складским решениям и расчёт стоимости
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Icon name="Warehouse" className="h-5 w-5 mr-2" />
                Подобрать склад
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