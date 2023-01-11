import { Configuration, OpenAIApi } from "openai"; //Esto se ejecuta en el servidor por estar en /pages/api esto le llega al servidor con la solicitud del cliente, elabormaos parte de la respuesta el resto completado por servidor y se devuelve al cliente

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, //Nos devuleve el valor de la variable de entorno OPEN_API_KEY
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) { //No se saben cuando se van a llamar así que async y por ello desps hay q poner await
  const completion = await openai.createCompletion({
    model: "text-davinci-002", //identificador del modelo que vas a usar de OpenAI, puedes pedir una lista
    prompt: generatePrompt(req.body.animal),
    temperature: 0.6, //nivel de riesgos, cuanto más alto más creativo
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  console.log(capitalizedAnimal);
  const suggestion = `Suggest four names for an animal that is a superhero.
Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline, Mica
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot, Tiger
Animal: ${capitalizedAnimal}
Names:`;
  console.log(suggestion);
  return suggestion;
}