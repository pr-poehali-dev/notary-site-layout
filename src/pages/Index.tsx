import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Index() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Scale" className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-gray-900">НОТАРИУС</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#main" className="text-gray-700 hover:text-primary font-medium">Главная</a>
              <a href="#tariffs" className="text-gray-700 hover:text-primary font-medium">Тарифы</a>
              <a href="#actions" className="text-gray-700 hover:text-primary font-medium">Услуги</a>
              <a href="#verification" className="text-gray-700 hover:text-primary font-medium">Проверка</a>
              <a href="#registry" className="text-gray-700 hover:text-primary font-medium">Реестры</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary font-medium">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="main" className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Нотариальные услуги высшего качества</h1>
              <p className="text-xl mb-8 text-blue-100">Профессиональное оформление документов с соблюдением всех требований законодательства</p>
              <div className="space-y-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-50">
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  Записаться на прием
                </Button>
                <div className="flex items-center text-blue-100">
                  <Icon name="MapPin" className="mr-2 h-5 w-5" />
                  <span>Москва, ул. Тверская, 15, офис 301</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/3bcf4d94-70fd-40a6-93ca-0dd2b98b56f5.jpg" 
                alt="Нотариальный офис" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tariffs Section */}
      <section id="tariffs" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Тарифы и льготы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Icon name="FileText" className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Удостоверение доверенностей</h3>
                <p className="text-3xl font-bold text-primary mb-2">от 1 500 ₽</p>
                <p className="text-gray-600 mb-4">Для пенсионеров и инвалидов - скидка 20%</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Генеральная доверенность</li>
                  <li>• Доверенность на недвижимость</li>
                  <li>• Доверенность на авто</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Icon name="Home" className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Сделки с недвижимостью</h3>
                <p className="text-3xl font-bold text-primary mb-2">от 5 000 ₽</p>
                <p className="text-gray-600 mb-4">Многодетным семьям - льготы по тарифу</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Договоры купли-продажи</li>
                  <li>• Договоры дарения</li>
                  <li>• Брачные договоры</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Icon name="PenTool" className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Заверение подписей</h3>
                <p className="text-3xl font-bold text-primary mb-2">от 800 ₽</p>
                <p className="text-gray-600 mb-4">Студентам - скидка 15%</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Заявления в суд</li>
                  <li>• Справки и документы</li>
                  <li>• Переводы документов</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Notarial Actions */}
      <section id="actions" className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Нотариальные действия</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Icon name="FileCheck" className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Удостоверение сделок</h3>
              <p className="text-gray-600 text-sm">Купля-продажа, дарение, мена недвижимости</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Icon name="UserCheck" className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Удостоверение доверенностей</h3>
              <p className="text-gray-600 text-sm">Генеральные, специальные, разовые</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Icon name="Heart" className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Наследственные дела</h3>
              <p className="text-gray-600 text-sm">Принятие наследства, выдача свидетельств</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Icon name="Shield" className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Охранительные действия</h3>
              <p className="text-gray-600 text-sm">Обеспечение доказательств, протесты</p>
            </div>
          </div>
        </div>
      </section>

      {/* Document Verification */}
      <section id="verification" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Проверка подлинности документов</h2>
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Проверить документ</h3>
                <div className="space-y-4">
                  <Input placeholder="Номер реестровой записи" className="w-full" />
                  <Input placeholder="Дата совершения нотариального действия" type="date" className="w-full" />
                  <Button className="w-full">
                    <Icon name="Search" className="mr-2 h-4 w-4" />
                    Проверить подлинность
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Проверить печать</h3>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Icon name="Upload" className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Загрузите изображение печати для проверки</p>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Icon name="Camera" className="mr-2 h-4 w-4" />
                    Загрузить изображение
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registry and Services */}
      <section id="registry" className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Реестры и сервисы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Database" className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Единая информационная система нотариата</h3>
                <p className="text-gray-600 mb-4">Доступ к реестрам нотариальных действий</p>
                <Button variant="outline">Перейти в ЕИСН</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Globe" className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Наследственные дела</h3>
                <p className="text-gray-600 mb-4">Поиск открытых наследственных дел</p>
                <Button variant="outline">Найти дело</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="ScrollText" className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Реестр доверенностей</h3>
                <p className="text-gray-600 mb-4">Проверка действующих доверенностей</p>
                <Button variant="outline">Проверить</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ / Reference */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Справочник</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">Какие документы нужны для оформления доверенности?</AccordionTrigger>
              <AccordionContent>
                Для оформления доверенности необходимы: паспорт доверителя, данные доверенного лица (ФИО, паспортные данные), четкое описание полномочий, которые передаются по доверенности.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">Сколько действует нотариальная доверенность?</AccordionTrigger>
              <AccordionContent>
                Срок действия доверенности определяется по желанию доверителя. Если срок не указан, доверенность действует в течение одного года с момента совершения.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">Можно ли отменить нотариальную доверенность?</AccordionTrigger>
              <AccordionContent>
                Да, доверитель может в любое время отменить доверенность, подав соответствующее заявление нотариусу. Информация об отмене вносится в реестр.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">Какие льготы предусмотрены при оплате нотариальных действий?</AccordionTrigger>
              <AccordionContent>
                Льготы предоставляются инвалидам I и II группы, участникам ВОВ, пенсионерам по возрасту, многодетным семьям. Размер льготы составляет от 50% до 100% в зависимости от категории.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Контакты и специалистам</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="MapPin" className="h-5 w-5 text-primary mr-3" />
                  <span>Москва, ул. Тверская, 15, офис 301</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" className="h-5 w-5 text-primary mr-3" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="h-5 w-5 text-primary mr-3" />
                  <span>info@notary-moscow.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p>Пн-Пт: 9:00 - 18:00</p>
                    <p>Сб: 10:00 - 14:00</p>
                    <p>Вс: выходной</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Специалистам</h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Методические рекомендации</h4>
                    <p className="text-gray-600 text-sm mb-3">Последние изменения в законодательстве и практике</p>
                    <Button variant="outline" size="sm">Скачать</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Реестр нотариусов</h4>
                    <p className="text-gray-600 text-sm mb-3">Поиск нотариусов по регионам и специализации</p>
                    <Button variant="outline" size="sm">Перейти</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Обучение и повышение квалификации</h4>
                    <p className="text-gray-600 text-sm mb-3">Курсы и семинары для нотариусов</p>
                    <Button variant="outline" size="sm">Записаться</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Scale" className="h-6 w-6" />
                <span className="text-lg font-bold">НОТАРИУС</span>
              </div>
              <p className="text-gray-300 text-sm">Профессиональные нотариальные услуги в Москве</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Удостоверение сделок</li>
                <li>Наследственные дела</li>
                <li>Доверенности</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Тарифы</li>
                <li>Льготы</li>
                <li>Реестры</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <p className="text-gray-300 text-sm mb-2">+7 (495) 123-45-67</p>
              <p className="text-gray-300 text-sm">info@notary-moscow.ru</p>
            </div>
          </div>
          <hr className="my-8 border-gray-700" />
          <div className="text-center text-gray-400 text-sm">
            <p>© 2024 Нотариальная контора. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}