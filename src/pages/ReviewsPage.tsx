import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export const ReviewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const reviews = [
    {
      id: 1,
      name: 'Александр Петров',
      company: 'ООО "СтройМастер"',
      service: 'Перевозка стройматериалов',
      rating: 5,
      date: '15.08.2024',
      text: 'Отличная компания! Заказывали доставку кирпича на стройплощадку. Всё привезли точно в срок, водитель помог с разгрузкой. Цены адекватные, сервис на высоте. Обязательно обратимся ещё!',
      category: 'materials'
    },
    {
      id: 2,
      name: 'Мария Сидорова',
      company: 'Частное лицо',
      service: 'Квартирный переезд',
      rating: 5,
      date: '22.07.2024',
      text: 'Переезжали из двушки, очень боялись за сохранность мебели. Ребята работали аккуратно, всё упаковали, перевезли без повреждений. Особенно понравилось отношение к клиентам - всё объяснили, помогли. Рекомендую!',
      category: 'moving'
    },
    {
      id: 3,
      name: 'Дмитрий Козлов',
      company: 'ИП Козлов',
      service: 'Срочная доставка',
      rating: 5,
      date: '05.09.2024',
      text: 'Нужно было срочно доставить товар клиенту. Подали машину за 20 минут, довезли за 2 часа до другого конца города. Водитель на связи был постоянно, отчитывался о местоположении. Спасибо за оперативность!',
      category: 'express'
    },
    {
      id: 4,
      name: 'Елена Волкова',
      company: 'Магазин "Домашний уют"',
      service: 'Доставка мебели',
      rating: 4,
      date: '12.08.2024',
      text: 'Заказывали доставку мебели для магазина. В целом всё хорошо, но немного задержались по времени из-за пробок. Мебель доставили целую, водитель вежливый. Цена устроила.',
      category: 'furniture'
    },
    {
      id: 5,
      name: 'Игорь Морозов',
      company: 'ООО "ТехСервис"',
      service: 'Междугородняя перевозка',
      rating: 5,
      date: '28.07.2024',
      text: 'Возили оборудование из Москвы в Казань. Расстояние большое, переживали за сохранность. Всё довезли идеально, упаковка целая, оборудование работает. Документы оформили правильно. Профессиональная работа!',
      category: 'equipment'
    },
    {
      id: 6,
      name: 'Анна Белова',
      company: 'Кафе "Вкусняшка"',
      service: 'Доставка продуктов',
      rating: 5,
      date: '19.08.2024',
      text: 'Постоянно заказываем доставку продуктов для кафе. Всегда привозят свежие продукты, соблюдают температурный режим для молочки и мяса. Водители пунктуальные, цены конкурентные.',
      category: 'food'
    },
    {
      id: 7,
      name: 'Владимир Смирнов',
      company: 'Частное лицо',
      service: 'Офисный переезд',
      rating: 5,
      date: '03.09.2024',
      text: 'Переезжали офис в выходные, чтобы не мешать работе. Команда приехала точно во время, работали быстро и организованно. Технику и документы перевезли аккуратно. Очень довольны сервисом!',
      category: 'moving'
    },
    {
      id: 8,
      name: 'Татьяна Лебедева',
      company: 'ООО "Флора"',
      service: 'Доставка цветов',
      rating: 4,
      date: '11.08.2024',
      text: 'Заказывали доставку живых цветов для свадьбы. Букеты довезли в хорошем состоянии, но водитель немного опоздал. В остальном всё отлично, цены разумные.',
      category: 'flowers'
    }
  ];

  const categories = [
    { value: 'all', label: 'Все отзывы' },
    { value: 'moving', label: 'Переезды' },
    { value: 'materials', label: 'Стройматериалы' },
    { value: 'express', label: 'Экспресс-доставка' },
    { value: 'equipment', label: 'Оборудование' }
  ];

  const stats = [
    { value: '4.9', label: 'Средняя оценка', icon: 'Star' },
    { value: '1200+', label: 'Отзывов', icon: 'MessageSquare' },
    { value: '98%', label: 'Довольных клиентов', icon: 'ThumbsUp' },
    { value: '5', label: 'Лет на рынке', icon: 'Award' }
  ];

  const filteredReviews = selectedCategory === 'all' 
    ? reviews 
    : reviews.filter(review => review.category === selectedCategory);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon 
        key={i} 
        name="Star" 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Отзывы клиентов
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мнения реальных клиентов о качестве наших услуг. 
            Читайте честные отзывы и убедитесь в нашей надёжности.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Icon name={stat.icon as any} className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.value)}
              size="sm"
              className="mb-2"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredReviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">{review.name}</h3>
                    <p className="text-sm text-gray-600">{review.company}</p>
                    <p className="text-xs text-orange-600 mt-1">{review.service}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex space-x-1 mb-1">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed">
                  {review.text}
                </p>
                
                <div className="flex items-center mt-4 pt-4 border-t">
                  <Icon name="CheckCircle" className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-xs text-green-600">Проверенный отзыв</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reviews Platforms */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Найдите нас на популярных платформах
            </h2>
            <p className="text-gray-600">
              Мы присутствуем на ведущих площадках отзывов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <div className="bg-orange-100 w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Icon name="Star" className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-medium mb-1">Яндекс.Услуги</h3>
                <p className="text-sm text-gray-600">4.9 из 5</p>
                <p className="text-xs text-orange-600">320 отзывов</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Icon name="MessageSquare" className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-medium mb-1">2ГИС</h3>
                <p className="text-sm text-gray-600">4.8 из 5</p>
                <p className="text-xs text-blue-600">256 отзывов</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <div className="bg-green-100 w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Icon name="ThumbsUp" className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-medium mb-1">Флампа</h3>
                <p className="text-sm text-gray-600">4.9 из 5</p>
                <p className="text-xs text-green-600">189 отзывов</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <div className="bg-purple-100 w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Icon name="Award" className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-medium mb-1">Отзовик</h3>
                <p className="text-sm text-gray-600">4.8 из 5</p>
                <p className="text-xs text-purple-600">145 отзывов</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Leave Review CTA */}
        <div className="bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Поделитесь своим опытом
          </h2>
          <p className="text-xl text-orange-100 mb-6">
            Ваш отзыв поможет нам стать ещё лучше и поможет другим клиентам сделать выбор
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="animate-pulse-scale">
              <Icon name="Edit" className="h-5 w-5 mr-2" />
              Оставить отзыв
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
              <Icon name="Star" className="h-5 w-5 mr-2" />
              Поставить оценку
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};