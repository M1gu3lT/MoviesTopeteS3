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

##Mockup Inicial

![Mockup inicial](test/sprint5-capturas/mockupInicial.jpg)


bastante diferente a lo que se lleva al momento


## 🖼️ Captura de Pantalla

*****inghresar las capturas del sprint5


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

##Reporte de Code Coverage y Reporte de testing
****FALTA REALIZARLO ;C

##Diagrama Entidad-Relacion

##Mejoras Posibles
**********

##API-Swagger
***********agregar captura y la url

##Archivo de configuracion de ambiente, de docker y de kubernetes
Falta Realizarlo

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

