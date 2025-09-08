import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export const GeographyPage = () => {
  const regions = [
    {
      name: 'Москва и МО',
      cities: ['Москва', 'Подольск', 'Люберцы', 'Мытищи', 'Химки', 'Балашиха', 'Одинцово', 'Домодедово'],
      deliveryTime: '1-3 часа',
      status: 'active',
      color: 'green'
    },
    {
      name: 'Центральный ФО',
      cities: ['Тула', 'Калуга', 'Рязань', 'Владимир', 'Ярославль', 'Тверь', 'Смоленск', 'Орёл'],
      deliveryTime: '4-8 часов',
      status: 'active',
      color: 'blue'
    },
    {
      name: 'Северо-Западный ФО',
      cities: ['Санкт-Петербург', 'Новгород', 'Псков', 'Вологда', 'Череповец', 'Архангельск'],
      deliveryTime: '8-12 часов',
      status: 'active',
      color: 'purple'
    },
    {
      name: 'Приволжский ФО',
      cities: ['Нижний Новгород', 'Казань', 'Самара', 'Уфа', 'Пермь', 'Саратов', 'Волгоград'],
      deliveryTime: '12-24 часа',
      status: 'active',
      color: 'orange'
    },
    {
      name: 'Южный ФО',
      cities: ['Ростов-на-Дону', 'Краснодар', 'Сочи', 'Волгоград', 'Астрахань', 'Ставрополь'],
      deliveryTime: '18-36 часов',
      status: 'active',
      color: 'red'
    },
    {
      name: 'Сибирский ФО',
      cities: ['Новосибирск', 'Екатеринбург', 'Челябинск', 'Омск', 'Красноярск', 'Иркутск'],
      deliveryTime: '2-5 дней',
      status: 'limited',
      color: 'yellow'
    },
    {
      name: 'Дальневосточный ФО',
      cities: ['Владивосток', 'Хабаровск', 'Благовещенск', 'Магадан', 'Петропавловск-Камчатский'],
      deliveryTime: '5-10 дней',
      status: 'limited',
      color: 'gray'
    }
  ];

  const specialRoutes = [
    {
      route: 'Москва — Санкт-Петербург',
      distance: '634 км',
      time: '8-10 часов',
      frequency: 'Ежедневно',
      price: 'от 15 000 ₽'
    },
    {
      route: 'Москва — Казань',
      distance: '719 км',
      time: '10-12 часов',
      frequency: '3 раза в неделю',
      price: 'от 18 000 ₽'
    },
    {
      route: 'Москва — Краснодар',
      distance: '1 350 км',
      time: '18-20 часов',
      frequency: '2 раза в неделю',
      price: 'от 25 000 ₽'
    },
    {
      route: 'Москва — Екатеринбург',
      distance: '1 416 км',
      time: '20-24 часа',
      frequency: 'По запросу',
      price: 'от 30 000 ₽'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Активно</Badge>;
      case 'limited':
        return <Badge className="bg-yellow-100 text-yellow-800">Ограниченно</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Недоступно</Badge>;
    }
  };

  const getColorClass = (color: string) => {
    const colorMap = {
      green: 'from-green-500 to-green-600',
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      red: 'from-red-500 to-red-600',
      yellow: 'from-yellow-500 to-yellow-600',
      gray: 'from-gray-500 to-gray-600'
    };
    return colorMap[color as keyof typeof colorMap] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            География работы
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Осуществляем грузоперевозки по всей России. 
            Надёжная доставка в любую точку страны с гарантией сохранности груза.
          </p>
        </div>

        {/* Main Coverage */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Регионы доставки
            </h2>
            <div className="space-y-4">
              {regions.map((region, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{region.name}</CardTitle>
                      {getStatusBadge(region.status)}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Icon name="Clock" className="h-4 w-4 mr-1" />
                        {region.deliveryTime}
                      </div>
                      <div className="flex items-center">
                        <Icon name="MapPin" className="h-4 w-4 mr-1" />
                        {region.cities.length} городов
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {region.cities.map((city, cityIndex) => (
                        <Badge key={cityIndex} variant="outline" className="text-xs">
                          {city}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Статистика доставок
            </h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">85+</div>
                  <p className="text-gray-600">Регионов России</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <p className="text-gray-600">Городов доставки</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">99.8%</div>
                  <p className="text-gray-600">Успешных доставок</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <p className="text-gray-600">Мониторинг грузов</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Popular Routes */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Популярные направления
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialRoutes.map((route, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getColorClass('blue')} mr-3`} />
                    {route.route}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Icon name="Route" className="h-4 w-4 mr-2" />
                      {route.distance}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Icon name="Clock" className="h-4 w-4 mr-2" />
                      {route.time}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Icon name="Calendar" className="h-4 w-4 mr-2" />
                      {route.frequency}
                    </div>
                    <div className="flex items-center text-orange-600 font-semibold">
                      <Icon name="DollarSign" className="h-4 w-4 mr-2" />
                      {route.price}
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Заказать доставку
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <Icon name="Truck" className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Собственный парк</h3>
              <p className="text-gray-600">Более 200 единиц транспорта различной грузоподъёмности</p>
            </div>
            <div>
              <Icon name="Shield" className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Страхование</h3>
              <p className="text-gray-600">Полное страхование грузов на всём пути следования</p>
            </div>
            <div>
              <Icon name="Headphones" className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Поддержка 24/7</h3>
              <p className="text-gray-600">Круглосуточная поддержка и отслеживание грузов</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Не нашли ваш город?
          </h2>
          <p className="text-xl text-orange-100 mb-6">
            Свяжитесь с нами, и мы организуем доставку в любую точку России
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="animate-pulse-scale">
              <Icon name="MapPin" className="h-5 w-5 mr-2" />
              Узнать возможность доставки
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
              <Icon name="Phone" className="h-5 w-5 mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};