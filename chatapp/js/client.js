const socket= io('https:localhost:8000');
const form = document.getElementById('send-container');
const messageInput=document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');
const append = (message, position)=>{
    const messageElement=document.createElement('div');
    messageElement.innerText=message;
    messageElement.classList.add('message');
    messageElement.classList.add('position');
    messageContainer.append(message Element);
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message = messageInput.value ;
    append(`you:$(message)`,'right');
    socket.emit('send',message);
    messageInput.value = '';
})
const name = prompt("enter your name to join ");
socket.emit('new-user-joined',name);
socket.on('user-joined',name =>{
    append(`${name}joined thechat`,'right')
})
socket . on ('recieve',data =>{
    append(`${data.name}:{data.message}`,'left')
})
socket . on ('left',name=>{
    append(`${data.name}left the chat`,'left','left')
})
