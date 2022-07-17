function DisplayTime() {
    const dateTime = new Date();
    const hrs = dateTime.getHours();
    
    const min = dateTime.getMinutes();
    const sec = dateTime.getSeconds();
    const session = document.querySelector('.session');
   
    if (hrs <= 12) {
        session.innerHTML = "AM";
    } else {
        session.innerHTML = "PM";
    }

    document.querySelector('.hours').innerHTML = hrs;
    document.querySelector('.minutes').innerHTML = min;
    document.querySelector('.seconds').innerHTML = sec;
    
}
setInterval(DisplayTime);
const clock = document.querySelector('.clock');
const span = document.querySelector('.span');

const DeleteButton = document.querySelector('.delete');
DeleteButton.addEventListener('click', (e) => {
    
    clock.remove();
    span.remove();
    DeleteButton.innerHTML = "recover clock";
    
   
});

// console.log(DeleteButton);
