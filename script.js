function sayYes() {
    document.getElementById('kitty').src = 'https://elblogdevaleria.travel.blog/wp-content/uploads/2019/01/snoopy.png'; // Kitty con rosas
    document.getElementById('message').textContent = '¡Yay! Aquí tienes rosas mi amorsote bello 🌹🌹🌹';
    document.getElementById('message').style.display = 'block';
}

function sayNo() {
    document.getElementById('kitty').src = 'https://i.pinimg.com/originals/ab/1c/6d/ab1c6d14923579a6762cf1a893da1a24.gif'; // Carita triste
    document.getElementById('message').textContent = 'Di que sí 😢';
    document.getElementById('message').style.display = 'block';
}

// Generar corazones cayendo
function createHeart() {
    const heartContainer = document.querySelector('.heart-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';
    
    const startPositionX = Math.random() * window.innerWidth;  // Posición aleatoria en el eje X
    heart.style.left = `${startPositionX}px`;
    
    heartContainer.appendChild(heart);

    // Eliminar el corazón después de la animación
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Crear un corazón cada 100ms
setInterval(createHeart, 100);
