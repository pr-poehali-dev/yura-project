import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ProductType } from "@/types/product";
import { useCart } from "@/hooks/use-cart";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  product: ProductType;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md group">
      <CardHeader className="p-0 relative">
        <div className="aspect-square overflow-hidden relative">
          <img 
            src={product.image} 
            alt={product.title} 
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-2 right-2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full"
            aria-label="Добавить в избранное"
          >
            <Heart className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-medium text-base mb-1 truncate">{product.title}</h3>
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{product.category}</p>
          <p className="font-bold">{product.price.toLocaleString()} ₽</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart} 
          className="w-full"
          variant="default"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
}
