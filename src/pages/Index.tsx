import Header from "@/components/Header";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Cart from "@/components/Cart";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Index = () => {
  const featuredProducts = products.slice(0, 4);
  const newArrivals = products.slice(4, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="bg-gradient-to-r from-primary/10 to-secondary h-[500px] flex items-center">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold">Откройте для себя лучшие товары</h1>
                <p className="text-lg text-muted-foreground">
                  Качественные товары с быстрой доставкой прямо к вам домой.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg">Купить сейчас</Button>
                  <Button variant="outline" size="lg">Подробнее</Button>
                </div>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=2070&auto=format&fit=crop" 
                  alt="Online Shopping" 
                  className="rounded-lg shadow-lg max-h-[400px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 container mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">Популярные товары</h2>
              <p className="text-muted-foreground mt-2">
                Самые востребованные товары в нашем магазине
              </p>
            </div>
            <Button variant="link" className="flex items-center gap-1">
              Все товары <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Promo Banner */}
        <section className="bg-primary/10 py-20">
          <div className="container mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl font-bold">Скидка 20% на первый заказ</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Подпишитесь на рассылку и получите промокод на скидку для вашей первой покупки
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="px-4 py-2 rounded-md border flex-1"
              />
              <Button>Подписаться</Button>
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-16 container mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">Новинки</h2>
              <p className="text-muted-foreground mt-2">
                Только что поступившие товары в наш магазин
              </p>
            </div>
            <Button variant="link" className="flex items-center gap-1">
              Все новинки <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-secondary/40">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 space-y-4">
                <div className="text-4xl mx-auto">🚚</div>
                <h3 className="text-xl font-medium">Быстрая доставка</h3>
                <p className="text-muted-foreground">
                  Доставляем заказы в течение 1-3 дней по всей России
                </p>
              </div>
              <div className="text-center p-6 space-y-4">
                <div className="text-4xl mx-auto">✨</div>
                <h3 className="text-xl font-medium">Гарантия качества</h3>
                <p className="text-muted-foreground">
                  Предоставляем гарантию на все товары в нашем магазине
                </p>
              </div>
              <div className="text-center p-6 space-y-4">
                <div className="text-4xl mx-auto">💳</div>
                <h3 className="text-xl font-medium">Безопасная оплата</h3>
                <p className="text-muted-foreground">
                  Используем защищенные способы оплаты для вашего удобства
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">МагазинПро</h3>
              <p className="text-muted-foreground">
                Ваш надежный интернет-магазин для покупок с 2024 года
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Категории</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Электроника</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Одежда</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Для дома</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Все категории</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Информация</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary">О нас</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Доставка</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Оплата</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">г. Москва, ул. Примерная, 123</li>
                <li className="text-muted-foreground">+7 (123) 456-78-90</li>
                <li className="text-muted-foreground">info@magazinpro.ru</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-6 text-center text-muted-foreground">
            <p>© 2024 МагазинПро. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <Cart />
    </div>
  );
};

export default Index;
