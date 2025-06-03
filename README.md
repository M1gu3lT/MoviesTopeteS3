# 🎬 Movies Topete
##comentario para el profe....
profe la api que se utilizo es la de nombre MT.Api y en los archivos a nivel de src esta el archivo extraido del mysql, utilice la explicada inpartida por usted.

## Descripción

**Movies Topete** es una aplicación web de **streaming de películas** desarrollada con Angular CLI 19. La aplicación permite a los usuarios explorar una lista de películas y series, cargadas desde archivos JSON locales. Implementa un diseño responsivo, maneja asincronía mediante RxJS, y contiene pruebas unitarias básicas para garantizar el correcto funcionamiento de la aplicación.

## Objetivo

El objetivo de esta versión de **Movies Topete** es establecer las bases para una plataforma web de gestión de contenido multimedia, utilizando una arquitectura basada en ASP.NET Core y Angular. Se busca integrar un sistema funcional con autenticación básica, conexión con frontend moderno y documentación estandarizada.

---

## 🙋‍♂️ Autor

MIGUEL TOPETE TORRES

---

## Mockup Inicial

![Mockup inicial](capturas%20del%20proyecto%20y%20test/sprint5-capturas/mockupInicial.jpg)

bastante diferente a lo que se lleva al momento


## 🖼️ Captura de Pantalla

![Login de nuevo usuario](capturas%del%proyecto%y%test/sprint5-capturas/MySQL-password.jpg)

![Login de nuevo usuario](capturas%20del%20proyecto%20y%20test/sprint5-capturas/newUserLogin.jpg)

![Login alternativo de usuario](capturas%20del%20proyecto%20y%20test/sprint5-capturas/newUserLogin2.jpg)

![Login alternativo 3 de usuario](capturas%20del%20proyecto%20y%20test/sprint5-capturas/newUserLogin3.jpg)


## ⚙️ Instrucciones de Instalación
Sigue estos pasos para configurar y ejecutar el proyecto localmente:
🚀 1. Clonar el repositorio
git clone https://github.com/tu_usuario/movies-topete.git
cd movies-topete

### 🧩 2. Instalar dependencias del frontend (Angular)
cd MT-ENTRETENIMIENTO
npm install

### ▶️ 3. Iniciar el servidor Angular
ng serve

Luego abre tu navegador en http://localhost:4200 y verás la aplicación en ejecución.

### 🖥️ Configuración del Backend (.NET + C# en Visual Studio)
#📦 Requisitos
Visual Studio 2022 (Community, Professional o Enterprise)

.NET SDK 8.0+

MySQL Server 8.0+

MySQL Workbench (opcional pero recomendado)

# 🔧 1. Abrir el backend en Visual Studio
Abre el archivo de solución MT-ENTRETENIMIENTO.sln.

Espera a que Visual Studio restaure los paquetes NuGet.

Asegúrate de que el proyecto MT.Api esté seleccionado como proyecto de inicio.

# ⚙️ 2. Configurar la cadena de conexión a MySQL
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


## 🛠️ ¿Cómo se construyó?

### 🧩 Frontend (Angular)

- **Framework**: Angular CLI v16+  
- **Estructura**: Uso de componentes, rutas, servicios y módulos.
- **Consumo de API**: Comunicación directa con el backend mediante `HttpClient`.
- **Diseño responsivo**: Aplicado con CSS Flexbox y media queries.
- **Pruebas unitarias**: Implementadas con Jasmine y Karma.
- **CORS**: Configurado para conexión segura desde `http://localhost:4200`.

### ⚙️ Backend (ASP.NET Core)

- **Framework**: ASP.NET Core 7 (MVC/API).
- **Lenguaje**: C#
- **Arquitectura**: Controladores RESTful, con separación en capas.
- **Base de datos**: Conectado mediante Entity Framework Core.
- **Controladores**:
  - `MTMasterController`: CRUD de usuarios.
  - `WeatherForecastController`: Ejemplo base (puede eliminarse en producción).
- **Autenticación**: Implementación básica de login con hash de contraseña.
- **CORS Middleware**: Política `allowCors` para permitir peticiones desde Angular.
- **Documentación**: Swagger UI habilitado para pruebas y visualización del API.

### 🗃️ Base de Datos

- **Motor**: SQL Server (LocalDB en desarrollo).
- **ORM**: Entity Framework Core con enfoque Code First.
- **Entidad principal**: `MTData` con campos:
  - `id`, `Username`, `PasswordHash`, `CreateDate`

---

## Reporte de Code Coverage y Reporte de testing
****FALTA REALIZARLO ;C

## Diagrama Entidad-Relacion

![Login alternativo 3 de usuario](capturas%del%proyecto%y%test/sprint5-capturas/diagramaEntidadRelacion.png)

## 🚀 Mejoras Posibles
Añadir seguridad con login y control de usuarios.

Mejorar la validación y mostrar mensajes claros de error.

Proteger mejor las contraseñas.

Manejar sesiones para evitar problemas de seguridad.

Automatizar la configuración de la base de datos.

Hacer más pruebas para asegurar que todo funcione bien.

Completar la documentación para facilitar el uso.

## API-Swagger
![Login alternativo 3 de usuario](capturas%del%proyecto%y%test/sprint5-capturas/swaggerMTApi.jpg)

localhosto:7278/swagger/index.html

## Archivo de configuracion de ambiente, de docker y de kubernetes
Falta Realizarlo

## 🐞 Problemas Conocidos
❌ Validación incompleta en login: No se muestran mensajes claros de error ante datos inválidos.

🔐 Contraseñas almacenadas sin cifrado ni hash seguro, lo que representa un riesgo de seguridad.

⚠️ No hay gestión de sesiones con tokens ni protección contra ataques CSRF o XSS.

## 🔍 Retrospectiva

| ✅ ¿Qué hice bien?                             | ⚠️ ¿Qué no salió bien?                                    | 🔄 ¿Qué puedo hacer diferente?                               |
| --------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------ |
| Conexión exitosa entre Angular y API REST     | Dificultades al configurar MySQL con Visual Studio        | Automatizar la configuración de la base de datos con scripts |
| Endpoints funcionales en .NET para el backend | No implementé autenticación ni seguridad en los endpoints | Implementar autenticación JWT y control de roles             |
| Consumo correcto de servicios desde Angular   | Poco enfoque en testing y documentación     | Usar migraciones EF Core para evitar errores manuales        |
| Integración básica entre frontend y backend   | Validación débil de datos en backend                      | Añadir validación robusta en frontend y backend              |
| Backend bien estructurado con ASP.NET Core    |                    |          |


