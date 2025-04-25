import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner";
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';
import { CartProvider } from '@/hooks/use-cart';
import Cart from '@/components/Cart';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Cart />
        <Toaster />
      </Router>
    </CartProvider>
  );
}

export default App;
