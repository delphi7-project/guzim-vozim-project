import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const CargoServicesPage = () => {
  const cargoTypes = [
    {
      title: 'Промышленные грузы',
      description: 'Оборудование, станки, промышленные товары',
      features: ['Специальная упаковка', 'Крепление груза', 'Страхование'],
      price: 'от 40 ₽/км',
      icon: 'Settings'
    },
    {
      title: 'Потребительские товары',
      description: 'Одежда, обувь, электроника, бытовая техника',
      features: ['Аккуратная погрузка', 'Защита от повреждений', 'Быстрая доставка'],
      price: 'от 35 ₽/км',
      icon: 'Package'
    },
    {
      title: 'Продукты питания',
      description: 'Сухие продукты, консервы, напитки',
      features: ['Соблюдение санитарных норм', 'Температурный режим', 'Сертификаты'],
      price: 'от 38 ₽/км',
      icon: 'Apple'
    },
    {
      title: 'Документы и ценности',
      description: 'Документооборот, ценные бумаги, деньги',
      features: ['Повышенная безопасность', 'Сопровождение', 'Страхование до 5 млн ₽'],
      price: 'от 60 ₽/км',
      icon: 'FileText'
    }
  ];

  const advantages = [
    {
      icon: 'Shield',
      title: 'Полное страхование',
      description: 'Страхование грузов до 1 млн рублей включено в стоимость'
    },
    {
      icon: 'Clock',
      title: 'Точные сроки',
      description: '99.8% доставок выполняется точно в оговоренные сроки'
    },
    {
      icon: 'Users',
      title: 'Опытные водители',
      description: 'Стаж работы наших водителей от 5 лет, знание города'
    },
    {
      icon: 'Headphones',
      title: 'Поддержка 24/7',
      description: 'Круглосуточная диспетчерская служба и поддержка клиентов'
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
              Грузоперевозки
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональная перевозка грузов любой сложности. 
              Надёжно, быстро и по выгодным ценам.
            </p>
          </div>

          {/* Cargo Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {cargoTypes.map((cargo, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 w-12 h-12 rounded-lg mr-4 flex items-center justify-center">
                      <Icon name={cargo.icon as any} className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{cargo.title}</CardTitle>
                      <p className="text-gray-600">{cargo.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {cargo.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <Icon name="Check" className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-600">{cargo.price}</span>
                    <Button>Заказать</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Advantages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Преимущества наших грузоперевозок
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

          {/* CTA */}
          <div className="bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Нужна перевозка груза?
            </h2>
            <p className="text-xl text-orange-100 mb-6">
              Рассчитайте стоимость онлайн или получите консультацию специалиста
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
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
      
      <Footer />
    </div>
  );
};