const form = document.getElementById('myForm');
const thankYouMessage = document.querySelector('.thank-you-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const socials = document.getElementById('socials').value;
    const github = document.getElementById('github').value;
    const experience = document.getElementById('experience').value;
    const source = document.getElementById('source').value;
    const intro = document.getElementById('intro').value;

    if (name === '' || email === '' || socials === '' || github === '' || experience === '' || source === '' || intro === '') {
        alert('Please fill in all fields.');
    } else {
       
        form.style.display = 'none';
        thankYouMessage.style.display = 'block';
    }
});