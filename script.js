// script.js
window.addEventListener('scroll', function() {
    const footer = document.getElementById('footer');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.classList.add('show');
    } else {
        footer.classList.remove('show');
    }
});

document.getElementById('guestbook-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name && message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.innerHTML = `<strong>${name}</strong><p>${message}</p>`;
        document.getElementById('messages').appendChild(messageDiv);

        // 清空表单
        document.getElementById('name').value = '';
        document.getElementById('message').value = '';
    }
});
