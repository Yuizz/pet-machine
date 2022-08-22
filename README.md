
# Pet Machine

Un sistema capaz de leer datos del usuario, para posteriormente guardarlos y que el usuario pueda consultar estos datos para que pueda ver su progreso. Está pensado para que posteriormente con estos datos de cuánto se ha reciclado se pueda hacer uso de esta especie de “puntos” y canjearlos en recompensas.



## Variables de entorno

Para poder correr el proyecto localmente en una computadora para poder ver los cambios y trabajar en la aplicación o api necesitamos las siguientes variables de entorno:
```env
MONGO_INITDB_ROOT_USERNAME=root
MONGO_INITDB_ROOT_PASSWORD=super-secret-pass
MONGO_INITDB_DATABASE=pet_machine

MONGO_USERNAME=${MONGO_INITDB_ROOT_USERNAME}
MONGO_PASSWORD=${MONGO_INITDB_ROOT_PASSWORD}
MONGO_DBNAME=${MONGO_INITDB_DATABASE}
MONGO_DOMAIN=mongo

```

Que debemos colocar en un archivo .env en la raiz de la carpeta del proyecto.

## Correr localmente

Debemos contar con las dependencias para poder correr el proyecto, tales que (Se listan las versiones con las que se trabajaron en el momento):

- [node.js 16.13.2](https://nodejs.org/dist/v16.13.2/)
- [npm 8.12.1](https://phoenixnap.com/kb/install-node-js-npm-on-windows)
- [Docker desktop](https://docs.docker.com/desktop/install/windows-install/)

Adicionalmente una terminal de comandos de nuestra preferencia para poder correr ciertos comandos necesarios explicados a continuacion, se sugiere [Git bash](https://git-scm.com/download/win).
Y un editor de código que tambien puede ser de nuestra preferencia, sugerencia: [VSCode](https://code.visualstudio.com/download)

Clonar el proyecto:

```bash
  git clone https://github.com/Yuizz/pet-machine.git
```

Ir el directorio del proyecto

```bash
  cd pet-machine
```

Instalar dependencias de api

```bash
  cd api
  npm install
```

Instalar dependencias de app

```bash
  cd app
  npm install
```

**Correr el proyecto**

```bash
  docker compose up
```


## API endpoints

#### Crear un usuario

```http
  POST http://localhost:3001/users/create-user
```
_**body:**_

```javascript
{
  "controlNumber" : string, //El numero de control del alumno.
  "mail" : string,          //El correo del alumno.
  "name"    : string,       //El nombre del alumno.
  "balance" : string,       //El saldo inicial, por lo general empieza en 0. 
  "rfid"    : string,       //El UID de la tarjeta RFID que tiene el alumno.
}
```

#### Obtener usuario por rfid

```http
  GET /users/rfid/{rfid}
```

| Parametro | Tipo     | Descripción               |
| :-------- | :------- | :-------------------------------- |
| `rfid`      | `string` | **Required**. Rfid del alumno que queremos buscar. |

#### Obtener usuario por número de control

```http
  GET /users/control-number/{control-number}
```

| Parametro | Tipo     | Descripción               |
| :-------- | :------- | :-------------------------------- |
| `control-number`      | `string` | **Requerido**. Número de control del alumno que queremos buscar. |

#### Agregar balance a usuario

```http 
  PUT /users/add-balance/{rfid}
```

| Parametro | Tipo     | Descripción               |
| :-------- | :------- | :-------------------------------- |
| `rfid`      | `string` | **Requerido**. RFID del alumno al que le agregaremos saldo. |

_**body:**_

```javascript
{
  "balanceToAdd": string //El balance que se añadirá
}
```

#### Quitar balance a usuario

```http 
  PUT /users/substract-balance/{rfid}
```

| Parametro | Tipo     | Descripción               |
| :-------- | :------- | :-------------------------------- |
| `rfid`      | `string` | **Requerido**. RFID del alumno al que le quitaremos saldo. |

_**body:**_

```javascript
{
    "balanceToSubstract": "2"
}
```


## Subir a un servidor

Para subir este proyecto a un servidor es necesario seguir una serie de pasos:

Primero, debemos configurar un web server en el servidor que utilizaremos, ademas de dos subdominios preferiblemente (pero no necesariamente) uno para la api y otro para la aplicación web.
[Como instalar nginx en un servidor ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04-es)

Posteriormente debemos subir el proyecto y configurar los subdominios para redirigir a nuestra aplicacion, un ejemplo de como se hizo:

```nginx
server {

        root /var/www/petmachine.app.iamyuizz.dev;

        # Add index.php to the list if you are using PHP
        index index.html;

        server_name petmachine.app.iamyuizz.dev;

        location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                try_files $uri $uri/ =404;
        }


    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/bids.iamyuizz.dev/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/bids.iamyuizz.dev/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}

server {
    if ($host = petmachine.app.iamyuizz.dev) {
        return 301 https://$host$request_uri;
    } # managed by Certbot



        server_name petmachine.app.iamyuizz.dev;
    listen 80;
    return 404; # managed by Certbot


}
```

**Nota:** Podemos buscar en internet _como configurar un subdominio en nginx_ [ejemplo](https://blogvirtual68346885.wordpress.com/2020/06/27/como-configurar-multiples-dominios-y-subdominios-en-nginx/).

Además podemos hacer uso de [Certbot](https://certbot.eff.org/) para añadir certificado SSL al subdominio (Para tener https)

### Api
Hacemos uso de [PM2](https://www.vultr.com/docs/how-to-manage-node-applications-with-pm2/) y correr la api en el servidor: 
```bash
cd api
pm2 start bin/www
```

### App
Para la aplicación solo necesitamos los estáticos, para obtenerlos se hace lo siguiente:
```bash
cd app
npm run build
```
Y la carpeta dist/ contendrá nuestros archivos estáticos que podemos poner en el servidor para ver la aplicacion online. [Deploying a Static Site](https://vitejs.dev/guide/static-deploy.html#building-the-app)

**Nota:** Si se hace algun cambio en la app, es necesario volver a correr la build y subir los nuevos archivos generados.

### Base de datos
Para tener la base de datos que actualmente se usa funcionando, se usa [mongo](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-20-04-es)




## Authors

- [@Abubuh](https://github.com/Abubuh)
- [@Yuizz](https://github.com/Yuizz)

