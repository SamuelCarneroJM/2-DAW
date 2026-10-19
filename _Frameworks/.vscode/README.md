# Fragmentos de código de Freintworks

El archivo `freintworks.code-snippets` contiene fragmentos de espacio de trabajo para los proyectos Angular de esta carpeta. Abre un archivo `.ts` o `.html`, escribe uno de los prefijos y pulsa `Tab` para insertar la plantilla. Los campos `${1:...}` también se recorren con `Tab`; `$0` marca la posición final del cursor.

## Prefijos

| Prefijo | Uso |
| --- | --- |
| `ng-component` | Componente standalone con HTML y CSS externos |
| `ng-service` | Servicio Angular injectable |
| `ng-model` | Interfaz de modelo |
| `ng-rest-service` | Servicio CRUD con HttpClient para una API JSON |
| `ng-provide-http` | Configuración de HttpClient en `app.config.ts` |
| `ng-signal-list` | Lista reactiva con `signal` y `computed` |
| `ng-input-output` | Componente hijo con `input.required` y `output` |
| `ng-load-json` | Carga de datos HTTP con estados de carga y error |
| `ng-storage-effect` | Persistencia de un signal en `localStorage` |
| `ng-for` | Iteración de plantilla con `@for` y `@empty` |
| `ng-if` | Condición de plantilla con `@if` y `@else` |
| `ng-form` | Formulario Angular con `ngModel` |

Los fragmentos son plantillas iniciales: adapta nombres, rutas, URL, tipos e identificadores a cada ejercicio. Para `ng-form`, añade `FormsModule` a `imports` del componente; para consumir servicios HTTP, configura `provideHttpClient` en la aplicación.
