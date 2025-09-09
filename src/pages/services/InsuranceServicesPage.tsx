import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const InsuranceServicesPage = () => {
  const insuranceTypes = [
    {
      title: 'Базовое страхование',
      description: 'Стандартная защита груза',
      coverage: 'до 100 000 ₽',
      premium: '0.1% от стоимости',
      features: ['Повреждение груза', 'Частичная утрата', 'Документооборот', 'Быстрые выплаты'],
      popular: false,
      icon: 'Shield'
    },
    {
      title: 'Расширенное страхование',
      description: 'Полная защита от всех рисков',
      coverage: 'до 1 000 000 ₽',
      premium: '0.3% от стоимости',
      features: ['Все виды рисков', 'Форс-мажор', 'Кража', 'Международное покрытие'],
      popular: true,
      icon: 'ShieldCheck'
    },
    {
      title: 'Премиум страхование',
      description: 'Максимальная защита ценных грузов',
      coverage: 'до 10 000 000 ₽',
      premium: '0.5% от стоимости',
      features: ['Ценные грузы', 'Произведения искусства', 'Персональное сопровождение', 'Экспресс-выплаты'],
      popular: false,
      icon: 'Crown'
    }
  ];

  const coveredRisks = [
    {
      category: 'Транспортные риски',
      risks: ['ДТП и столкновения', 'Опрокидывание транспорта', 'Сход с дороги', 'Поломка транспорта'],
      icon: 'Car'
    },
    {
      category: 'Природные риски',
      risks: ['Наводнение', 'Землетрясение', 'Ураган и буря', 'Град и молния'],
      icon: 'Cloud'
    },
    {
      category: 'Человеческий фактор',
      risks: ['Кража и грабёж', 'Вандализм', 'Ошибки персонала', 'Халатность'],
      icon: 'Users'
    },
    {
      category: 'Технические риски',
      risks: ['Поломка оборудования', 'Отказ рефрижератора', 'Протечка топлива', 'Пожар и взрыв'],
      icon: 'Settings'
    }
  ];

  const claimProcess = [
    {
      step: '1',
      title: 'Уведомление о страховом случае',
      description: 'Сообщите о происшествии в течение 24 часов',
      time: 'в течение 24 часов'
    },
    {
      step: '2',
      title: 'Подача документов',
      description: 'Предоставьте необходимые документы и справки',
      time: 'в течение 7 дней'
    },
    {
      step: '3',
      title: 'Экспертиза ущерба',
      description: 'Независимая оценка размера ущерба',
      time: '3-5 рабочих дней'
    },
    {
      step: '4',
      title: 'Принятие решения',
      description: 'Рассмотрение заявления и принятие решения',
      time: '10 рабочих дней'
    },
    {
      step: '5',
      title: 'Выплата компенсации',
      description: 'Перечисление страхового возмещения',
      time: '3 рабочих дня'
    }
  ];

  const documents = [
    { name: 'Заявление о страховом случае', required: true },
    { name: 'Справка из ГИБДД (при ДТП)', required: true },
    { name: 'Товарно-транспортная накладная', required: true },
    { name: 'Акт о повреждении груза', required: true },
    { name: 'Фотографии повреждений', required: true },
    { name: 'Документы о стоимости груза', required: true },
    { name: 'Справка о погодных условиях', required: false },
    { name: 'Заключение экспертизы', required: false }
  ];

  const advantages = [
    {
      icon: 'Zap',
      title: 'Быстрые выплаты',
      description: 'Средний срок выплаты компенсации - 15 рабочих дней'
    },
    {
      icon: 'Globe',
      title: 'Международное покрытие',
      description: 'Страхование действует на территории России и стран СНГ'
    },
    {
      icon: 'Award',
      title: 'Надёжная компания',
      description: 'Работаем с ведущими страховыми компаниями России'
    },
    {
      icon: 'Headphones',
      title: 'Поддержка 24/7',
      description: 'Круглосуточная горячая линия для сообщения о страховых случаях'
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
              Страхование грузов
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Надёжная защита ваших грузов от всех видов рисков. 
              Работаем с ведущими страховыми компаниями России.
            </p>
          </div>

          {/* Insurance Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {insuranceTypes.map((insurance, index) => (
              <Card key={index} className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${insurance.popular ? 'border-2 border-blue-500' : ''}`}>
                {insurance.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white">
                    Рекомендуем
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Icon name={insurance.icon as any} className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{insurance.title}</CardTitle>
                  <p className="text-gray-600">{insurance.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{insurance.coverage}</div>
                    <div className="text-sm text-gray-500">максимальное покрытие</div>
                    <div className="text-lg font-semibold text-orange-600 mt-2">{insurance.premium}</div>
                    <div className="text-sm text-gray-500">страховая премия</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {insurance.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <Icon name="Check" className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full" variant={insurance.popular ? 'default' : 'outline'}>
                    Оформить страховку
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Covered Risks */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Страховые риски
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coveredRisks.map((risk, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <Icon name={risk.icon as any} className="h-8 w-8 text-red-600 mr-3" />
                      <CardTitle className="text-xl">{risk.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {risk.risks.map((riskItem, riskIndex) => (
                        <li key={riskIndex} className="flex items-center text-sm text-gray-600">
                          <Icon name="AlertTriangle" className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                          {riskItem}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Claim Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Процедура получения страховой выплаты
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {claimProcess.map((step, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                    <Badge variant="outline" className="text-xs">
                      {step.time}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Необходимые документы
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documents.map((doc, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Icon name="FileText" className="h-5 w-5 text-blue-600 mr-3" />
                        <span className="font-medium">{doc.name}</span>
                      </div>
                      <Badge variant={doc.required ? 'default' : 'outline'}>
                        {doc.required ? 'Обязательно' : 'По необходимости'}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Advantages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Преимущества нашего страхования
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

          {/* Emergency Contact */}
          <div className="bg-red-50 rounded-2xl p-8 mb-16">
            <div className="text-center">
              <Icon name="Phone" className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Горячая линия страховых случаев
              </h2>
              <p className="text-gray-600 mb-6">
                При наступлении страхового случая немедленно звоните по телефону
              </p>
              <div className="text-3xl font-bold text-red-600 mb-4">
                +7 (800) 555-HELP
              </div>
              <p className="text-sm text-gray-500">
                Работает круглосуточно, звонок бесплатный
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Защитите свой груз уже сегодня
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Оформите страховку онлайн или получите консультацию специалиста
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Icon name="Shield" className="h-5 w-5 mr-2" />
                Оформить страховку
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-500">
                <Icon name="Calculator" className="h-5 w-5 mr-2" />
                Рассчитать премию
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};