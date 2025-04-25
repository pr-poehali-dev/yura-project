import { ProductType } from "@/types/product";

export const products: ProductType[] = [
  {
    id: 1,
    title: "Смартфон Galaxy X Pro",
    price: 49990,
    description: "Флагманский смартфон с потрясающей камерой и производительностью",
    category: "Электроника",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2042&auto=format&fit=crop",
    rating: {
      rate: 4.8,
      count: 259
    }
  },
  {
    id: 2,
    title: "Ноутбук UltraBook Air",
    price: 89990,
    description: "Ультратонкий и мощный ноутбук для работы и творчества",
    category: "Электроника",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop",
    rating: {
      rate: 4.9,
      count: 178
    }
  },
  {
    id: 3,
    title: "Беспроводные наушники Sound+",
    price: 12990,
    description: "Наушники с шумоподавлением и кристально чистым звуком",
    category: "Электроника",
    image: "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?q=80&w=1964&auto=format&fit=crop",
    rating: {
      rate: 4.6,
      count: 326
    }
  },
  {
    id: 4,
    title: "Кофемашина Barista Pro",
    price: 29990,
    description: "Автоматическая кофемашина для приготовления кофе как в кофейне",
    category: "Для дома",
    image: "https://images.unsplash.com/photo-1585848061486-481890c2d6c3?q=80&w=1974&auto=format&fit=crop",
    rating: {
      rate: 4.7,
      count: 156
    }
  },
  {
    id: 5,
    title: "Кроссовки RunFlex Air",
    price: 8990,
    description: "Легкие и комфортные кроссовки для бега и повседневной носки",
    category: "Одежда",
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=2025&auto=format&fit=crop",
    rating: {
      rate: 4.5,
      count: 287
    }
  },
  {
    id: 6,
    title: "Умные часы FitTrack Pro",
    price: 15990,
    description: "Смарт-часы с мониторингом активности, сна и здоровья",
    category: "Электроника",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2072&auto=format&fit=crop",
    rating: {
      rate: 4.4,
      count: 213
    }
  },
  {
    id: 7,
    title: "Стильная куртка Urban",
    price: 7990,
    description: "Демисезонная куртка в городском стиле с водоотталкивающим покрытием",
    category: "Одежда",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
    rating: {
      rate: 4.3,
      count: 168
    }
  },
  {
    id: 8,
    title: "Умная колонка HomePod",
    price: 9990,
    description: "Умная колонка с великолепным звуком и голосовым помощником",
    category: "Для дома",
    image: "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?q=80&w=1974&auto=format&fit=crop",
    rating: {
      rate: 4.6,
      count: 193
    }
  }
];
