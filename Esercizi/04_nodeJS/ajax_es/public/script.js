const form = document.querySelector('form');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {

    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value; 
    const textarea = document.getElementById('textarea').value;
    const checkbox = document.getElementById('checkbox').checked;
    const select = document.getElementById('select').value;

    const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => 
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {

            if (xhr.status === 200)
            {

                result.innerHTML = xhr.responseText;

            } 
            else
            {
                console.error('Errore.');
            }
        }
    }

    xhr.open('POST', '/submit');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(`name=${name}&email=${email}&textarea=${textarea}&checkbox=${checkbox}&select=${select}`);

}

);



