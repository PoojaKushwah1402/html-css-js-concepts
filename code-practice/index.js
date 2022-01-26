const DisplayData = data => {
    const mainDiv = document.querySelector('.main')
    const newDiv = document.createElement('div');
    newDiv.textContent = JSON.stringify(data);
    mainDiv.appendChild(newDiv)
}

