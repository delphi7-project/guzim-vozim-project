import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Главная' },
    { 
      path: '/services', 
      label: 'Услуги',
      submenu: [
        { path: '/services/cargo', label: 'Грузоперевозки' },
        { path: '/services/moving', label: 'Переезды' },
        { path: '/services/express', label: 'Экспресс-доставка' },
        { path: '/services/refrigerator', label: 'Рефрижераторы' },
        { path: '/services/oversized', label: 'Негабарит' },
        { path: '/services/international', label: 'Международные' },
        { path: '/services/warehouse', label: 'Складские услуги' },
        { path: '/services/insurance', label: 'Страхование' }
      ]
    },
      path: '/services', 
      label: 'Услуги',
      submenu: [
        { path: '/services/cargo', label: 'Грузоперевозки' },
        { path: '/services/moving', label: 'Переезды' },
        { path: '/services/express', label: 'Экспресс-доставка' },
        { path: '/services/refrigerator', label: 'Рефрижераторы' },
        { path: '/services/oversized', label: 'Негабарит' },
        { path: '/services/international', label: 'Международные' },
        { path: '/services/warehouse', label: 'Складские услуги' },
        { path: '/services/insurance', label: 'Страхование' }
      ]
    },
    { path: '/pricing', label: 'Тарифы' },
    { 
      path: '/geography', 
      label: 'География',
      submenu: [
        { path: '/geography/moscow', label: 'Москва и МО' },
        { path: '/geography/regions', label: 'Регионы России' },
        { path: '/geography/international', label: 'Международные' },
        { path: '/geography/routes', label: 'Популярные маршруты' }
      ]
    },
      path: '/geography', 
      label: 'География',
      submenu: [
        { path: '/geography/moscow', label: 'Москва и МО' },
        { path: '/geography/regions', label: 'Регионы России' },
        { path: '/geography/international', label: 'Международные' },
        { path: '/geography/routes', label: 'Популярные маршруты' }
      ]
    },
    { path: '/fleet', label: 'Автопарк' },
    { 
      path: '/company', 
      label: 'О компании',
      submenu: [
        { path: '/company/about', label: 'О нас' },
        { path: '/company/history', label: 'История' },
        { path: '/company/team', label: 'Команда' },
        { path: '/company/certificates', label: 'Сертификаты' },
        { path: '/company/partners', label: 'Партнёры' },
        { path: '/company/vacancies', label: 'Вакансии' }
      ]
    },
    { 
      path: '/clients', 
      label: 'Клиентам',
      submenu: [
        { path: '/clients/calculator', label: 'Калькулятор' },
        { path: '/clients/tracking', label: 'Отследить груз' },
        { path: '/clients/documents', label: 'Документы' },
        { path: '/clients/payment', label: 'Оплата' },
        { path: '/clients/faq', label: 'FAQ' },
        { path: '/clients/support', label: 'Поддержка' }
      ]
    },
    { 
      path: '/company', 
      label: 'О компании',
      submenu: [
        { path: '/company/about', label: 'О нас' },
        { path: '/company/history', label: 'История' },
        { path: '/company/team', label: 'Команда' },
        { path: '/company/certificates', label: 'Сертификаты' },
        { path: '/company/partners', label: 'Партнёры' },
        { path: '/company/vacancies', label: 'Вакансии' }
      ]
    },
    { 
      path: '/clients', 
      label: 'Клиентам',
      submenu: [
        { path: '/clients/calculator', label: 'Калькулятор' },
        { path: '/clients/tracking', label: 'Отследить груз' },
        { path: '/clients/documents', label: 'Документы' },
        { path: '/clients/payment', label: 'Оплата' },
        { path: '/clients/faq', label: 'FAQ' },
        { path: '/clients/support', label: 'Поддержка' }
      ]
    },
    { path: '/reviews', label: 'Отзывы' },
    { path: '/contacts', label: 'Контакты' }
  ];

  const renderNavItem = (item: any) => {
    if (item.submenu) {
      return (
        <DropdownMenu key={item.path}>
          <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-colors hover:text-primary text-gray-600">
            {item.label}
            <Icon name="ChevronDown" className="h-4 w-4 ml-1" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {item.submenu.map((subItem: any) => (
              <DropdownMenuItem key={subItem.path} asChild>
                <Link to={subItem.path}>{subItem.label}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <Link
        key={item.path}
        to={item.path}
        className={`text-sm font-medium transition-colors hover:text-primary ${
          location.pathname === item.path
            ? 'text-primary'
            : 'text-gray-600'
        }`}
      >
        {item.label}
      </Link>
    );
  };

  const renderNavItem = (item: any) => {
    if (item.submenu) {
      return (
        <DropdownMenu key={item.path}>
          <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-colors hover:text-primary text-gray-600">
            {item.label}
            <Icon name="ChevronDown" className="h-4 w-4 ml-1" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {item.submenu.map((subItem: any) => (
              <DropdownMenuItem key={subItem.path} asChild>
                <Link to={subItem.path}>{subItem.label}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <Link
        key={item.path}
        to={item.path}
        className={`text-sm font-medium transition-colors hover:text-primary ${
          location.pathname === item.path
            ? 'text-primary'
            : 'text-gray-600'
        }`}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-orange-500 to-blue-600 p-2 rounded-lg">
              <Icon name="Truck" className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Возим Грузим
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navItems.map(item => (
              renderNavItem(item)
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4 p-4">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-gray-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="outline" size="sm">
                  <Icon name="Phone" className="h-4 w-4 mr-2" />
                  +7 (999) 123-45-67
                </Button>
                <Button size="sm">
                  Заказать звонок
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};