# 🎬 Movies Topete

## Descripción

**Movies Topete** es una aplicación web de **streaming de películas** desarrollada con Angular CLI 19. La aplicación permite a los usuarios explorar una lista de películas y series, cargadas desde archivos JSON locales. Implementa un diseño responsivo, maneja asincronía mediante RxJS, y contiene pruebas unitarias básicas para garantizar el correcto funcionamiento de la aplicación.

## Objetivo

Crear una plataforma de streaming que muestre películas y series desde archivos JSON locales. A lo largo del desarrollo, se aplica el uso de buenas prácticas en la estructuración del código, manejo de asincronía con RxJS, y un diseño responsivo básico.

---

## 🙋‍♂️ Autor

MIGUEL TOPETE TORRES

---

## 🖼️ Captura de Pantalla

***aqui voy a poner las capturas de la app  voy

## ⚙️ Instrucciones de Instalación
Sigue estos pasos para configurar y ejecutar el proyecto localmente:
# 1. Clonar el repositorio
git clone https://github.com/tu_usuario/movies-topete.git
cd movies-topete

# 2. Instalar las dependencias
npm install

# 3. Iniciar el servidor de desarrollo
ng serve

Luego abre tu navegador en http://localhost:4200 y verás la aplicación en ejecución.

## 📦 Dependencias Usadas
| Paquete              | Versión |
| -------------------- | ------- |
| Angular CLI          | ^19.x.x |
| RxJS                 | ^7.x.x  |
| Jasmine              | ^5.x.x  |
| Karma                | ^6.x.x  |

##🛠️ ¿Cómo se construyó?
Generación del proyecto: Se utilizó Angular CLI 19 para iniciar el proyecto.

Datos de películas: La información sobre las películas se carga desde archivos JSON. Cada película tiene detalles como título, Director, Portada y demas datos.

Diseño responsivo: La interfaz de usuario es completamente responsiva, adaptándose a diferentes tamaños de pantalla utilizando CSS Flexbox y media queries.

Pruebas unitarias: Se realizaron pruebas básicas con Jasmine y Karma para asegurar que los componentes y servicios funcionaran correctamente.

## ✅ Reporte de Coverage y Testing

****las capturas de los testing

## 🐞 Problemas Conocidos
-El diseño no está completamente optimizado para pantallas de tamaños muy pequeños.
-no se realizaron correctamente los test, ya que se modifico bastante la app
-faltan funcionalidades en las cards
-no cargan bien unas imagenes


## 🔍 Retrospectiva

| ¿Qué hice bien? ✅                                  | ¿Qué no salió bien? ⚠️                                   | ¿Qué puedo hacer diferente? 🔄                                                     |
| -------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Buena estructuración del proyecto Angular          | Diseño no completamente adaptado a dispositivos pequeños | Mejorar el diseño responsivo con una librería como Angular Material o Tailwind CSS |
| Uso efectivo de RxJS para manejar datos asíncronos | Fallas en el testin y las pruebas unitarias              | mejor optimisacion de tiempo :c                                                   |
| La app es sencilla y fácil de entender             | Faltan detalles como búsqueda o filtros                  | Agregar filtros para buscar películas por título, género, etc.                     |
| diseño mas amigable y bonito                       | Falta de manejo de errores para la carga de datos        | Añadir manejo de errores en caso de que el archivo JSON no se cargue correctamente |
