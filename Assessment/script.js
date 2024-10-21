
document.getElementById('startButton').addEventListener('click', function() {
   
    document.getElementById('startContainer').style.display = 'none';
    
    document.getElementById('inputContainer').style.display = 'flex';
});

document.getElementById('enterButton').addEventListener('click', function() {
    const bulbCountInput = document.getElementById('bulbCount');
    const numBulbs = parseInt(bulbCountInput.value, 10);

    if (isNaN(numBulbs) || numBulbs <= 0) {
        alert("Please enter a valid number of bulbs.");
        return;
    }

    document.getElementById('inputContainer').style.display = 'none';

    document.getElementById('bulbInterface').classList.remove('hidden');
    const bulbContainer = document.getElementById('bulbContainer');
    bulbContainer.innerHTML = '';  

    for (let i = 1; i <= numBulbs; i++) {
        const bulbItem = document.createElement('div');
        bulbItem.classList.add('bulb-item');

        const bulbImage = document.createElement('img');
        bulbImage.src = 'bulb-off.png'; 
        bulbImage.alt = `Bulb ${i}`;
        bulbImage.classList.add('bulb');
        bulbImage.id = `bulb${i}`;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `checkbox${i}`;
        checkbox.classList.add('checkbox');


        checkbox.addEventListener('change', function() {
            if (this.checked) {
                bulbImage.src = 'bulb-on.png';  
            } else {
                bulbImage.src = 'bulb-off.png';
            }
        });

      
        bulbItem.appendChild(bulbImage);
        bulbItem.appendChild(checkbox);

       
        bulbContainer.appendChild(bulbItem);
    }
});