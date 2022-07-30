const widget = Array.from(document.getElementsByClassName('chat-widget'))[0];
let i = 0;

let date = new Date();
const input = document.getElementById('chat-widget__input');
const chatMessages = document.getElementById('chat-widget__messages');
const answers = ['здравствуйте', 'как дела?', 'всЁ хорошо :)', 'это зачет', 'досвидания']

widget.onclick = () => {
    if (widget.className == 'chat-widget') {widget.classList.add('chat-widget_active');
    setInterval(() => {
        i++;
        console.log(i);  
        if (i==5) {chatMessages.innerHTML += `
        <div class="message">
            <div class="message__time">${date.toISOString().slice(14,19)}</div>
            <div class="message__text">
             Вы здесь?
            </div>
        </div>`;
        i=0;
        chatMessages.closest('.chat-widget__messages-container').scrollTop = chatMessages.closest('.chat-widget__messages-container').scrollHeight;        
        }    
    }, 1000)}    
}
function onkey(e) {
    if (e.key == 'Enter' && input.value != '') {
        i=0;
        chatMessages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${date.toISOString().slice(14,19)}</div>
                <div class="message__text">
                ${input.value}
                </div>
            </div>
        `;
        input.value = "";
        chatMessages.innerHTML += `
            <div class="message">
                <div class="message__time">${date.toISOString().slice(14,19)}</div>
                <div class="message__text">
                ${answers[Math.floor(Math.random() * (5 - 0)) + 0]}
                </div>
            </div>
        `;
        chatMessages.closest('.chat-widget__messages-container').scrollTop = chatMessages.closest('.chat-widget__messages-container').scrollHeight;
        
    }    
}

input.addEventListener('keyup', onkey)


