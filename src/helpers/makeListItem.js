const makeListItem = text => {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
}

export default makeListItem;