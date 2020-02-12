console.log("Hello World")

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content')

    const woof = {
        name,
        content
    }
    console.log(woof);

});