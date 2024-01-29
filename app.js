let btn = document.getElementById('toggleBtn');

btn.addEventListener('click' , toggleBulb);
    function toggleBulb(){
        if(btn.textContent.includes('On')){
            btn.textContent = "Turn Off";
        }
        else{
            btn.textcontent = "Turn On"
        }
    }