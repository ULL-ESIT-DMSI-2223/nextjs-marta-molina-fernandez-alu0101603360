# Informe práctica NextJS, React, REST and Netlify
  
**ÍNDICE**
1. [Generador de nombres](#id1)
2. [Generador de imágenes](#id2)
3. [REST exercises](#id3)
4. [Dynamic Routes exercices](#id4)
  

***
## Generador de nombres<a name="id1"></a>

Primero completamos el código para la página generadora de nombres de index.js:

![img](./docs/images/gen_text1.png)

![img](./docs/images/gen_text2.png)

Con esto ya funciona todo correctamente así que [desplegamos la página en netlify](https://inspiring-cocada-308318.netlify.app/):

![img](./docs/images/pag_nombres.png)

![img](./docs/images/pag_nombres2.png)


***
## Generador de imágenes<a name="id2"></a>

Para el generador de imágenes debemos modificar el código de index.js y crear en la carpeta /pages/api/ otro fichero para acceder a la generación de imágenes en lugar de buscar texto:

Para hacer la petición a la API de OpenAI y escribir con POST a espera de una respuesta necesitamos este código en /pages/api/image.js:

![img](./docs/images/imagejs.png)

Luego para adaptar el índice a la salida esperada cambiamos el texto para solicitar que imagen quiere el cliente y finalmente la imprimimos por pantalla:



***
## REST exercises<a name="id3"></a>

1. Todos los modelos:

![img](./docs/images/all_models.png)

El resultado textual en su totalidad se puede en este [enlace](./docs/src/all_models.txt)

2. Información sobre un modelo

![img](./docs/images/one_model.png)

3. Una imagen adorable

![img](./docs/images/cute_img_texto.png)

![img](./docs/images/cute_img.png)

4. Completar una frase

![img](./docs/images/completion.png)

5. Moderación: Classifies if text violates OpenAI's Content Policy

![img](./docs/images/moderation.png)

***
## Dynamic Routes exercices<a name="id4"></a>
