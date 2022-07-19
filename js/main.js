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
const show = document.querySelector('#show');

DeleteButton.addEventListener('click', (e) => {
    show.classList.toggle('hiden');
    if (show.classList.contains('hiden')) {
        
        DeleteButton.innerHTML = " Recover Clock";

    } else {
        DeleteButton.innerHTML = "Delete Clock ";
    }
    
    
   
});

// console.log(DeleteButton);
