import { Configuration, OpenAIApi } from "openai"; 

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, 
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) { 
  const image = await openai.createImage({
    prompt: generatePrompt(req.body.animal),
    n: 1,
    size: "1024x1024",
    temperature: 0.6,
  });
  res.status(200).json({ result: image.data.choices[0].url });
}

/* function generatePrompt(animal) {
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
} */