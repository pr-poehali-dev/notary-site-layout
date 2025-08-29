import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 text-sm">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-primary">Для граждан</a>
              <a href="#" className="text-gray-600 hover:text-primary">Для нотариусов</a>
              <a href="#" className="text-gray-600 hover:text-primary">Для СМИ</a>
            </div>
            <div className="flex space-x-4 text-gray-600">
              <span>Версия для слабовидящих</span>
              <span>English</span>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b-2 border-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Icon name="Scale" className="h-12 w-12 text-primary" />
                <div className="ml-3">
                  <div className="text-xl font-bold text-gray-900">ФЕДЕРАЛЬНАЯ</div>
                  <div className="text-xl font-bold text-primary">НОТАРИАЛЬНАЯ ПАЛАТА</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-primary font-medium">О нотариате</a>
              <a href="#services" className="text-gray-700 hover:text-primary font-medium">Услуги</a>
              <a href="#registries" className="text-gray-700 hover:text-primary font-medium">Реестры</a>
              <a href="#documents" className="text-gray-700 hover:text-primary font-medium">Документы</a>
              <a href="#news" className="text-gray-700 hover:text-primary font-medium">Новости</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Нотариат — 
                <span className="text-primary"> гарантия</span> законности
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Официальная информация о нотариате России. 
                Публичные реестры, онлайн-сервисы и справочная информация.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-4">Быстрый поиск</h3>
                <div className="space-y-4">
                  <Input placeholder="Поиск по реестрам нотариальных действий" className="w-full" />
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm">Найти нотариуса</Button>
                    <Button size="sm" variant="outline">Проверить документ</Button>
                    <Button size="sm" variant="outline">Наследственные дела</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/3bcf4d94-70fd-40a6-93ca-0dd2b98b56f5.jpg" 
                alt="Нотариальный офис" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-xl">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Онлайн сервисы</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Популярные сервисы</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <Icon name="Search" className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Поиск нотариуса</h3>
                <p className="text-gray-600 text-sm mb-4">Найти нотариуса по региону и специализации</p>
                <Button variant="outline" size="sm" className="w-full">Найти</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <Icon name="FileCheck" className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Проверка документов</h3>
                <p className="text-gray-600 text-sm mb-4">Проверить подлинность нотариальных документов</p>
                <Button variant="outline" size="sm" className="w-full">Проверить</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <Icon name="Heart" className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Наследственные дела</h3>
                <p className="text-gray-600 text-sm mb-4">Поиск информации о наследственных делах</p>
                <Button variant="outline" size="sm" className="w-full">Найти дело</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <Icon name="ScrollText" className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Реестр доверенностей</h3>
                <p className="text-gray-600 text-sm mb-4">Информация о доверенностях в едином реестре</p>
                <Button variant="outline" size="sm" className="w-full">Открыть</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Information Blocks */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">О российском нотариате</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Нотариат в Российской Федерации — система органов и должностных лиц, 
                  на которых возложено удостоверение бесспорных прав и фактов, 
                  свидетельствование документов, выписок из них, придание документам исполнительной силы.
                </p>
                <p className="mb-4">
                  Российский нотариат — институт гражданского общества, призванный обеспечить 
                  защиту прав и законных интересов граждан и юридических лиц путем совершения 
                  нотариальных действий от имени государства.
                </p>
              </div>
              <Button className="mt-6">
                <Icon name="ExternalLink" className="mr-2 h-4 w-4" />
                Подробнее о нотариате
              </Button>
            </div>
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Статистика нотариата</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Нотариусов в России:</span>
                      <span className="font-semibold text-lg">7 500+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Нотариальных палат:</span>
                      <span className="font-semibold text-lg">85</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Действий в год:</span>
                      <span className="font-semibold text-lg">15 млн+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tariffs Section */}
      <section className="py-16 bg-white">
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

      {/* Online Services */}
      <section id="registries" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Онлайн-сервисы и реестры</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Icon name="Database" className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-lg font-semibold">ЕИСН</h3>
                </div>
                <p className="text-gray-600 mb-4">Единая информационная система нотариата</p>
                <Button variant="outline" className="w-full">Перейти в ЕИСН</Button>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Icon name="Users" className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-lg font-semibold">Реестр нотариусов</h3>
                </div>
                <p className="text-gray-600 mb-4">Поиск нотариуса по территории</p>
                <Button variant="outline" className="w-full">Найти нотариуса</Button>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Icon name="FileText" className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-lg font-semibold">Реестр доверенностей</h3>
                </div>
                <p className="text-gray-600 mb-4">Сведения об отмене доверенностей</p>
                <Button variant="outline" className="w-full">Проверить</Button>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Icon name="Home" className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-lg font-semibold">Наследственные дела</h3>
                </div>
                <p className="text-gray-600 mb-4">Поиск открытых наследственных дел</p>
                <Button variant="outline" className="w-full">Найти дело</Button>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Icon name="AlertTriangle" className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-lg font-semibold">Реестр залогов</h3>
                </div>
                <p className="text-gray-600 mb-4">Уведомления о залоге движимого имущества</p>
                <Button variant="outline" className="w-full">Открыть</Button>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Icon name="Shield" className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-lg font-semibold">Проверка документов</h3>
                </div>
                <p className="text-gray-600 mb-4">Проверка подлинности нотариальных документов</p>
                <Button variant="outline" className="w-full">Проверить</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News and Updates */}
      <section id="news" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Новости и события</h2>
            <Button variant="outline">Все новости</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-0">
                <div className="bg-gray-200 h-48 rounded-t-lg"></div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">15 марта 2024</div>
                  <h3 className="font-semibold mb-2">Новые правила нотариального удостоверения</h3>
                  <p className="text-gray-600 text-sm mb-4">Внесены изменения в порядок совершения нотариальных действий...</p>
                  <Button variant="outline" size="sm">Читать далее</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <div className="bg-gray-200 h-48 rounded-t-lg"></div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">10 марта 2024</div>
                  <h3 className="font-semibold mb-2">Цифровизация нотариальных услуг</h3>
                  <p className="text-gray-600 text-sm mb-4">Развитие электронных сервисов для граждан и организаций...</p>
                  <Button variant="outline" size="sm">Читать далее</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <div className="bg-gray-200 h-48 rounded-t-lg"></div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">5 марта 2024</div>
                  <h3 className="font-semibold mb-2">Международное сотрудничество</h3>
                  <p className="text-gray-600 text-sm mb-4">Подписано соглашение о взаимодействии с зарубежными партнерами...</p>
                  <Button variant="outline" size="sm">Читать далее</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">Как найти нотариуса в моем районе?</AccordionTrigger>
              <AccordionContent>
                Воспользуйтесь официальным реестром нотариусов на нашем сайте. Укажите свой регион и район, чтобы найти ближайших нотариусов с контактной информацией и режимом работы.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">Какие документы нужны для оформления доверенности?</AccordionTrigger>
              <AccordionContent>
                Для оформления доверенности необходимы: паспорт доверителя, данные доверенного лица (ФИО, паспортные данные), четкое описание полномочий. Нотариус поможет правильно сформулировать текст доверенности.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">Как проверить подлинность нотариального документа?</AccordionTrigger>
              <AccordionContent>
                Используйте сервис проверки документов в разделе "Онлайн-сервисы". Введите номер реестровой записи и дату совершения нотариального действия для получения информации о подлинности документа.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">Что такое ЕИСН и как им пользоваться?</AccordionTrigger>
              <AccordionContent>
                ЕИСН (Единая информационная система нотариата) — федеральная система, содержащая информацию о всех нотариальных действиях. Через ЕИСН можно проверить документы, найти наследственные дела, получить справочную информацию.
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Scale" className="h-8 w-8 text-primary" />
                <div className="ml-2">
                  <div className="text-sm font-bold">ФЕДЕРАЛЬНАЯ</div>
                  <div className="text-sm font-bold text-primary">НОТАРИАЛЬНАЯ ПАЛАТА</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Официальная информация о нотариате Российской Федерации
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Сервисы</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Поиск нотариуса</a></li>
                <li><a href="#" className="hover:text-white">Проверка документов</a></li>
                <li><a href="#" className="hover:text-white">Наследственные дела</a></li>
                <li><a href="#" className="hover:text-white">ЕИСН</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">О нотариате</a></li>
                <li><a href="#" className="hover:text-white">Нормативные акты</a></li>
                <li><a href="#" className="hover:text-white">Методические материалы</a></li>
                <li><a href="#" className="hover:text-white">Статистика</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>119072, Москва</p>
                <p>ул. Тверская, 15</p>
                <p>Тел: +7 (495) 123-45-67</p>
                <p>info@notariat.ru</p>
              </div>
            </div>
          </div>
          <hr className="border-gray-700 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2024 Федеральная нотариальная палата</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Карта сайта</a>
              <a href="#" className="hover:text-white">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white">Обратная связь</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}