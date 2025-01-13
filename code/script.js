let enteredCode = '';

function enterNumber(num) {
    if (enteredCode.length < 4) {
        enteredCode += num;
        document.getElementById('code').value = enteredCode;
    }
}

function clearCode() {
    enteredCode = '';
    document.getElementById('code').value = '';
    document.getElementById('message').textContent = '';
}

function checkCode() {
    if (enteredCode === '1307') {
        document.getElementById('vault').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        document.getElementById('enamorado').play();
        launchConfetti();
        createHearts();
    } else {
        document.getElementById('message').textContent = 'Contraseña incorrecta';
        enteredCode = '';
        document.getElementById('code').value = '';
    }
}

function launchConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

function createHearts() {
    const heartsContainer = document.querySelector('.hearts');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        if (Math.random() > 0.5) {
            heart.classList.add('purple');
        }
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
        heartsContainer.appendChild(heart);
    }
}