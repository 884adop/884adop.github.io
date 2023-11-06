let model;

async function loadModel() {
    model = await cocoSsd.load();
}

async function detectObjects(image) {
    const predictions = await model.detect(image);
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    predictions.forEach(prediction => {
        const obj = document.createElement('p');
        obj.textContent = `Erkanntes Objekt: ${prediction.class} mit einer Wahrscheinlichkeit von ${Math.round(prediction.score * 100)}%`;
        resultsDiv.appendChild(obj);
    });
}

window.onload = async () => {
    await loadModel();
    const button = document.getElementById('detectButton');
    const image = document.getElementById('image');

    button.onclick = () => detectObjects(image);
};
