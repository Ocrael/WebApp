const form = document.querySelector('form');
const result = document.getElementById('result');

form.addEventListener('submit', (event) =>
{
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mezzo = document.getElementById('mezzo').value;
    const comment = document.getElementById('comment').value;
    const checkbox = document.getElementById('checkbox').checked;
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => 
    {
        if (xhr.readyState === XMLHttpRequest.DONE)
        {
            if (xhr.status === 200)
            {
                result.innerHTML = xhr.responseText;
            }
            else
            {
                console.error('Errore nella richiesta AJAX!');
            }
        }
    };

    xhr.open('POST', '/submit');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(`name=${name}&email=${email}&mezzo=${mezzo}&comment=${comment}&checkbox=${checkbox}`);

});