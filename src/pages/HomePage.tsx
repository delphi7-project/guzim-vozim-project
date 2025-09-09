import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { OrderForm } from '@/components/forms/OrderForm';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

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

  // 10 информационных разделов для главной страницы
  const infoSections = [
    {
      id: 'advantages',
      title: 'Наши преимущества',
      subtitle: 'Почему более 10 000 клиентов выбирают нас',
      items: [
        { icon: 'Shield', title: 'Надёжность', desc: 'Страхование грузов до 1 млн ₽' },
        { icon: 'Clock', title: 'Пунктуальность', desc: '99.8% доставок точно в срок' },
        { icon: 'DollarSign', title: 'Выгодные цены', desc: 'Лучшие тарифы на рынке' },
        { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'Всегда на связи с клиентами' }
      ]
    },
    {
      id: 'geography',
      title: 'География работы',
      subtitle: 'Доставляем по всей России и СНГ',
      stats: [
        { value: '85+', label: 'Регионов России' },
        { value: '500+', label: 'Городов доставки' },
        { value: '15', label: 'Стран СНГ' },
        { value: '24/7', label: 'Мониторинг грузов' }
      ]
    },
    {
      id: 'fleet',
      title: 'Автопарк',
      subtitle: 'Современная техника для любых задач',
      vehicles: [
        { type: 'Газель', count: '45 ед.', capacity: 'до 1.5т' },
        { type: 'Бычок', count: '28 ед.', capacity: 'до 3т' },
        { type: 'Фура', count: '15 ед.', capacity: 'до 20т' },
        { type: 'Спецтехника', count: '12 ед.', capacity: 'любой вес' }
      ]
    },
    {
      id: 'services-overview',
      title: 'Спектр услуг',
      subtitle: 'Полный комплекс транспортно-логистических решений',
      services: [
        { icon: 'Package', name: 'Грузоперевозки', desc: 'Любые виды грузов' },
        { icon: 'Home', name: 'Переезды', desc: 'Квартирные и офисные' },
        { icon: 'Snowflake', name: 'Рефрижераторы', desc: 'Температурный режим' },
        { icon: 'Plane', name: 'Негабарит', desc: 'Сверхтяжёлые грузы' },
        { icon: 'Globe', name: 'Международные', desc: 'Доставка в СНГ' },
        { icon: 'Warehouse', name: 'Складские услуги', desc: 'Хранение и обработка' }
      ]
    },
    {
      id: 'pricing-info',
      title: 'Тарифы и цены',
      subtitle: 'Прозрачное ценообразование без скрытых комиссий',
      tariffs: [
        { service: 'По городу', price: 'от 35 ₽/км', popular: true },
        { service: 'Междугородние', price: 'от 22 ₽/км', popular: false },
        { service: 'Грузчики', price: '400 ₽/час', popular: false },
        { service: 'Экспресс', price: '+50% к тарифу', popular: false }
      ]
    },
    {
      id: 'quality',
      title: 'Качество и безопасность',
      subtitle: 'Высокие стандарты обслуживания',
      certificates: [
        { name: 'ISO 9001:2015', desc: 'Система менеджмента качества' },
        { name: 'Лицензия на перевозки', desc: 'Все виды грузоперевозок' },
        { name: 'Страхование ОСАГО', desc: 'Весь автопарк застрахован' },
        { name: 'Сертификат безопасности', desc: 'Соответствие требованиям' }
      ]
    },
    {
      id: 'technology',
      title: 'Современные технологии',
      subtitle: 'Цифровые решения для удобства клиентов',
      tech: [
        { icon: 'Smartphone', name: 'Мобильное приложение', desc: 'Заказ и отслеживание' },
        { icon: 'MapPin', name: 'GPS-мониторинг', desc: 'Контроль в реальном времени' },
        { icon: 'Calculator', name: 'Онлайн-калькулятор', desc: 'Расчёт стоимости' },
        { icon: 'CreditCard', name: 'Безналичная оплата', desc: 'Все способы оплаты' }
      ]
    },
    {
      id: 'clients',
      title: 'Наши клиенты',
      subtitle: 'Доверие крупнейших компаний России',
      clientTypes: [
        { type: 'Производственные компании', count: '2500+', icon: 'Factory' },
        { type: 'Торговые сети', count: '1800+', icon: 'Store' },
        { type: 'Строительные компании', count: '1200+', icon: 'Building' },
        { type: 'Частные лица', count: '15000+', icon: 'Users' }
      ]
    },
    {
      id: 'reviews-stats',
      title: 'Отзывы и рейтинги',
      subtitle: 'Что говорят о нас клиенты',
      ratings: [
        { platform: 'Яндекс.Услуги', rating: '4.9', reviews: '320+' },
        { platform: '2ГИС', rating: '4.8', reviews: '256+' },
        { platform: 'Google', rating: '4.9', reviews: '189+' },
        { platform: 'Флампа', rating: '4.8', reviews: '145+' }
      ]
    },
    {
      id: 'contact-info',
      title: 'Контакты и офисы',
      subtitle: 'Мы всегда рядом с вами',
      offices: [
        { city: 'Москва', address: 'ул. Транспортная, 1', phone: '+7 (495) 123-45-67' },
        { city: 'СПб', address: 'пр. Логистический, 25', phone: '+7 (812) 123-45-67' },
        { city: 'Казань', address: 'ул. Грузовая, 12', phone: '+7 (843) 123-45-67' },
        { city: 'Диспетчерская', address: '24/7 без выходных', phone: '+7 (999) 123-45-67' }
      ]
    }
  ];

  // 10 информационных разделов для главной страницы
  const infoSections = [
    {
      id: 'advantages',
      title: 'Наши преимущества',
      subtitle: 'Почему более 10 000 клиентов выбирают нас',
      items: [
        { icon: 'Shield', title: 'Надёжность', desc: 'Страхование грузов до 1 млн ₽' },
        { icon: 'Clock', title: 'Пунктуальность', desc: '99.8% доставок точно в срок' },
        { icon: 'DollarSign', title: 'Выгодные цены', desc: 'Лучшие тарифы на рынке' },
        { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'Всегда на связи с клиентами' }
      ]
    },
    {
      id: 'geography',
      title: 'География работы',
      subtitle: 'Доставляем по всей России и СНГ',
      stats: [
        { value: '85+', label: 'Регионов России' },
        { value: '500+', label: 'Городов доставки' },
        { value: '15', label: 'Стран СНГ' },
        { value: '24/7', label: 'Мониторинг грузов' }
      ]
    },
    {
      id: 'fleet',
      title: 'Автопарк',
      subtitle: 'Современная техника для любых задач',
      vehicles: [
        { type: 'Газель', count: '45 ед.', capacity: 'до 1.5т' },
        { type: 'Бычок', count: '28 ед.', capacity: 'до 3т' },
        { type: 'Фура', count: '15 ед.', capacity: 'до 20т' },
        { type: 'Спецтехника', count: '12 ед.', capacity: 'любой вес' }
      ]
    },
    {
      id: 'services-overview',
      title: 'Спектр услуг',
      subtitle: 'Полный комплекс транспортно-логистических решений',
      services: [
        { icon: 'Package', name: 'Грузоперевозки', desc: 'Любые виды грузов' },
        { icon: 'Home', name: 'Переезды', desc: 'Квартирные и офисные' },
        { icon: 'Snowflake', name: 'Рефрижераторы', desc: 'Температурный режим' },
        { icon: 'Plane', name: 'Негабарит', desc: 'Сверхтяжёлые грузы' },
        { icon: 'Globe', name: 'Международные', desc: 'Доставка в СНГ' },
        { icon: 'Warehouse', name: 'Складские услуги', desc: 'Хранение и обработка' }
      ]
    },
    {
      id: 'pricing-info',
      title: 'Тарифы и цены',
      subtitle: 'Прозрачное ценообразование без скрытых комиссий',
      tariffs: [
        { service: 'По городу', price: 'от 35 ₽/км', popular: true },
        { service: 'Междугородние', price: 'от 22 ₽/км', popular: false },
        { service: 'Грузчики', price: '400 ₽/час', popular: false },
        { service: 'Экспресс', price: '+50% к тарифу', popular: false }
      ]
    },
    {
      id: 'quality',
      title: 'Качество и безопасность',
      subtitle: 'Высокие стандарты обслуживания',
      certificates: [
        { name: 'ISO 9001:2015', desc: 'Система менеджмента качества' },
        { name: 'Лицензия на перевозки', desc: 'Все виды грузоперевозок' },
        { name: 'Страхование ОСАГО', desc: 'Весь автопарк застрахован' },
        { name: 'Сертификат безопасности', desc: 'Соответствие требованиям' }
      ]
    },
    {
      id: 'technology',
      title: 'Современные технологии',
      subtitle: 'Цифровые решения для удобства клиентов',
      tech: [
        { icon: 'Smartphone', name: 'Мобильное приложение', desc: 'Заказ и отслеживание' },
        { icon: 'MapPin', name: 'GPS-мониторинг', desc: 'Контроль в реальном времени' },
        { icon: 'Calculator', name: 'Онлайн-калькулятор', desc: 'Расчёт стоимости' },
        { icon: 'CreditCard', name: 'Безналичная оплата', desc: 'Все способы оплаты' }
      ]
    },
    {
      id: 'clients',
      title: 'Наши клиенты',
      subtitle: 'Доверие крупнейших компаний России',
      clientTypes: [
        { type: 'Производственные компании', count: '2500+', icon: 'Factory' },
        { type: 'Торговые сети', count: '1800+', icon: 'Store' },
        { type: 'Строительные компании', count: '1200+', icon: 'Building' },
        { type: 'Частные лица', count: '15000+', icon: 'Users' }
      ]
    },
    {
      id: 'reviews-stats',
      title: 'Отзывы и рейтинги',
      subtitle: 'Что говорят о нас клиенты',
      ratings: [
        { platform: 'Яндекс.Услуги', rating: '4.9', reviews: '320+' },
        { platform: '2ГИС', rating: '4.8', reviews: '256+' },
        { platform: 'Google', rating: '4.9', reviews: '189+' },
        { platform: 'Флампа', rating: '4.8', reviews: '145+' }
      ]
    },
    {
      id: 'contact-info',
      title: 'Контакты и офисы',
      subtitle: 'Мы всегда рядом с вами',
      offices: [
        { city: 'Москва', address: 'ул. Транспортная, 1', phone: '+7 (495) 123-45-67' },
        { city: 'СПб', address: 'пр. Логистический, 25', phone: '+7 (812) 123-45-67' },
        { city: 'Казань', address: 'ул. Грузовая, 12', phone: '+7 (843) 123-45-67' },
        { city: 'Диспетчерская', address: '24/7 без выходных', phone: '+7 (999) 123-45-67' }
      ]
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

      {/* 10 информационных разделов */}
      
      {/* 1. Преимущества */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {infoSections[0].title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {infoSections[0].subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoSections[0].items.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-r from-orange-500 to-blue-600 w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Icon name={item.icon as any} className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 2. География работы */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {infoSections[1].title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {infoSections[1].subtitle}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {infoSections[1].stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/geography">
              <Button size="lg">
                Подробнее о географии
                <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Автопарк */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {infoSections[2].title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {infoSections[2].subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {infoSections[2].vehicles.map((vehicle, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Icon name="Truck" className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-1">{vehicle.type}</h3>
                  <p className="text-orange-600 font-medium">{vehicle.count}</p>
                  <p className="text-gray-600 text-sm">{vehicle.capacity}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/fleet">
              <Button size="lg" variant="outline">
                Весь автопарк
                <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Спектр услуг */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {infoSections[3].title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {infoSections[3].subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {infoSections[3].services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 w-10 h-10 rounded-lg mr-3 flex items-center justify-center">
                      <Icon name={service.icon as any} className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{service.name}</h3>
                      <p className="text-gray-600 text-sm">{service.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/services">
              <Button size="lg">
                Все услуги
                <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Тарифы и цены */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {infoSections[4].title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {infoSections[4].subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {infoSections[4].tariffs.map((tariff, index) => (
              <Card key={index} className={`text-center hover:shadow-lg transition-all duration-300 ${tariff.popular ? 'border-2 border-orange-500' : ''}`}>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">{tariff.service}</h3>
                  <div className="text-2xl font-bold text-orange-600 mb-2">{tariff.price}</div>
                  {tariff.popular && (
                    <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                      Популярный
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/pricing">
              <Button size="lg">
                Все тарифы
                <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Качество и безопасность */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {infoSections[5].title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {infoSections[5].subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoSections[5].certificates.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Icon name="Award" className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{cert.name}</h3>
                  <p className="text-gray-600 text-sm">{cert.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Современные технологии */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {infoSections[6].title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {infoSections[6].subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoSections[6].tech.map((tech, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Icon name={tech.icon as any} className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{tech.name}</h3>
                  <p className="text-gray-600 text-sm">{tech.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Наши клиенты */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {infoSections[7].title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {infoSections[7].subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoSections[7].clientTypes.map((client, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Icon name={client.icon as any} className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{client.type}</h3>
                  <div className="text-2xl font-bold text-blue-600">{client.count}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Отзывы и рейтинги */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {infoSections[8].title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {infoSections[8].subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {infoSections[8].ratings.map((rating, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Icon name="Star" className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">{rating.platform}</h3>
                  <div className="text-xl font-bold text-orange-600">{rating.rating}</div>
                  <p className="text-gray-600 text-sm">{rating.reviews} отзывов</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/reviews">
              <Button size="lg" variant="outline">
                Все отзывы
                <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Контакты и офисы */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {infoSections[9].title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {infoSections[9].subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {infoSections[9].offices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Icon name="MapPin" className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-lg mb-2">{office.city}</h3>
                  <p className="text-gray-600 text-sm mb-2">{office.address}</p>
                  <p className="text-orange-600 font-medium">{office.phone}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/contacts">
              <Button size="lg">
                Все контакты
                <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 10 информационных разделов */}
      
      {/* 1. Преимущества */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {infoSections[0].title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {infoSections[0].subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoSections[0].items.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-r from-orange-500 to-blue-600 w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Icon name={item.icon as any} className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 2. География работы */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {infoSections[1].title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {infoSections[1].subtitle}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {infoSections[1].stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/geography">
              <Button size="lg">
                Подробнее о географии
                <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Автопарк */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {infoSections[2].title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {infoSections[2].subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {infoSections[2].vehicles.map((vehicle, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Icon name="Truck" className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-1">{vehicle.type}</h3>
                  <p className="text-orange-600 font-medium">{vehicle.count}</p>
                  <p className="text-gray-600 text-sm">{vehicle.capacity}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/fleet">
              <Button size="lg" variant="outline">
                Весь автопарк
                <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Спектр услуг */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {infoSections[3].title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {infoSections[3].subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {infoSections[3].services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 w-10 h-10 rounded-lg mr-3 flex items-center justify-center">
                      <Icon name={service.icon as any} className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{service.name}</h3>
                      <p className="text-gray-600 text-sm">{service.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/services">
              <Button size="lg">
                Все услуги
                <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Тарифы и цены */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {infoSections[4].title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {infoSections[4].subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {infoSections[4].tariffs.map((tariff, index) => (
              <Card key={index} className={`text-center hover:shadow-lg transition-all duration-300 ${tariff.popular ? 'border-2 border-orange-500' : ''}`}>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">{tariff.service}</h3>
                  <div className="text-2xl font-bold text-orange-600 mb-2">{tariff.price}</div>
                  {tariff.popular && (
                    <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                      Популярный
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/pricing">
              <Button size="lg">
                Все тарифы
                <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Качество и безопасность */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {infoSections[5].title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {infoSections[5].subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoSections[5].certificates.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Icon name="Award" className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{cert.name}</h3>
                  <p className="text-gray-600 text-sm">{cert.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Современные технологии */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {infoSections[6].title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {infoSections[6].subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoSections[6].tech.map((tech, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Icon name={tech.icon as any} className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{tech.name}</h3>
                  <p className="text-gray-600 text-sm">{tech.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Наши клиенты */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {infoSections[7].title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {infoSections[7].subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoSections[7].clientTypes.map((client, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Icon name={client.icon as any} className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{client.type}</h3>
                  <div className="text-2xl font-bold text-blue-600">{client.count}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Отзывы и рейтинги */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {infoSections[8].title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {infoSections[8].subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {infoSections[8].ratings.map((rating, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Icon name="Star" className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">{rating.platform}</h3>
                  <div className="text-xl font-bold text-orange-600">{rating.rating}</div>
                  <p className="text-gray-600 text-sm">{rating.reviews} отзывов</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/reviews">
              <Button size="lg" variant="outline">
                Все отзывы
                <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Контакты и офисы */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {infoSections[9].title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {infoSections[9].subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {infoSections[9].offices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Icon name="MapPin" className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-lg mb-2">{office.city}</h3>
                  <p className="text-gray-600 text-sm mb-2">{office.address}</p>
                  <p className="text-orange-600 font-medium">{office.phone}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/contacts">
              <Button size="lg">
                Все контакты
                <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
              </Button>
            </Link>
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