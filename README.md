# 🎬 Movies Topete
##comentario para el profe....
profe la api que se utilizo es la de nombre MT.Api y en los archivos a nivel de src esta el archivo extraido del mysql, utilice la explicada inpartida por usted.

## Descripción

**Movies Topete** es una aplicación web de **streaming de películas** desarrollada con Angular CLI 19. La aplicación permite a los usuarios explorar una lista de películas y series, cargadas desde archivos JSON locales. Implementa un diseño responsivo, maneja asincronía mediante RxJS, y contiene pruebas unitarias básicas para garantizar el correcto funcionamiento de la aplicación.

## Objetivo

El objetivo tras completar esta versión inicial de Movies Topete es continuar con el desarrollo de una plataforma integral para la gestión y consulta de contenido multimedia, fortaleciendo tanto su arquitectura como su funcionalidad.

Se plantean los siguientes pasos a futuro:

Implementar un sistema de autenticación segura utilizando JWT y control de acceso por roles.

Reforzar la persistencia de datos mediante una base de datos MySQL gestionada con Entity Framework.

Mejorar la experiencia de usuario incorporando una interfaz más moderna y adaptativa, mediante el uso de Angular Material o Tailwind CSS.

Ampliar la cobertura de pruebas unitarias y de integración, tanto en el frontend (Jasmine/Karma) como en el backend con pruebas de API.

panel de administración para CRUD completo.

---

## 🙋‍♂️ Autor

MIGUEL TOPETE TORRES

---

## 🖼️ Captura de Pantalla

![Sección Admin](capturas%20del%20proyecto%20y%20test/sprint4-capturas/seccionAdministrador.jpg)

![Sección Admin 2](capturas%20del%20proyecto%20y%20test/sprint4-capturas/seccionAdministrador2.jpg)

![Sección Admin 3](capturas%20del%20proyecto%20y%20test/sprint4-capturas/seccionAdministrador3.jpg)

![Sección Admin 4](capturas%20del%20proyecto%20y%20test/sprint4-capturas/seccionAdministrador4.jpg)
![Sección Login](capturas%20del%20proyecto%20y%20test/sprint4-capturas/seccionLogin.jpg)

![Conexión API](capturas%20del%20proyecto%20y%20test/sprint4-capturas/NetworkConexionApi.jpg)


## ⚙️ Instrucciones de Instalación
Sigue estos pasos para configurar y ejecutar el proyecto localmente:
🚀 1. Clonar el repositorio
git clone https://github.com/tu_usuario/movies-topete.git
cd movies-topete

# 🧩 2. Instalar dependencias del frontend (Angular)
cd MT-ENTRETENIMIENTO
npm install

#▶️ 3. Iniciar el servidor Angular
ng serve

Luego abre tu navegador en http://localhost:4200 y verás la aplicación en ejecución.

##🖥️ Configuración del Backend (.NET + C# en Visual Studio)
#📦 Requisitos
Visual Studio 2022 (Community, Professional o Enterprise)

.NET SDK 8.0+

MySQL Server 8.0+

MySQL Workbench (opcional pero recomendado)

#🔧 1. Abrir el backend en Visual Studio
Abre el archivo de solución MT-ENTRETENIMIENTO.sln.

Espera a que Visual Studio restaure los paquetes NuGet.

Asegúrate de que el proyecto MT.Api esté seleccionado como proyecto de inicio.

#⚙️ 2. Configurar la cadena de conexión a MySQL
Abre el archivo appsettings.json del backend y modifica el bloque ConnectionStrings:
"ConnectionStrings": {
  "DefaultConnection": "server=localhost;port=3306;database=nombre_de_tu_bd;user=root;password=tu_contraseña;"
}

🛑 Importante: Asegúrate de que tu servidor de MySQL esté corriendo y que el usuario tenga permisos sobre la base de datos.





## 📦 Dependencias Usadas
| Paquete              | Versión |
| -------------------- | ------- |
| Angular CLI          | ^19.x.x |
| RxJS                 | ^7.x.x  |
| Jasmine              | ^5.x.x  |
| Karma                | ^6.x.x  |
| Herramienta / Framework | Versión                      |
| ----------------------- | ---------------------------- |
| .NET SDK                | 8.0.x                        |
| ASP.NET Core            | 8.0.x                        |
| Entity Framework Core   | 8.0.x                        |
| C#                      | 12.0                         |
| IDE recomendado         | Visual Studio 2022 o VS Code |


##🛠️ ¿Cómo se construyó?
Frontend: Angular CLI v19, usando componentes, rutas y servicios.

Datos de películas: Se cargan desde archivos JSON con info como título, portada, año, director, etc.

Diseño responsivo: Se usó CSS Flexbox y media queries para adaptar a todos los tamaños de pantalla.

Pruebas: Se usó Jasmine y Karma para pruebas unitarias básicas.

Backend (.NET)
Framework: ASP.NET Core (.NET 6 o superior).

API REST: CRUD para usuarios.

Consumo: Angular consume los endpoints vía HTTPClient.

Base de Datos (MySQL)
Motor: MySQL Server (5.7 o superior).

Conexión: A través de Entity Framework Core.

Tablas: MTMaster para gestión de usuarios.

Script: Incluido para crear la tabla y campos básicos.


## 🐞 Problemas Conocidos
❌ Validación incompleta en el login: Actualmente no se muestran mensajes de error claros si los datos ingresados son inválidos.

🔐 Falta de seguridad en la base de datos: Las contraseñas no están cifradas y no se aplican políticas de seguridad como control de acceso o autenticación robusta.

⚠️ Gestión de sesiones: No se implementa manejo de tokens ni protección contra ataques como CSRF o XSS.


## 🔍 Retrospectiva

| ✅ ¿Qué hice bien?                                     | ⚠️ ¿Qué no salió bien?                                           | 🔄 ¿Qué puedo hacer diferente?                                                       |
| ----------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Logré conectar correctamente Angular con la API REST  | Dificultades iniciales al configurar MySQL con Visual Studio     | Automatizar la configuración inicial de la base de datos con scripts SQL             |
| Creé endpoints funcionales en .NET para el backend    | No implementé seguridad en los endpoints (sin autenticación JWT) | Añadir autenticación y validación de roles en el backend                             |
| Aprendí a consumir servicios desde Angular            | Errores al mapear modelos entre C# y la base de datos            | Usar herramientas como Entity Framework con migraciones para evitar errores manuales |
| Integración básica funcional entre frontend y backend | No hay validación fuerte de datos desde el backend               | Aplicar validaciones tanto del lado del cliente como del servidor                    |
| Estructura limpia del backend con ASP.NET Core        | Poco tiempo invertido en testing y documentación técnica         | Añadir documentación Swagger y pruebas unitarias de los endpoints                    |

