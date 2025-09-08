import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export const ContactsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const contacts = [
    {
      icon: 'Phone',
      title: 'Телефон',
      primary: '+7 (999) 123-45-67',
      secondary: '+7 (495) 123-45-67',
      description: 'Круглосуточно без выходных'
    },
    {
      icon: 'Mail',
      title: 'Email',
      primary: 'info@vozim-gruzim.ru',
      secondary: 'order@vozim-gruzim.ru',
      description: 'Ответим в течение 1 часа'
    },
    {
      icon: 'MapPin',
      title: 'Адрес офиса',
      primary: 'г. Москва, ул. Транспортная, д. 1',
      secondary: 'метро Сокольники',
      description: 'Пн-Пт: 9:00-18:00'
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      primary: 'Диспетчерская: 24/7',
      secondary: 'Офис: Пн-Пт 9:00-18:00',
      description: 'Выезд в любое время'
    }
  ];

  const offices = [
    {
      city: 'Москва (Главный офис)',
      address: 'ул. Транспортная, д. 1',
      phone: '+7 (495) 123-45-67',
      email: 'moscow@vozim-gruzim.ru',
      schedule: 'Пн-Пт: 9:00-18:00'
    },
    {
      city: 'Санкт-Петербург',
      address: 'пр. Логистический, д. 25',
      phone: '+7 (812) 123-45-67',
      email: 'spb@vozim-gruzim.ru',
      schedule: 'Пн-Пт: 9:00-18:00'
    },
    {
      city: 'Казань',
      address: 'ул. Грузовая, д. 12',
      phone: '+7 (843) 123-45-67',
      email: 'kazan@vozim-gruzim.ru',
      schedule: 'Пн-Пт: 9:00-18:00'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Контакты
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом. 
            Работаем круглосуточно и всегда готовы помочь.
          </p>
        </div>

        {/* Quick Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contacts.map((contact, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="bg-gradient-to-r from-orange-500 to-blue-600 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name={contact.icon as any} className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">{contact.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-gray-900 mb-1">{contact.primary}</p>
                <p className="text-sm text-gray-600 mb-2">{contact.secondary}</p>
                <p className="text-xs text-orange-600">{contact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Отправить сообщение
            </h2>
            
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                  </div>
                  
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
                    <Label htmlFor="service">Интересующая услуга</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Выберите услугу</option>
                      <option value="cargo">Перевозка грузов</option>
                      <option value="moving">Переезд</option>
                      <option value="materials">Стройматериалы</option>
                      <option value="express">Экспресс-доставка</option>
                      <option value="refrigerator">Рефрижератор</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Опишите детали вашего заказа..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" className="h-5 w-5 mr-2" />
                    Отправить сообщение
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Map placeholder and quick actions */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Наше расположение
            </h2>
            
            <Card className="mb-6">
              <CardContent className="p-0">
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Icon name="MapPin" className="h-12 w-12 mx-auto mb-2" />
                    <p>Интерактивная карта</p>
                    <p className="text-sm">г. Москва, ул. Транспортная, д. 1</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-4">
              <Button className="w-full" variant="outline">
                <Icon name="Phone" className="h-5 w-5 mr-2" />
                Заказать обратный звонок
              </Button>
              
              <Button className="w-full" variant="outline">
                <Icon name="Calculator" className="h-5 w-5 mr-2" />
                Рассчитать стоимость онлайн
              </Button>
              
              <Button className="w-full" variant="outline">
                <Icon name="MessageCircle" className="h-5 w-5 mr-2" />
                Написать в WhatsApp
              </Button>
              
              <Button className="w-full" variant="outline">
                <Icon name="Send" className="h-5 w-5 mr-2" />
                Написать в Telegram
              </Button>
            </div>
          </div>
        </div>

        {/* Offices */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Наши офисы
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-center">{office.city}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start">
                    <Icon name="MapPin" className="h-4 w-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{office.address}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Icon name="Phone" className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Icon name="Mail" className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-sm text-gray-700 hover:text-green-600 transition-colors">
                      {office.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Icon name="Clock" className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{office.schedule}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Часто задаваемые вопросы
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Как быстро вы можете подать транспорт?</h3>
                <p className="text-sm text-gray-600">Обычно подача осуществляется в течение 1-2 часов. В случае срочной необходимости можем подать за 30 минут с доплатой.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Работаете ли вы в выходные и праздники?</h3>
                <p className="text-sm text-gray-600">Да, мы работаем круглосуточно 365 дней в году. В праздничные дни действует наценка 30% к базовому тарифу.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Как оплачивать услуги?</h3>
                <p className="text-sm text-gray-600">Принимаем оплату наличными, банковскими картами, безналичный расчёт с НДС и без НДС.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Предоставляете ли документы для отчётности?</h3>
                <p className="text-sm text-gray-600">Да, предоставляем все необходимые документы: товарно-транспортные накладные, счета-фактуры, акты выполненных работ.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};