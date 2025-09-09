import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все вопросы', count: 24 },
    { id: 'pricing', name: 'Цены и тарифы', count: 6 },
    { id: 'delivery', name: 'Доставка', count: 8 },
    { id: 'payment', name: 'Оплата', count: 4 },
    { id: 'insurance', name: 'Страхование', count: 3 },
    { id: 'documents', name: 'Документы', count: 3 }
  ];

  const faqData = [
    {
      id: 1,
      category: 'pricing',
      question: 'Как рассчитывается стоимость перевозки?',
      answer: 'Стоимость рассчитывается исходя из расстояния, типа груза, веса, объёма и дополнительных услуг. Базовый тариф составляет от 35 рублей за километр для стандартных грузов. Точную стоимость можно рассчитать в нашем онлайн-калькуляторе.',
      popular: true
    },
    {
      id: 2,
      category: 'delivery',
      question: 'Как быстро вы можете подать транспорт?',
      answer: 'Стандартная подача транспорта осуществляется в течение 2-4 часов. Для срочных заказов предусмотрена экспресс-подача за 30-60 минут с доплатой 50-100% к базовому тарифу.',
      popular: true
    },
    {
      id: 3,
      category: 'payment',
      question: 'Какие способы оплаты вы принимаете?',
      answer: 'Мы принимаем оплату наличными водителю, банковскими картами, безналичный расчёт для юридических лиц с НДС и без НДС. Также доступна оплата через электронные кошельки и банковские переводы.',
      popular: true
    },
    {
      id: 4,
      category: 'delivery',
      question: 'Работаете ли вы в выходные и праздники?',
      answer: 'Да, мы работаем круглосуточно 365 дней в году. В выходные и праздничные дни действует наценка 30% к базовому тарифу. Диспетчерская служба работает без перерывов.',
      popular: false
    },
    {
      id: 5,
      category: 'insurance',
      question: 'Застрахованы ли грузы при перевозке?',
      answer: 'Да, все грузы автоматически застрахованы на сумму до 100 000 рублей. Для более ценных грузов предусмотрено дополнительное страхование до 10 млн рублей за дополнительную плату 0.3-0.5% от стоимости груза.',
      popular: true
    },
    {
      id: 6,
      category: 'documents',
      question: 'Какие документы вы предоставляете?',
      answer: 'Мы предоставляем все необходимые документы: товарно-транспортные накладные, счета-фактуры, акты выполненных работ, справки о стоимости услуг для налогового учёта. Документы можно получить в электронном виде.',
      popular: false
    },
    {
      id: 7,
      category: 'delivery',
      question: 'Можно ли отследить груз в пути?',
      answer: 'Да, все наши автомобили оснащены GPS-мониторингом. Вы можете отслеживать местоположение груза в режиме реального времени через наш сайт или мобильное приложение, используя номер заказа.',
      popular: true
    },
    {
      id: 8,
      category: 'pricing',
      question: 'Есть ли скидки для постоянных клиентов?',
      answer: 'Да, для постоянных клиентов действует система скидок от 5% до 15% в зависимости от объёма заказов. Также предусмотрены специальные тарифы для корпоративных клиентов и долгосрочные договоры с фиксированными ценами.',
      popular: false
    },
    {
      id: 9,
      category: 'delivery',
      question: 'Перевозите ли вы хрупкие грузы?',
      answer: 'Да, мы специализируемся на перевозке хрупких грузов. Используем специальную упаковку, мягкие крепления и опытных водителей. Для хрупких грузов действует повышенный коэффициент страхования.',
      popular: false
    },
    {
      id: 10,
      category: 'pricing',
      question: 'Включены ли грузчики в стоимость?',
      answer: 'Грузчики оплачиваются отдельно по тарифу 400 рублей в час за одного человека. В стандартную стоимость перевозки входит только работа водителя по погрузке/разгрузке лёгких грузов.',
      popular: false
    },
    {
      id: 11,
      category: 'delivery',
      question: 'Доставляете ли вы в другие города?',
      answer: 'Да, мы осуществляем междугородние перевозки по всей России и странам СНГ. Тариф для междугородних перевозок начинается от 22 рублей за километр. Предусмотрены попутные загрузки для экономии.',
      popular: false
    },
    {
      id: 12,
      category: 'payment',
      question: 'Можно ли оплатить после доставки?',
      answer: 'Да, возможна оплата после доставки наличными водителю или банковской картой. Для юридических лиц предусмотрена постоплата по договору с отсрочкой до 14 дней.',
      popular: false
    },
    {
      id: 13,
      category: 'insurance',
      question: 'Что делать при повреждении груза?',
      answer: 'При обнаружении повреждений необходимо сразу составить акт с водителем, сфотографировать повреждения и в течение 24 часов уведомить нашу диспетчерскую службу. Страховая компания рассмотрит случай в течение 10 рабочих дней.',
      popular: false
    },
    {
      id: 14,
      category: 'documents',
      question: 'Нужны ли документы на груз?',
      answer: 'Для обычных грузов достаточно описи содержимого. Для специальных грузов (медикаменты, алкоголь, опасные вещества) требуются соответствующие сертификаты и разрешения. Мы поможем с оформлением документов.',
      popular: false
    },
    {
      id: 15,
      category: 'delivery',
      question: 'Есть ли ограничения по весу и размерам?',
      answer: 'Стандартные автомобили берут грузы до 1.5-3 тонн. Для более тяжёлых грузов используем специальную технику до 20 тонн. Негабаритные грузы перевозим на специальных тралах с получением разрешений.',
      popular: false
    },
    {
      id: 16,
      category: 'pricing',
      question: 'Что входит в минимальный заказ?',
      answer: 'Минимальный заказ по городу составляет 1500 рублей, включает подачу автомобиля, работу водителя до 1 часа и проезд до 20 км. Для междугородних перевозок минимальный заказ от 3000 рублей.',
      popular: false
    }
  ];

  const filteredFAQ = faqData.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const popularQuestions = faqData.filter(item => item.popular);

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Найдите ответы на самые популярные вопросы о наших услугах. 
              Если не нашли нужную информацию, обратитесь в службу поддержки.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Поиск по вопросам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                size="sm"
                className="mb-2"
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Popular Questions Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center">
                    <Icon name="Star" className="h-5 w-5 mr-2 text-yellow-500" />
                    Популярные вопросы
                  </h3>
                  <div className="space-y-3">
                    {popularQuestions.map(item => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setSelectedCategory(item.category);
                          setSearchQuery('');
                        }}
                        className="text-left text-sm text-gray-600 hover:text-gray-900 transition-colors block"
                      >
                        {item.question}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* FAQ List */}
            <div className="lg:col-span-3">
              {filteredFAQ.length > 0 ? (
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredFAQ.map(item => (
                    <AccordionItem key={item.id} value={item.id.toString()}>
                      <Card>
                        <AccordionTrigger className="px-6 py-4 hover:no-underline">
                          <div className="flex items-start text-left">
                            {item.popular && (
                              <Icon name="Star" className="h-4 w-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                            )}
                            <span className="font-medium">{item.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                        </AccordionContent>
                      </Card>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Icon name="Search" className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="font-medium text-gray-900 mb-2">
                      Ничего не найдено
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Попробуйте изменить поисковый запрос или выбрать другую категорию
                    </p>
                    <Button variant="outline" onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}>
                      Сбросить фильтры
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Icon name="HelpCircle" className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Не нашли ответ на свой вопрос?
                  </h2>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Наши специалисты готовы помочь вам в любое время. 
                    Свяжитесь с нами удобным способом.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    <div className="text-center">
                      <div className="bg-blue-100 w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <Icon name="Phone" className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-medium mb-1">Позвонить</h3>
                      <p className="text-sm text-gray-600 mb-2">+7 (999) 123-45-67</p>
                      <p className="text-xs text-gray-500">Круглосуточно</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-green-100 w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <Icon name="MessageCircle" className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="font-medium mb-1">Онлайн-чат</h3>
                      <p className="text-sm text-gray-600 mb-2">Быстрые ответы</p>
                      <p className="text-xs text-gray-500">Пн-Пт 9:00-18:00</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-purple-100 w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <Icon name="Mail" className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-sm text-gray-600 mb-2">support@vozim-gruzim.ru</p>
                      <p className="text-xs text-gray-500">Ответ в течение часа</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button size="lg">
                      <Icon name="MessageCircle" className="h-5 w-5 mr-2" />
                      Задать вопрос
                    </Button>
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