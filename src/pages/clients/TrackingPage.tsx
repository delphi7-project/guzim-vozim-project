import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const TrackingPage = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState<any>(null);
  const [isTracking, setIsTracking] = useState(false);

  // Демо данные для отслеживания
  const demoTrackingData = {
    'VG2024001': {
      orderNumber: 'VG2024001',
      status: 'in_transit',
      statusText: 'В пути',
      from: 'Москва, ул. Складская, 15',
      to: 'Санкт-Петербург, пр. Невский, 100',
      cargo: 'Офисная мебель',
      weight: '850 кг',
      driver: 'Иванов Сергей Петрович',
      driverPhone: '+7 (999) 123-45-67',
      vehicle: 'Газель Next, А123БВ777',
      estimatedDelivery: '2024-01-15 18:00',
      currentLocation: 'Тверь, трасса М11',
      progress: 65,
      events: [
        {
          time: '2024-01-14 09:00',
          status: 'created',
          description: 'Заказ создан',
          location: 'Москва'
        },
        {
          time: '2024-01-14 10:30',
          status: 'picked_up',
          description: 'Груз забран',
          location: 'Москва, ул. Складская, 15'
        },
        {
          time: '2024-01-14 11:00',
          status: 'in_transit',
          description: 'Груз в пути',
          location: 'Москва, МКАД'
        },
        {
          time: '2024-01-15 14:30',
          status: 'checkpoint',
          description: 'Прохождение контрольной точки',
          location: 'Тверь, трасса М11'
        }
      ]
    },
    'VG2024002': {
      orderNumber: 'VG2024002',
      status: 'delivered',
      statusText: 'Доставлен',
      from: 'Казань, ул. Промышленная, 5',
      to: 'Москва, ул. Офисная, 25',
      cargo: 'Компьютерная техника',
      weight: '120 кг',
      driver: 'Петров Алексей Иванович',
      driverPhone: '+7 (999) 987-65-43',
      vehicle: 'Ford Transit, В456ГД123',
      estimatedDelivery: '2024-01-14 16:00',
      actualDelivery: '2024-01-14 15:45',
      currentLocation: 'Доставлен',
      progress: 100,
      events: [
        {
          time: '2024-01-13 08:00',
          status: 'created',
          description: 'Заказ создан',
          location: 'Казань'
        },
        {
          time: '2024-01-13 09:15',
          status: 'picked_up',
          description: 'Груз забран',
          location: 'Казань, ул. Промышленная, 5'
        },
        {
          time: '2024-01-13 09:30',
          status: 'in_transit',
          description: 'Груз в пути',
          location: 'Казань'
        },
        {
          time: '2024-01-14 15:45',
          status: 'delivered',
          description: 'Груз доставлен получателю',
          location: 'Москва, ул. Офисная, 25'
        }
      ]
    }
  };

  const handleTrack = () => {
    setIsTracking(true);
    
    setTimeout(() => {
      const result = demoTrackingData[trackingNumber as keyof typeof demoTrackingData];
      setTrackingResult(result || null);
      setIsTracking(false);
    }, 1500);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'created': return 'bg-blue-500';
      case 'picked_up': return 'bg-yellow-500';
      case 'in_transit': return 'bg-orange-500';
      case 'checkpoint': return 'bg-purple-500';
      case 'delivered': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'created': return 'FileText';
      case 'picked_up': return 'Package';
      case 'in_transit': return 'Truck';
      case 'checkpoint': return 'MapPin';
      case 'delivered': return 'CheckCircle';
      default: return 'Circle';
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Отслеживание груза
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Отследите местоположение вашего груза в режиме реального времени. 
              Введите номер заказа для получения актуальной информации.
            </p>
          </div>

          {/* Tracking Form */}
          <div className="max-w-2xl mx-auto mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Search" className="h-6 w-6 mr-2 text-blue-600" />
                  Поиск груза
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Input
                    placeholder="Введите номер заказа (например: VG2024001)"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleTrack}
                    disabled={!trackingNumber || isTracking}
                  >
                    {isTracking ? (
                      <>
                        <Icon name="Loader" className="h-4 w-4 mr-2 animate-spin" />
                        Поиск...
                      </>
                    ) : (
                      <>
                        <Icon name="Search" className="h-4 w-4 mr-2" />
                        Отследить
                      </>
                    )}
                  </Button>
                </div>
                
                <div className="mt-4 text-sm text-gray-600">
                  <p className="mb-2">Для демонстрации используйте номера:</p>
                  <div className="flex gap-2">
                    <Badge 
                      variant="outline" 
                      className="cursor-pointer hover:bg-gray-100"
                      onClick={() => setTrackingNumber('VG2024001')}
                    >
                      VG2024001 (в пути)
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className="cursor-pointer hover:bg-gray-100"
                      onClick={() => setTrackingNumber('VG2024002')}
                    >
                      VG2024002 (доставлен)
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tracking Result */}
          {trackingResult && (
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Order Info */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Icon name="Package" className="h-6 w-6 mr-2 text-orange-600" />
                      Заказ {trackingResult.orderNumber}
                    </CardTitle>
                    <Badge className={`${getStatusColor(trackingResult.status)} text-white`}>
                      {trackingResult.statusText}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Откуда</h4>
                      <p className="text-sm text-gray-600">{trackingResult.from}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Куда</h4>
                      <p className="text-sm text-gray-600">{trackingResult.to}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Груз</h4>
                      <p className="text-sm text-gray-600">{trackingResult.cargo}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Вес</h4>
                      <p className="text-sm text-gray-600">{trackingResult.weight}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="MapPin" className="h-6 w-6 mr-2 text-blue-600" />
                    Текущее местоположение
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Прогресс доставки</span>
                      <span className="text-sm font-medium text-gray-700">{trackingResult.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${trackingResult.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-lg font-medium text-gray-900 mb-2">
                    {trackingResult.currentLocation}
                  </div>
                  
                  {trackingResult.status !== 'delivered' && (
                    <div className="text-sm text-gray-600">
                      Ожидаемое время доставки: {new Date(trackingResult.estimatedDelivery).toLocaleString('ru-RU')}
                    </div>
                  )}
                  
                  {trackingResult.actualDelivery && (
                    <div className="text-sm text-green-600">
                      Доставлен: {new Date(trackingResult.actualDelivery).toLocaleString('ru-RU')}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Driver Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="User" className="h-6 w-6 mr-2 text-green-600" />
                    Информация о водителе
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Водитель</h4>
                      <p className="text-sm text-gray-600">{trackingResult.driver}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Телефон</h4>
                      <p className="text-sm text-gray-600">{trackingResult.driverPhone}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Транспорт</h4>
                      <p className="text-sm text-gray-600">{trackingResult.vehicle}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex gap-2">
                    <Button size="sm" variant="outline">
                      <Icon name="Phone" className="h-4 w-4 mr-2" />
                      Позвонить водителю
                    </Button>
                    <Button size="sm" variant="outline">
                      <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
                      Написать в чат
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Clock" className="h-6 w-6 mr-2 text-purple-600" />
                    История перемещений
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {trackingResult.events.map((event: any, index: number) => (
                      <div key={index} className="flex items-start">
                        <div className={`w-8 h-8 rounded-full ${getStatusColor(event.status)} flex items-center justify-center mr-4 flex-shrink-0`}>
                          <Icon name={getStatusIcon(event.status) as any} className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-gray-900">{event.description}</h4>
                            <span className="text-sm text-gray-500">
                              {new Date(event.time).toLocaleString('ru-RU')}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">{event.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* No Result */}
          {trackingNumber && trackingResult === null && !isTracking && (
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Icon name="AlertCircle" className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="font-medium text-gray-900 mb-2">
                    Заказ не найден
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Проверьте правильность введённого номера заказа
                  </p>
                  <Button variant="outline" onClick={() => setTrackingNumber('')}>
                    Попробовать ещё раз
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Help Section */}
          <div className="max-w-4xl mx-auto mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="HelpCircle" className="h-6 w-6 mr-2 text-blue-600" />
                  Нужна помощь?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Icon name="Phone" className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-medium mb-1">Горячая линия</h3>
                    <p className="text-sm text-gray-600 mb-2">+7 (999) 123-45-67</p>
                    <p className="text-xs text-gray-500">Круглосуточно</p>
                  </div>
                  <div className="text-center">
                    <Icon name="MessageCircle" className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-medium mb-1">Онлайн-чат</h3>
                    <p className="text-sm text-gray-600 mb-2">Быстрые ответы</p>
                    <p className="text-xs text-gray-500">Пн-Пт 9:00-18:00</p>
                  </div>
                  <div className="text-center">
                    <Icon name="Mail" className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-sm text-gray-600 mb-2">support@vozim-gruzim.ru</p>
                    <p className="text-xs text-gray-500">Ответ в течение часа</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};