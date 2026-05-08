import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import SplashScreen from "./mockup/screens/SplashScreen";
import LoginScreen from "./mockup/screens/LoginScreen";
import OnboardingScreen from "./mockup/screens/OnboardingScreen";
import HomeScreen from "./mockup/screens/HomeScreen";
import SuperScreen from "./mockup/screens/SuperScreen";
import SuperProductsScreen from "./mockup/screens/SuperProductsScreen";
import MenuIaScreen from "./mockup/screens/MenuIaScreen";
import PlanScreen from "./mockup/screens/PlanScreen";
import ProgresoScreen from "./mockup/screens/ProgresoScreen";
import CategoryScreen from "./mockup/screens/CategoryScreen";
import ProductDetailScreen from "./mockup/screens/ProductDetailScreen";
import SearchScreen from "./mockup/screens/SearchScreen";
import CartScreen from "./mockup/screens/CartScreen";
import ConfirmadoScreen from "./mockup/screens/ConfirmadoScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/onboarding" element={<OnboardingScreen />} />
        <Route path="/app" element={<HomeScreen />} />
        <Route path="/app/buscar" element={<SearchScreen />} />
        <Route path="/app/categoria/:id" element={<CategoryScreen />} />
        <Route path="/app/producto/:id" element={<ProductDetailScreen />} />
        <Route path="/app/super" element={<SuperScreen />} />
        <Route path="/app/super/:id" element={<SuperProductsScreen />} />
        <Route path="/app/carrito" element={<CartScreen />} />
        <Route path="/app/confirmado" element={<ConfirmadoScreen />} />
        <Route path="/app/menu-ia" element={<MenuIaScreen />} />
        <Route path="/app/plan" element={<PlanScreen />} />
        <Route path="/app/progreso" element={<ProgresoScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
