import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const CalculatorPage = () => {
  const [calculatorData, setCalculatorData] = useState({
    fromAddress: '',
    toAddress: '',
    cargoType: 'general',
    weight: '',
    volume: '',
    dimensions: '',
    serviceType: 'standard',
    additionalServices: [] as string[],
    loadingDate: '',
    urgency: 'standard'
  });

  const [result, setResult] = useState<any>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const cargoTypes = [
    { value: 'general', label: 'Обычный груз', multiplier: 1.0 },
    { value: 'fragile', label: 'Хрупкий груз', multiplier: 1.2 },
    { value: 'valuable', label: 'Ценный груз', multiplier: 1.5 },
    { value: 'dangerous', label: 'Опасный груз', multiplier: 2.0 },
    { value: 'oversized', label: 'Негабаритный груз', multiplier: 1.8 },
    { value: 'perishable', label: 'Скоропортящийся', multiplier: 1.3 }
  ];

  const serviceTypes = [
    { value: 'standard', label: 'Стандартная доставка', multiplier: 1.0, time: '1-2 дня' },
    { value: 'express', label: 'Экспресс-доставка', multiplier: 1.5, time: '4-8 часов' },
    { value: 'urgent', label: 'Срочная доставка', multiplier: 2.0, time: '2-4 часа' },
    { value: 'scheduled', label: 'По расписанию', multiplier: 0.9, time: 'по графику' }
  ];

  const additionalServices = [
    { value: 'loaders', label: 'Грузчики', price: 400 },
    { value: 'packing', label: 'Упаковка', price: 200 },
    { value: 'insurance', label: 'Дополнительное страхование', price: 0 },
    { value: 'lift', label: 'Подъём на этаж', price: 15 },
    { value: 'assembly', label: 'Сборка/разборка мебели', price: 1500 },
    { value: 'storage', label: 'Временное хранение', price: 50 }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCalculatorData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (serviceValue: string) => {
    setCalculatorData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(serviceValue)
        ? prev.additionalServices.filter(s => s !== serviceValue)
        : [...prev.additionalServices, serviceValue]
    }));
  };

  const calculateCost = () => {
    setIsCalculating(true);
    
    // Имитация расчёта
    setTimeout(() => {
      const baseDistance = 50; // км
      const basePricePerKm = 35;
      
      const cargoMultiplier = cargoTypes.find(t => t.value === calculatorData.cargoType)?.multiplier || 1;
      const serviceMultiplier = serviceTypes.find(t => t.value === calculatorData.serviceType)?.multiplier || 1;
      
      let basePrice = baseDistance * basePricePerKm * cargoMultiplier * serviceMultiplier;
      
      // Добавляем стоимость дополнительных услуг
      let additionalCost = 0;
      calculatorData.additionalServices.forEach(service => {
        const serviceData = additionalServices.find(s => s.value === service);
        if (serviceData) {
          if (service === 'insurance') {
            additionalCost += basePrice * 0.03; // 3% от стоимости
          } else {
            additionalCost += serviceData.price;
          }
        }
      });
      
      const totalPrice = Math.round(basePrice + additionalCost);
      const serviceInfo = serviceTypes.find(t => t.value === calculatorData.serviceType);
      
      setResult({
        basePrice: Math.round(basePrice),
        additionalCost: Math.round(additionalCost),
        totalPrice,
        distance: baseDistance,
        deliveryTime: serviceInfo?.time || '1-2 дня',
        breakdown: {
          transport: Math.round(basePrice * 0.7),
          fuel: Math.round(basePrice * 0.2),
          insurance: Math.round(basePrice * 0.05),
          other: Math.round(basePrice * 0.05)
        }
      });
      
      setIsCalculating(false);
    }, 2000);
  };

  const resetCalculator = () => {
    setCalculatorData({
      fromAddress: '',
      toAddress: '',
      cargoType: 'general',
      weight: '',
      volume: '',
      dimensions: '',
      serviceType: 'standard',
      additionalServices: [],
      loadingDate: '',
      urgency: 'standard'
    });
    setResult(null);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Калькулятор стоимости
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Рассчитайте стоимость перевозки онлайн. 
              Укажите параметры груза и получите точную цену за 2 минуты.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calculator Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Calculator" className="h-6 w-6 mr-2 text-orange-600" />
                    Параметры перевозки
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Addresses */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fromAddress">Откуда</Label>
                      <Input
                        id="fromAddress"
                        name="fromAddress"
                        value={calculatorData.fromAddress}
                        onChange={handleInputChange}
                        placeholder="Адрес загрузки"
                      />
                    </div>
                    <div>
                      <Label htmlFor="toAddress">Куда</Label>
                      <Input
                        id="toAddress"
                        name="toAddress"
                        value={calculatorData.toAddress}
                        onChange={handleInputChange}
                        placeholder="Адрес доставки"
                      />
                    </div>
                  </div>

                  {/* Cargo Type */}
                  <div>
                    <Label htmlFor="cargoType">Тип груза</Label>
                    <select
                      id="cargoType"
                      name="cargoType"
                      value={calculatorData.cargoType}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      {cargoTypes.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Cargo Parameters */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="weight">Вес (кг)</Label>
                      <Input
                        id="weight"
                        name="weight"
                        type="number"
                        value={calculatorData.weight}
                        onChange={handleInputChange}
                        placeholder="100"
                      />
                    </div>
                    <div>
                      <Label htmlFor="volume">Объём (м³)</Label>
                      <Input
                        id="volume"
                        name="volume"
                        type="number"
                        step="0.1"
                        value={calculatorData.volume}
                        onChange={handleInputChange}
                        placeholder="1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dimensions">Размеры (ДxШxВ, см)</Label>
                      <Input
                        id="dimensions"
                        name="dimensions"
                        value={calculatorData.dimensions}
                        onChange={handleInputChange}
                        placeholder="100x50x30"
                      />
                    </div>
                  </div>

                  {/* Service Type */}
                  <div>
                    <Label>Тип доставки</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                      {serviceTypes.map(service => (
                        <label
                          key={service.value}
                          className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                            calculatorData.serviceType === service.value
                              ? 'border-orange-500 bg-orange-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="serviceType"
                            value={service.value}
                            checked={calculatorData.serviceType === service.value}
                            onChange={handleInputChange}
                            className="mr-3"
                          />
                          <div>
                            <div className="font-medium">{service.label}</div>
                            <div className="text-sm text-gray-600">{service.time}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Additional Services */}
                  <div>
                    <Label>Дополнительные услуги</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                      {additionalServices.map(service => (
                        <label
                          key={service.value}
                          className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                        >
                          <input
                            type="checkbox"
                            checked={calculatorData.additionalServices.includes(service.value)}
                            onChange={() => handleServiceToggle(service.value)}
                            className="mr-3"
                          />
                          <div className="flex-1">
                            <div className="font-medium">{service.label}</div>
                            <div className="text-sm text-gray-600">
                              {service.value === 'insurance' ? '3% от стоимости' : `${service.price} ₽`}
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Loading Date */}
                  <div>
                    <Label htmlFor="loadingDate">Дата загрузки</Label>
                    <Input
                      id="loadingDate"
                      name="loadingDate"
                      type="date"
                      value={calculatorData.loadingDate}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button 
                      onClick={calculateCost} 
                      disabled={isCalculating}
                      className="flex-1"
                    >
                      {isCalculating ? (
                        <>
                          <Icon name="Loader" className="h-4 w-4 mr-2 animate-spin" />
                          Расчёт...
                        </>
                      ) : (
                        <>
                          <Icon name="Calculator" className="h-4 w-4 mr-2" />
                          Рассчитать стоимость
                        </>
                      )}
                    </Button>
                    <Button variant="outline" onClick={resetCalculator}>
                      <Icon name="RotateCcw" className="h-4 w-4 mr-2" />
                      Сбросить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Result */}
            <div>
              {result ? (
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-600">
                      <Icon name="CheckCircle" className="h-6 w-6 mr-2" />
                      Результат расчёта
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        {result.totalPrice.toLocaleString()} ₽
                      </div>
                      <div className="text-sm text-gray-600">
                        Итоговая стоимость
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Базовая стоимость:</span>
                        <span>{result.basePrice.toLocaleString()} ₽</span>
                      </div>
                      {result.additionalCost > 0 && (
                        <div className="flex justify-between">
                          <span>Доп. услуги:</span>
                          <span>{result.additionalCost.toLocaleString()} ₽</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Расстояние:</span>
                        <span>{result.distance} км</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Время доставки:</span>
                        <span>{result.deliveryTime}</span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-medium mb-2">Детализация:</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Транспорт:</span>
                          <span>{result.breakdown.transport.toLocaleString()} ₽</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Топливо:</span>
                          <span>{result.breakdown.fuel.toLocaleString()} ₽</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Страхование:</span>
                          <span>{result.breakdown.insurance.toLocaleString()} ₽</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Прочее:</span>
                          <span>{result.breakdown.other.toLocaleString()} ₽</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Button className="w-full">
                        <Icon name="Phone" className="h-4 w-4 mr-2" />
                        Заказать перевозку
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Icon name="Download" className="h-4 w-4 mr-2" />
                        Скачать расчёт
                      </Button>
                    </div>

                    <div className="text-xs text-gray-500 text-center">
                      Расчёт действителен в течение 24 часов
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="sticky top-4">
                  <CardContent className="pt-6 text-center">
                    <Icon name="Calculator" className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="font-medium text-gray-900 mb-2">
                      Заполните форму
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Укажите параметры груза и нажмите "Рассчитать стоимость"
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};