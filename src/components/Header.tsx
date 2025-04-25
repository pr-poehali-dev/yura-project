import { Link } from "react-router-dom";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { ShoppingCart, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useState } from "react";

export default function Header() {
  const { items, toggleCart } = useCart();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartItemCount = items.length;

  return (
    <header className="border-b sticky top-0 bg-background z-50">
      <div className="container mx-auto py-4 px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {isMobile && (
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px]">
                <div className="mt-8 space-y-4">
                  <Link to="/" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-primary">
                    Главная
                  </Link>
                  <Link to="/catalog" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-primary">
                    Каталог
                  </Link>
                  <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-primary">
                    О нас
                  </Link>
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-primary">
                    Контакты
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          )}
          
          <Link to="/" className="text-2xl font-bold text-primary">
            МагазинПро
          </Link>
        </div>

        {!isMobile && (
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Главная
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Каталог</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <Link to="/catalog/electronics" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Электроника</div>
                      <p className="text-sm leading-snug text-muted-foreground">
                        Смартфоны, ноутбуки, аудио
                      </p>
                    </Link>
                    <Link to="/catalog/clothing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Одежда</div>
                      <p className="text-sm leading-snug text-muted-foreground">
                        Мужская, женская, детская
                      </p>
                    </Link>
                    <Link to="/catalog/home" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Для дома</div>
                      <p className="text-sm leading-snug text-muted-foreground">
                        Мебель, декор, бытовая техника
                      </p>
                    </Link>
                    <Link to="/catalog/all" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Все категории</div>
                      <p className="text-sm leading-snug text-muted-foreground">
                        Полный каталог товаров
                      </p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    О нас
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Контакты
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Поиск">
            <Search className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            aria-label="Корзина" 
            onClick={toggleCart}
            className="relative"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full h-5 w-5 flex items-center justify-center text-xs">
                {cartItemCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
