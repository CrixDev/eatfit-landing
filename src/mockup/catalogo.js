export const categorias = [
  { id: "tacos", nombre: "Tacos", emoji: "🌮" },
  { id: "tortas", nombre: "Tortas", emoji: "🥪" },
  { id: "jugos", nombre: "Jugos", emoji: "🥤" },
  { id: "menu", nombre: "Menú del día", emoji: "🍱" },
  { id: "ensaladas", nombre: "Ensaladas", emoji: "🥗" },
];

export const comidas = [
  {
    id: "c1",
    nombre: "Taco al Pastor",
    categoria: "tacos",
    precio: 25,
    kcal: 280,
    macros: { p: 18, c: 22, g: 14 },
    img: "/platillo2.jpg",
    descripcion: "Taco tradicional con carne al pastor marinada, piña, cebolla y cilantro fresco.",
    restaurante: "Don Lupe Tacos",
    tiempo: "5 min",
    rating: 4.8,
    tag: "Convenio",
  },
  {
    id: "c2",
    nombre: "Taco de Bistec",
    categoria: "tacos",
    precio: 28,
    kcal: 310,
    macros: { p: 22, c: 20, g: 16 },
    img: "/platillo1.jpg",
    descripcion: "Bistec a la plancha, tortilla recién hecha, cebolla y limón.",
    restaurante: "Don Lupe Tacos",
    tiempo: "5 min",
    rating: 4.7,
    tag: "Convenio",
  },
  {
    id: "c3",
    nombre: "Taco Veggie",
    categoria: "tacos",
    precio: 22,
    kcal: 220,
    macros: { p: 8, c: 28, g: 9 },
    img: "/platillo4.jpg",
    descripcion: "Tortilla de maíz, frijol negro, aguacate, pico de gallo.",
    restaurante: "Don Lupe Tacos",
    tiempo: "4 min",
    rating: 4.6,
    tag: "Sano",
  },
  {
    id: "c4",
    nombre: "Torta de Milanesa",
    categoria: "tortas",
    precio: 55,
    kcal: 620,
    macros: { p: 32, c: 58, g: 24 },
    img: "/platillo2.jpg",
    descripcion: "Bolillo, milanesa de pollo, lechuga, tomate, aguacate, frijoles.",
    restaurante: "El Burrote Campus",
    tiempo: "8 min",
    rating: 4.7,
    tag: "Más vendido",
  },
  {
    id: "c5",
    nombre: "Torta Cubana",
    categoria: "tortas",
    precio: 65,
    kcal: 780,
    macros: { p: 38, c: 60, g: 36 },
    img: "/platillo1.jpg",
    descripcion: "Jamón, milanesa, pierna, queso, huevo y aguacate.",
    restaurante: "El Burrote Campus",
    tiempo: "10 min",
    rating: 4.5,
  },
  {
    id: "c6",
    nombre: "Jugo Verde",
    categoria: "jugos",
    precio: 35,
    kcal: 120,
    macros: { p: 4, c: 26, g: 1 },
    img: "/platillo3.png",
    descripcion: "Espinaca, manzana, piña, apio y jengibre.",
    restaurante: "Jugos Mary",
    tiempo: "3 min",
    rating: 4.9,
    tag: "Sano",
  },
  {
    id: "c7",
    nombre: "Jugo de Naranja",
    categoria: "jugos",
    precio: 30,
    kcal: 110,
    macros: { p: 2, c: 25, g: 0 },
    img: "/platillo3.png",
    descripcion: "Naranja recién exprimida, sin azúcar añadida.",
    restaurante: "Jugos Mary",
    tiempo: "2 min",
    rating: 4.8,
  },
  {
    id: "c8",
    nombre: "Smoothie Proteína",
    categoria: "jugos",
    precio: 55,
    kcal: 280,
    macros: { p: 28, c: 30, g: 6 },
    img: "/platillo3.png",
    descripcion: "Plátano, avena, leche, whey, mantequilla de maní.",
    restaurante: "Jugos Mary",
    tiempo: "4 min",
    rating: 4.9,
    tag: "Alto en proteína",
  },
  {
    id: "c9",
    nombre: "Menú Pollo Asado",
    categoria: "menu",
    precio: 75,
    kcal: 580,
    macros: { p: 42, c: 48, g: 18 },
    img: "/platillo2.jpg",
    descripcion: "Pollo asado, arroz, frijoles charros y tortillas.",
    restaurante: "Comida Casera Rosy",
    tiempo: "12 min",
    rating: 4.6,
    tag: "Menú del día",
  },
  {
    id: "c10",
    nombre: "Menú Salmón",
    categoria: "menu",
    precio: 95,
    kcal: 540,
    macros: { p: 38, c: 38, g: 22 },
    img: "/platillo2.jpg",
    descripcion: "Salmón al horno, quinoa y vegetales asados.",
    restaurante: "Comida Casera Rosy",
    tiempo: "15 min",
    rating: 4.8,
    tag: "Saludable",
  },
  {
    id: "c11",
    nombre: "Bowl Mediterráneo",
    categoria: "ensaladas",
    precio: 89,
    kcal: 420,
    macros: { p: 32, c: 38, g: 14 },
    img: "/platillo1.jpg",
    descripcion: "Quinoa, garbanzos, aguacate, pepino y aderezo de yogurt.",
    restaurante: "Café Estudiantil ITSON",
    tiempo: "6 min",
    rating: 4.9,
    tag: "Más vendido",
  },
  {
    id: "c12",
    nombre: "Ensalada César",
    categoria: "ensaladas",
    precio: 70,
    kcal: 380,
    macros: { p: 26, c: 22, g: 20 },
    img: "/platillo4.jpg",
    descripcion: "Lechuga romana, pollo, crutones, parmesano y aderezo césar.",
    restaurante: "Café Estudiantil ITSON",
    tiempo: "5 min",
    rating: 4.5,
  },
  {
    id: "c13",
    nombre: "Ensalada Power",
    categoria: "ensaladas",
    precio: 79,
    kcal: 360,
    macros: { p: 28, c: 24, g: 16 },
    img: "/platillo3.png",
    descripcion: "Mix verde, salmón, semillas y aderezo de yogurt.",
    restaurante: "Café Estudiantil ITSON",
    tiempo: "5 min",
    rating: 4.7,
    tag: "Alto en proteína",
  },
];

export const supermercados = [
  {
    id: "walmart",
    nombre: "Walmart",
    color: "bg-blue-500",
    logo: "🛒",
    badge: "Mejor precio",
    tiempo: "45-60 min",
    envio: 39,
  },
  {
    id: "heb",
    nombre: "H-E-B",
    color: "bg-red-600",
    logo: "H E B",
    tiempo: "45-60 min",
    envio: 39,
  },
  {
    id: "chedraui",
    nombre: "Chedraui",
    color: "bg-orange-500",
    logo: "🛍️",
    tiempo: "45-60 min",
    envio: 39,
  },
  {
    id: "lacomer",
    nombre: "La Comer",
    color: "bg-rose-500",
    logo: "♥",
    tiempo: "45-60 min",
    envio: 39,
  },
];

export const productosSuper = [
  { id: "s1", nombre: "Avena Quaker 1kg", precio: 45, img: "🥣", super: "walmart", categoria: "Despensa" },
  { id: "s2", nombre: "Leche Lala 1L", precio: 28, img: "🥛", super: "walmart", categoria: "Lácteos" },
  { id: "s3", nombre: "Yogurt Griego 500g", precio: 65, img: "🥛", super: "walmart", categoria: "Lácteos" },
  { id: "s4", nombre: "Plátano kg", precio: 18, img: "🍌", super: "walmart", categoria: "Frutas" },
  { id: "s5", nombre: "Manzana kg", precio: 35, img: "🍎", super: "walmart", categoria: "Frutas" },
  { id: "s6", nombre: "Pechuga de Pollo kg", precio: 110, img: "🍗", super: "walmart", categoria: "Carnes" },
  { id: "s7", nombre: "Huevo 18 pzs", precio: 75, img: "🥚", super: "walmart", categoria: "Despensa" },
  { id: "s8", nombre: "Espinaca bolsa", precio: 22, img: "🥬", super: "walmart", categoria: "Verduras" },
  { id: "s9", nombre: "Aguacate Hass kg", precio: 89, img: "🥑", super: "walmart", categoria: "Frutas" },
  { id: "s10", nombre: "Atún en Agua", precio: 22, img: "🐟", super: "walmart", categoria: "Despensa" },
  { id: "s11", nombre: "Arroz Integral 1kg", precio: 42, img: "🍚", super: "walmart", categoria: "Despensa" },
  { id: "s12", nombre: "Pasta Integral", precio: 28, img: "🍝", super: "walmart", categoria: "Despensa" },
];

export function buscarComidas(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return comidas.filter(
    (c) =>
      c.nombre.toLowerCase().includes(q) ||
      c.restaurante.toLowerCase().includes(q) ||
      c.categoria.toLowerCase().includes(q)
  );
}

export function comidasPorCategoria(categoriaId) {
  return comidas.filter((c) => c.categoria === categoriaId);
}

export function getComida(id) {
  return comidas.find((c) => c.id === id);
}

export function getCategoria(id) {
  return categorias.find((c) => c.id === id);
}

export function getSupermercado(id) {
  return supermercados.find((s) => s.id === id);
}

export function getProductoSuper(id) {
  return productosSuper.find((p) => p.id === id);
}
