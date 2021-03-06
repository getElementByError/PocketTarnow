function getDate()
{
    let today = new Date();

    let day = today.getDate()
    let month = today.getMonth()+1;
    let year = today.getFullYear();

    let monthName="";
    if(month==0)monthName="Styczeń";
    else if(month==1)monthName="Luty";
    else if(month==2)monthName="Marzec";
    else if(month==3)monthName="Kwietnia";
    else if(month==4)monthName="Maja";
    else if(month==5)monthName="Czerwca";
    else if(month==6)monthName="Lipca";
    else if(month==7)monthName="Sierpnia";
    else if(month==8)monthName="Września";
    else if(month==9)monthName="Października";
    else if(month==10)monthName="Listopada";
    else if(month==11)monthName="Grudnia";



    let hrs = today.getHours();
    let min = today.getMinutes();

    let nowImieniny = imieniny[month][day];

    if(day<10) day = '0'+day;
    if(month<10) month = '0'+month;
    if(hrs<10) hrs = '0'+hrs;
    if(min<10) min = '0'+min;

    const date = document.getElementById('dateLeft');

    date.innerHTML = '<span class="hrDate">'+hrs+":"+min+"</span><br />";
    date.innerHTML += day +" "+monthName;

    
    let imieninyText = nowImieniny.replace(' ,',',');
    imieninyText = imieninyText.replace(' ,',',');

    const dateRight = document.getElementById('dateRight');
    dateRight.innerHTML = 'Dzis imieniny obchodzą: <br /><br /><span id="todayNames">'+imieninyText+"</span>";//imieninyText;
    
}
document.addEventListener('load',getDate());
setInterval(getDate,1000);