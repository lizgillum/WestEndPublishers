const button = document.getElementById('see');

button.addEventListener('click', function() {
    
    const info = document.getElementById('kerry');

    if (info.classList.contains('hidden')) {
    info.classList.remove('hidden');
    button.innerHTML = 'Close';
    }

    else {
        info.classList.add('hidden');
        button.innerHTML = 'Learn More';
    }
    
});

const button1 = document.getElementById('see1');

button1.addEventListener('click', function() {
    
    const info = document.getElementById('taylor');

    if (info.classList.contains('hidden')) {
        info.classList.remove('hidden');
        button1.innerHTML = 'Close';
        }
    
        else {
            info.classList.add('hidden');
            button1.innerHTML = 'Learn More';
        }

});

const button2 = document.getElementById('see2');

button2.addEventListener('click', function() {

    const info = document.getElementById('riley');

    if (info.classList.contains('hidden')) {
        info.classList.remove('hidden');
        button2.innerHTML = 'Close';
        }
    
        else {
            info.classList.add('hidden');
            button2.innerHTML = 'Learn More';
        }

});