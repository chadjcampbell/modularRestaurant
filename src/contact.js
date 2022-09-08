export default function contact() {
    const mainDisplay = document.querySelector('#main');
    mainDisplay.innerHTML = '';

    const form = document.createElement('form');
    mainDisplay.append(form)

    const fg1 = document.createElement('div');
    fg1.classList.add('form-group');
    form.append(fg1);

    const label1 = document.createElement('label');
    label1.for = 'email';
    label1.textContent = 'Email address';
    const input1 = document.createElement('input');
    input1.type = 'email';
    input1.classList.add('form-control');
    input1.id = 'email';
    input1.placeholder = 'Enter e-mail';
    const small = document.createElement('small');
    small.classList.add('form-text', 'text-muted');
    small.textContent = 'We\'ll never share your email with anyone else.';
    fg1.append(label1, input1, small)

    const fg2 = document.createElement('div');
    fg2.classList.add('form-group');
    form.append(fg2);

    const label2 = document.createElement('label');
    label2.for = 'comments';
    label2.textContent = 'Comments or suggestions?'
    const textarea = document.createElement('textarea');
    textarea.classList.add('form-control');
    textarea.id = 'comments';
    textarea.rows = '3';
    fg2.append(label2, textarea);

    const submitbtn = document.createElement('button');
    submitbtn.type = 'submit';
    submitbtn.classList.add('btn', 'btn-primary');
    submitbtn.textContent = 'Submit';
    form.append(submitbtn);

}