import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [abierto, setAbierto] = useState(null);

  const puntos = [
    {
      id: 1,
      titulo: "Personalización",
      contenido: "Texto de prueba para explicar la personalización de los platillos.",
    },
    {
      id: 2,
      titulo: "Ingredientes Frescos",
      contenido: "Solo usamos productos de temporada y alta calidad.",
    },
    {
      id: 3,
      titulo: "Envío Rápido",
      contenido: "Recibe tu comida caliente y lista en menos de 30 minutos.",
    },
    {
      id: 4,
      titulo: "Tecnología Avanzada",
      contenido: "Utilizamos tecnología de vanguardia para preparar tus comidas.",
    },
    {
      id: 5,
      titulo: "Entrega Eficiente",
      contenido: "Nuestro sistema de entrega optimizado garantiza que tu comida llegue a tiempo.",
    },
  ];

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="EatFit Logo" className="logo-img" />
        </div>

        <div className="nav-right">
          <div className="menu-buttons">
            <button>Platillos</button>
            <button>Contacto</button>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Buscar..." />
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-layout">
          <div className="hero-column">
            <div className="placeholder-img">Imagen 1</div>
            <div className="placeholder-img">Imagen 2</div>
          </div>
          <div className="hero-column-center">
            <h1>Elige, Ajusta, Disfruta</h1>
            <div className="hero-buttons">
              <button className="btn-primary">Comenzar</button>
              <button className="btn-secondary">Ver más</button>
            </div>
          </div>
          <div className="hero-column">
            <div className="placeholder-img">Imagen 3</div>
            <div className="placeholder-img">Imagen 4</div>
          </div>
        </div>
      </header>

      <section className="info-section">
        <div className="list-content">
          <h2 className="info-titulo">¿Por qué EatFit?</h2>
          
          <div className="puntos-container">
            {puntos.map((punto, index) => (
              <div key={punto.id} className="punto-item">
                <button 
                  className={`punto-boton ${abierto === punto.id ? 'activo' : ''}`}
                  onClick={() => setAbierto(abierto === punto.id ? null : punto.id)}
                >
                  <span className="numero-circulo">{index + 1}</span>
                  <span className="punto-texto">{punto.titulo}</span>
                </button>

                <div className={`parrafo-desglosable ${abierto === punto.id ? 'visible' : ''}`}>
                  <p>{punto.contenido}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="image-placeholder-grande">
          <div className="box-main">Imagen / Gráfico</div>
        </div>
      </section>

      <footer className="contact-section">
        <div className="contact-info">
          <h3>Contacto</h3>
          <p>Email: CorreoEjemplo@gmail.com</p>
          <p>Social Media</p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Correo" />
          <textarea placeholder="Comentarios"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </footer>
    </div>
  );
}

export default App;
