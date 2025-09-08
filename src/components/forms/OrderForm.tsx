import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface OrderFormProps {
  onClose?: () => void;
}

export const OrderForm = ({ onClose }: OrderFormProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: '',
    fromAddress: '',
    toAddress: '',
    cargoType: '',
    weight: '',
    volume: '',
    dimensions: '',
    loadingDate: '',
    loadingTime: '',
    unloadingTime: '',
    additionalServices: [] as string[],
    name: '',
    phone: '',
    email: '',
    company: '',
    comments: ''
  });

  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const serviceTypes = [
    { id: 'cargo', label: 'Перевозка грузов', icon: 'Package', basePrice: 35 },
    { id: 'moving', label: 'Переезд', icon: 'Home', basePrice: 50 },
    { id: 'materials', label: 'Стройматериалы', icon: 'Hammer', basePrice: 40 },
    { id: 'express', label: 'Экспресс-доставка', icon: 'Zap', basePrice: 60 },
    { id: 'refrigerator', label: 'Рефрижератор', icon: 'Snowflake', basePrice: 55 },
    { id: 'oversized', label: 'Негабарит', icon: 'Plane', basePrice: 80 }
  ];

  const additionalServices = [
    { id: 'loaders', label: 'Грузчики (400 ₽/час/чел)', price: 400 },
    { id: 'packing', label: 'Упаковка (200 ₽/м³)', price: 200 },
    { id: 'lift', label: 'Подъём на этаж (15 ₽/этаж/место)', price: 15 },
    { id: 'assembly', label: 'Сборка/разборка мебели (1500 ₽/комната)', price: 1500 },
    { id: 'insurance', label: 'Дополнительное страхование (+3% от стоимости)', price: 0 },
    { id: 'express', label: 'Экспресс-подача до 30 мин (+50%)', price: 0 }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (serviceId: string) => {
    setFormData(prev => ({ ...prev, serviceType: serviceId }));
    calculatePrice({ ...formData, serviceType: serviceId });
  };

  const handleAdditionalServiceToggle = (serviceId: string) => {
    const newServices = formData.additionalServices.includes(serviceId)
      ? formData.additionalServices.filter(s => s !== serviceId)
      : [...formData.additionalServices, serviceId];
    
    setFormData(prev => ({ ...prev, additionalServices: newServices }));
    calculatePrice({ ...formData, additionalServices: newServices });
  };

  const calculatePrice = (data: typeof formData) => {
    if (!data.serviceType) return;
    
    const service = serviceTypes.find(s => s.id === data.serviceType);
    if (!service) return;

    let basePrice = service.basePrice;
    const distance = 50; // Mock distance calculation
    let totalPrice = basePrice * distance;

    // Add weight multiplier
    if (data.weight) {
      const weight = parseFloat(data.weight);
      if (weight > 1.5) totalPrice *= 1.2;
      if (weight > 3) totalPrice *= 1.5;
    }

    // Add additional services
    data.additionalServices.forEach(serviceId => {
      const additionalService = additionalServices.find(s => s.id === serviceId);
      if (additionalService) {
        if (serviceId === 'express') {
          totalPrice *= 1.5;
        } else if (serviceId === 'insurance') {
          totalPrice *= 1.03;
        } else {
          totalPrice += additionalService.price;
        }
      }
    });

    setEstimatedPrice(Math.round(totalPrice));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order submitted:', formData);
    alert('Спасибо за заказ! Мы свяжемся с вами в течение 10 минут для подтверждения.');
    if (onClose) onClose();
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl flex items-center justify-center">
            <Icon name="Calculator" className="h-6 w-6 mr-2 text-orange-600" />
            Оформить заказ
          </CardTitle>
          <div className="flex justify-center mt-4">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`w-8 h-8 rounded-full flex items-center justify-center mx-2 ${
                  step >= num ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}
              >
                {num}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2 text-sm text-gray-600">
            <span className="mx-2">Услуга</span>
            <span className="mx-2">Детали</span>
            <span className="mx-2">Контакты</span>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <Label className="text-lg font-semibold mb-4 block">Выберите тип услуги</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {serviceTypes.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => handleServiceChange(service.id)}
                        className={`p-4 border-2 rounded-lg text-left transition-all hover:shadow-md ${
                          formData.serviceType === service.id
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center mb-2">
                          <Icon name={service.icon as any} className="h-6 w-6 text-orange-600 mr-2" />
                          <span className="font-medium">{service.label}</span>
                        </div>
                        <span className="text-sm text-gray-600">от {service.basePrice} ₽/км</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fromAddress">Откуда забрать</Label>
                    <Input
                      id="fromAddress"
                      name="fromAddress"
                      value={formData.fromAddress}
                      onChange={handleInputChange}
                      placeholder="Адрес загрузки"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="toAddress">Куда доставить</Label>
                    <Input
                      id="toAddress"
                      name="toAddress"
                      value={formData.toAddress}
                      onChange={handleInputChange}
                      placeholder="Адрес доставки"
                      required
                    />
                  </div>
                </div>

                {estimatedPrice && (
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          ≈ {estimatedPrice.toLocaleString()} ₽
                        </div>
                        <div className="text-sm text-green-700">
                          Предварительная стоимость
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}

            {/* Step 2: Details */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <Label className="text-lg font-semibold mb-4 block">Детали груза и доставки</Label>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <Label htmlFor="weight">Вес (кг)</Label>
                      <Input
                        id="weight"
                        name="weight"
                        type="number"
                        value={formData.weight}
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
                        value={formData.volume}
                        onChange={handleInputChange}
                        placeholder="1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dimensions">Размеры (ДxШxВ, см)</Label>
                      <Input
                        id="dimensions"
                        name="dimensions"
                        value={formData.dimensions}
                        onChange={handleInputChange}
                        placeholder="100x50x30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <Label htmlFor="loadingDate">Дата загрузки</Label>
                      <Input
                        id="loadingDate"
                        name="loadingDate"
                        type="date"
                        value={formData.loadingDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="loadingTime">Время загрузки</Label>
                      <Input
                        id="loadingTime"
                        name="loadingTime"
                        type="time"
                        value={formData.loadingTime}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="unloadingTime">Время разгрузки</Label>
                      <Input
                        id="unloadingTime"
                        name="unloadingTime"
                        type="time"
                        value={formData.unloadingTime}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="cargoType">Тип груза</Label>
                    <Input
                      id="cargoType"
                      name="cargoType"
                      value={formData.cargoType}
                      onChange={handleInputChange}
                      placeholder="Коробки, мебель, оборудование..."
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-lg font-semibold mb-4 block">Дополнительные услуги</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {additionalServices.map((service) => (
                      <label
                        key={service.id}
                        className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                      >
                        <input
                          type="checkbox"
                          checked={formData.additionalServices.includes(service.id)}
                          onChange={() => handleAdditionalServiceToggle(service.id)}
                          className="mr-3"
                        />
                        <span className="text-sm">{service.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {estimatedPrice && (
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          ≈ {estimatedPrice.toLocaleString()} ₽
                        </div>
                        <div className="text-sm text-blue-700">
                          Обновленная стоимость
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}

            {/* Step 3: Contact Information */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <Label className="text-lg font-semibold mb-4 block">Контактная информация</Label>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <Label htmlFor="name">Имя *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ваше имя"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+7 (999) 123-45-67"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Компания</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="ООО Название"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="comments">Дополнительные пожелания</Label>
                    <Textarea
                      id="comments"
                      name="comments"
                      rows={4}
                      value={formData.comments}
                      onChange={handleInputChange}
                      placeholder="Особенности груза, требования к доставке..."
                    />
                  </div>
                </div>

                {estimatedPrice && (
                  <Card className="bg-gradient-to-r from-orange-500 to-blue-600 text-white">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-2">
                          ≈ {estimatedPrice.toLocaleString()} ₽
                        </div>
                        <div className="text-orange-100 mb-4">
                          Итоговая предварительная стоимость
                        </div>
                        <Badge className="bg-white/20 text-white border-white/30">
                          Точная цена будет рассчитана после обработки заявки
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              {step > 1 && (
                <Button type="button" variant="outline" onClick={prevStep}>
                  <Icon name="ArrowLeft" className="h-4 w-4 mr-2" />
                  Назад
                </Button>
              )}
              
              <div className="ml-auto flex gap-2">
                {step < 3 ? (
                  <Button 
                    type="button" 
                    onClick={nextStep}
                    disabled={step === 1 && !formData.serviceType}
                  >
                    Далее
                    <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button type="submit" className="animate-pulse-scale">
                    <Icon name="Send" className="h-4 w-4 mr-2" />
                    Отправить заказ
                  </Button>
                )}
              </div>
            </div>

            {step === 3 && (
              <p className="text-xs text-gray-500 text-center mt-4">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};