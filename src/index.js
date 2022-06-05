const factElement = document.querySelector("#fact-element");
const img = document.querySelector("#cat-image");
const button = document.querySelector("#refresh");

const triggerData = async () => {
	await getImage();

	getFact();
};

const getImage = () => {
	axios
		.get("https://api.thecatapi.com/v1/images/search")
		.then((data) => setImage(data.data[0].url));
};

const getFact = () => {
	axios
		.get("https://catfact.ninja/fact")
		.then((data) => setFact(data.data.fact))
		.catch(setFact("Oops... Something Went Wrong."));
};

const setImage = (url) => {
	img.setAttribute("src", url);
};

const setFact = (fact) => {
	factElement.textContent = fact;
};

button.addEventListener("click", triggerData);
