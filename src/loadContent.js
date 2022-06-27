const loadContent = tab => {
    const contentDiv = document.querySelector("#content");
    contentDiv.append(tab());
}

export default loadContent;