const hour1=document.getElementById('hour');
const minutes1=document.getElementById('minutes');
const seconds1=document.getElementById('seconds');
const ampm1=document.getElementById('ampm');
function update()
{
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm="AM";
    if(h>=12)
    {
        h=h-12;
        ampm1.innerHTML="PM";
    }
    else{
        ampm1.innerHTML="AM";
    }
    s=s<10?"0"+s:s;
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;

    hour1.innerHTML=h;
    minutes1.innerHTML=m;
    seconds1.innerHTML=s;
    setTimeout(()=>{
       update();
    },1000)

}
update();
