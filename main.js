console.log("You look marvelous!");

//story
// It had been a hard, {adjective} day on the {silly word} trail. The cowboys drove a herd of {plural noun} across the dry plains, kicking up {noun} along the way as they looked for somewhere to bed down.

const mainElement = document.querySelector("main");

mainElement.addEventListener("click", event => {
	if(event.target.id.startsWith("tellStory")){
		const madlib = {
			adjective: document.querySelector("#adjective").value,
			sillyword: document.querySelector("#sillyWord").value,
			pluralnoun: document.querySelector("#pluralNoun").value,
			noun: document.querySelector("#noun").value
		}
		//set/save to sessionStorage
		setDataToStorage(madlib);
		
		console.log(getDataFromStorage("madlib"));
		//invoke renderStory
	}
})

const getDataFromStorage = (dataKey) => {
	//use JSON.parse()
	return JSON.parse(localStorage.getItem(dataKey))
}

const setDataToStorage = (dataObj) => {
	//use JSON.stringify()
	localStorage.setItem("madlib", JSON.stringify(dataObj));
}

const clearStorage = (dataKey) => {
	sessionStorage.removeItem(dataKey);
	localStorage.removeItem(dataKey);
}

const renderInputs = () => {
	clearStorage('madlib')
	// show inputs fields

	//show 'Tell Story' button
}

const renderStory = () => {
	//get from sessionStorage

	//show the story

	//show startOver button
	//startOver will invoke renderInputs()
}

renderInputs();
