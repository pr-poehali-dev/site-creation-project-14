import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const logoExamples = [
    { title: "TechStart", category: "IT", color: "bg-blue-500" },
    { title: "FoodieHub", category: "Ресторан", color: "bg-orange-500" },
    { title: "EcoLife", category: "Экология", color: "bg-green-500" },
    { title: "StyleCo", category: "Мода", color: "bg-purple-500" },
    { title: "HealthPro", category: "Медицина", color: "bg-red-500" },
    { title: "EduSpace", category: "Образование", color: "bg-indigo-500" },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Бриф",
      description: "Рассказываете о своем бизнесе и предпочтениях",
    },
    {
      number: "02",
      title: "Дизайн",
      description: "Создаём 3 варианта логотипа за 24 часа",
    },
    {
      number: "03",
      title: "Результат",
      description: "Получаете готовый логотип во всех форматах",
    },
  ];

  const pricingPlans = [
    {
      name: "Стандарт",
      price: "15 000",
      features: ["3 концепта", "2 правки", "AI + PNG форматы"],
    },
    {
      name: "Премиум",
      price: "25 000",
      features: ["5 концептов", "5 правок", "Все форматы", "Фирменный стиль"],
    },
    {
      name: "Бизнес",
      price: "45 000",
      features: [
        "Безлимит концептов",
        "Безлимит правок",
        "Брендбук",
        "Консультации",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 animate-fade-in">
              ⚡ Быстрые логотипы за 24 часа
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent animate-scale-in">
              Логотип за сутки
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
              Создаём уникальные логотипы для вашего бизнеса. Креативно, быстро,
              профессионально.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full"
              >
                <Icon name="Zap" className="mr-2" size={20} />
                Заказать логотип
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-full"
              >
                <Icon name="Play" className="mr-2" size={20} />
                Посмотреть примеры
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-purple-50 to-transparent"></div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              Галерея работ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Более 500 логотипов создано за последний год. Каждый уникален и
              отражает суть бизнеса.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {logoExamples.map((logo, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-6">
                  <div
                    className={`${logo.color} rounded-lg h-32 mb-4 flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                    <div className="text-white font-bold text-2xl relative z-10">
                      {logo.title}
                    </div>
                  </div>
                  <Badge variant="secondary" className="mb-2">
                    {logo.category}
                  </Badge>
                  <h3 className="font-semibold text-lg">{logo.title}</h3>
                  <p className="text-gray-600 text-sm">Создан за 18 часов</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              Процесс работы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Простой и понятный процесс создания вашего логотипа
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-orange-200 to-purple-200 transform translate-x-10"></div>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              Цены
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите подходящий тариф для вашего проекта
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden ${index === 1 ? "border-2 border-purple-500 shadow-2xl scale-105" : "border shadow-lg"} hover:shadow-xl transition-all duration-300`}
              >
                {index === 1 && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-orange-500 text-white text-center py-2 text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardHeader
                  className={`text-center ${index === 1 ? "pt-8" : "pt-6"}`}
                >
                  <CardTitle className="text-2xl font-bold">
                    {plan.name}
                  </CardTitle>
                  <div className="text-4xl font-bold text-gray-800 mt-4">
                    {plan.price}
                    <span className="text-lg text-gray-500 font-normal">
                      {" "}
                      ₽
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Icon
                        name="Check"
                        className="text-green-500 mr-3"
                        size={16}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                  <Button
                    className={`w-full mt-6 ${index === 1 ? "bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600" : "bg-gray-800 hover:bg-gray-900"} text-white font-semibold py-3 rounded-full`}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы создать логотип?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Свяжитесь с нами любым удобным способом
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Mail" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="opacity-80">hello@logofast.ru</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Phone" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                <p className="opacity-80">+7 (999) 123-45-67</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Icon name="MessageCircle" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Telegram</h3>
                <p className="opacity-80">@logofast_bot</p>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full"
            >
              <Icon name="Rocket" className="mr-2" size={20} />
              Начать проект
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
