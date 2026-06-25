# 🛒 Shopping Cart App

Aplicación **Full Stack** de carrito de compras desarrollada con **React**, **Spring Boot** y **MySQL**.

---

# 🚀 Demo

**Frontend:** https://shopping-cart-project-beryl.vercel.app

> El backend se ejecuta de forma local utilizando Spring Boot.

---

# 📖 Descripción

Shopping Cart App es una aplicación que simula un e-commerce donde los usuarios pueden visualizar un catálogo de productos y gestionar un carrito de compras.

El proyecto comenzó como una aplicación Frontend utilizando datos simulados y posteriormente fue evolucionado hacia una arquitectura Full Stack, reemplazando los datos mockeados por una API REST desarrollada con Spring Boot y persistencia en MySQL.

---

# 🛠 Tecnologías

## Frontend

* React
* JavaScript ES6+
* Vite
* Bootstrap
* React Router

## Backend

* Spring Boot
* Spring MVC
* Spring Data JPA
* Hibernate
* Maven

## Base de Datos

* MySQL

## Herramientas

* Git
* GitHub
* VS Code
* Postman

---

# ✨ Funcionalidades

* Visualización del catálogo de productos
* Obtención de productos desde una API REST
* Agregar productos al carrito
* Eliminar productos
* Modificar cantidades
* Cálculo automático del total
* Persistencia de productos en MySQL
* Comunicación Frontend ↔ Backend

---

# 🧠 Conceptos aplicados

### Frontend

* useState
* useReducer
* useEffect
* Hooks personalizados
* Consumo de APIs REST
* Arquitectura modular
* Componentes reutilizables

### Backend

* Arquitectura en capas
* Controllers
* Services
* Repositories
* Entidades JPA
* CRUD completo
* API REST

### Base de datos

* Modelo relacional
* Persistencia con Hibernate
* Consultas mediante Spring Data JPA

---

# 📂 Estructura del proyecto

```
shopping-cart-project/

├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   ├── pom.xml
│   └── mvnw
│
└── README.md
```

---

# 🔌 API REST

| Método | Endpoint       | Descripción                 |
| ------ | -------------- | --------------------------- |
| GET    | /products      | Obtener todos los productos |
| GET    | /products/{id} | Obtener un producto         |
| POST   | /products      | Crear producto              |
| PUT    | /products/{id} | Actualizar producto         |
| DELETE | /products/{id} | Eliminar producto           |

---

# 🚀 Instalación

## Clonar el repositorio

```bash
git clone https://github.com/CandelariaCinelli/shopping-cart-project.git
```

## Backend

```bash
cd backend
```

Configurar la conexión a MySQL en `application.properties` y ejecutar:

```bash
mvn spring-boot:run
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# 📸 Capturas

Próximamente.

---

# 🎯 Próximas mejoras

* Login de usuarios
* Autenticación con JWT
* Gestión de órdenes
* Panel de administración
* Docker
* Deploy del backend
* Deploy de la base de datos

---

# 💼 Sobre este proyecto

Este proyecto fue desarrollado como práctica de Desarrollo Full Stack para profundizar en la construcción de aplicaciones utilizando React, Spring Boot y MySQL, aplicando buenas prácticas de arquitectura, consumo de APIs REST y persistencia de datos.

---

# 📫 Contacto

Actualmente me encuentro formándome como Técnica en Desarrollo de Software y en búsqueda de oportunidades como Desarrolladora Full Stack Junior.

¡Toda sugerencia o colaboración es bienvenida!
