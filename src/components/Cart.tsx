import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { X, Minus, Plus } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Cart() {
  const { 
    isOpen, 
    toggleCart, 
    items, 
    removeItem, 
    increaseQuantity, 
    decreaseQuantity, 
    clearCart 
  } = useCart();

  const totalPrice = items.reduce((total, item) => {
    return total + (item.price * (item.quantity || 1));
  }, 0);

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="w-full sm:max-w-md flex flex-col h-full">
        <SheetHeader className="px-1">
          <SheetTitle>Корзина покупок</SheetTitle>
        </SheetHeader>
        <Separator className="my-4" />
        
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center space-y-4">
            <div className="text-6xl">🛒</div>
            <h3 className="text-xl font-medium">Корзина пуста</h3>
            <p className="text-muted-foreground text-center max-w-xs">
              Добавьте товары в корзину, чтобы оформить заказ
            </p>
            <Button onClick={toggleCart}>Продолжить покупки</Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-4">
                    <div className="h-20 w-20 bg-secondary flex-shrink-0 rounded-md overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-medium line-clamp-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {item.price.toLocaleString()} ₽
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => decreaseQuantity(item.id)}
                          disabled={(item.quantity || 1) <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">
                          {item.quantity || 1}
                        </span>
                        <Button 
                          variant="outline" 
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => removeItem(item.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </li>
                ))}
              </ul>
            </ScrollArea>
            
            <div className="space-y-4 mt-6">
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-medium">Итого:</span>
                <span className="font-bold text-lg">{totalPrice.toLocaleString()} ₽</span>
              </div>
              
              <div className="grid gap-2">
                <Button variant="outline" onClick={clearCart}>
                  Очистить корзину
                </Button>
                <Button>
                  Оформить заказ
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
