const jokeButton = document.getElementById("joke-btn");
const jokeDisplay = document.getElementById("joke-display");

async function fetchJoke() {
    jokeDisplay.textContent = "Loading...";

    try {
        const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
        if (!response.ok) {
            throw new Error(`Joke API returned ${response.status}`);
        }

        const data = await response.json();
        if (!data.setup || !data.punchline) {
            throw new Error("Joke API response is missing joke text");
        }

        const setup = document.createElement("strong");
        setup.textContent = data.setup;

        const punchline = document.createElement("em");
        punchline.textContent = data.punchline;

        jokeDisplay.replaceChildren(
            setup,
            document.createElement("br"),
            document.createElement("br"),
            punchline
        );
    } catch (error) {
        jokeDisplay.textContent = "Failed to fetch a joke. Please try again later.";
        console.error("Error fetching joke:", error);
    }
}

jokeButton.addEventListener("click", fetchJoke);
