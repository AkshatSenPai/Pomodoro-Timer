body {
    font-family: 'Arial', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
}

.container {
    text-align: center;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    max-width: 350px;
}

h1 {
    font-size: 2em;
    color: #333;
    margin-bottom: 20px;
}

.timer {
    font-size: 3em;
    margin: 20px 0;
    color: #333;
    font-weight: bold;
}

.buttons {
    display: flex;
    justify-content: space-around;
}

button {
    font-size: 1.2em;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
}

#startStopButton {
    background-color: #4CAF50;
    color: white;
}

#startStopButton:hover {
    background-color: #45a049;
}

#resetButton {
    background-color: #f44336;
    color: white;
}

#resetButton:hover {
    background-color: #e53935;
}

button:active {
    transform: scale(0.95);
}
