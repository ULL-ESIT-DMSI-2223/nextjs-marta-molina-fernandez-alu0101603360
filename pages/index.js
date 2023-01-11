import { useState } from "react";
import styles from "./index.module.css";
import { Configuration, OpenAIApi } from "openai";
import Head from "next/head";

export default function Home() {
  const [promptInput, setPrompt] = useState("");
  const [result, setResult] = useState("");


  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: promptInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setPrompt("");
  };

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/animal_icon.png" />
      </Head>

      <main className={styles.main}>
        <img src="/animal_icon.png" className={styles.icon} />
        <h3>Photo generator</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Ej. Green horse with purple eyes"
            value={promptInput}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <input type="submit" value="Generate image" />
        </form>
        <br></br>
        <img className="result-image" src={result}/>
      </main>
    </div>
  );

}
