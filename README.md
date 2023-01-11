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

Luego para adaptar el índice a la salida esperada cambiamos el texto para solicitar qué imagen quiere el cliente y finalmente la imprimimos por pantalla. Este sería el código para conseguirlo:

![img](./docs/images/img_gen1.png)

![img](./docs/images/img_gen2.png)

Ahora lo [desplegamos en Netlify](https://luxury-salmiakki-11bec4.netlify.app/) y vemos el resultado final:

![img](./docs/images/pag_img1.png)

![img](./docs/images/pag_img2.png)

![img](./docs/images/pag_img3.png)


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

Estos ejercicios tratan básicamente de seguir un curso para comprender el ruteo dinámico:
1. Primero nos indica qué vamos a aprender:

![img](./docs/images/DR1.png)

2. Tras ello debemos descargarnos el repositorio donde trabajaremos prácticamente para completar los ejercicios propuestos:

![img](./docs/images/DR2.png)

3. Por personalizar un poco la página y entender su código nos recomienda cambiar el nombre y la pequeña indtroducción:

![img](./docs/images/DR3.png)

4. Ahora empezamos a usar dynamic routes crenado [id].js. También modificando el código de posts.js:

![img](./docs/images/DR4.png)

![img](./docs/images/DR5.png)

![img](./docs/images/DR6.png)

![img](./docs/images/DR7.png)

Esta parte resulta en la siguiente pantalla:

![img](./docs/images/DR8.png)

5. Nos hace una pregunta sobre lo que hemos aprendido:

![img](./docs/images/DR9.png)

6. Continuamos haciendo la página más compleja a través de la modificación de los ficheros, principalmente [id].js y posts.js:

![img](./docs/images/DR10.png)

![img](./docs/images/DR11.png)

Observamos la salida:

![img](./docs/images/DR12.png)

7. Ahora además queremos añadir la fecha actual a la página:

![img](./docs/images/DR13.png)

![img](./docs/images/DR14.png)

![img](./docs/images/DR15.png)

![img](./docs/images/DR16.png)

8. Cerca del final buscamos darle formato a la página introduciendo algo de CSS

![img](./docs/images/DR17.png)

![img](./docs/images/DR18.png)

9. Para que sea incluso más ordenada, añadimos un índice:

![img](./docs/images/DR19.png)

![img](./docs/images/DR20.png)

10. Para concluir los ejercicios de rutas dinámicas nos plantean una cuestión sobre lo aprendido:

![img](./docs/images/DR21.png)
