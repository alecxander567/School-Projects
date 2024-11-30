document.addEventListener('DOMContentLoaded', function(){
    const cont1 = document.getElementById('container');
    const cont2 = document.getElementById('container2');
    const cont3 = document.getElementById('container3');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');

    page1.addEventListener('click', function(){
        cont1.style.visibility = 'visible';
        cont2.style.visibility = 'hidden';
        cont3.style.visibility = 'hidden';
    });

    page2.addEventListener('click', function(){
        cont1.style.visibility = 'hidden';
        cont2.style.visibility = 'visible';
        cont3.style.visibility = 'hidden';
    });

    page3.addEventListener('click', function(){
        cont3.style.visibility = 'visible';
        cont1.style.visibility = 'hidden';
        cont2.style.visibility = 'hidden';
    });

});