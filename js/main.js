function DisplayTime() {
    const dateTime = new Date();
    const hrs = dateTime.getHours();
    
    const min = dateTime.getMinutes();
    const sec = dateTime.getSeconds();
    

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

