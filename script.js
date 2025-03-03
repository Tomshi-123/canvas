const canvas = document.getElementById('drawingCanvas');
canvas.width = 500;
canvas.height = 500;
const context = canvas.getContext('2d');
let drawing = false;
let color = 'black';
const text = document.getElementById('choice');

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);

function startDrawing(event) {
    drawing = true;
    draw(event);
}

function stopDrawing() {
    drawing = false;
    context.beginPath();
}

function draw(event) {
    if (!drawing) return;
    context.lineWidth = 5;
    context.lineCap = 'round';
    context.strokeStyle = color;

    context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    context.stroke();
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'r') {
        color = 'red';
    } else if (event.key === 'b') {
        color = 'blue';
    } else if (event.key === 'g') {
        color = 'green';
    } else if (event.key === 'e') {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    text.textContent = "Vald färg: " + color;
    document.body.style.backgroundColor = color;
});