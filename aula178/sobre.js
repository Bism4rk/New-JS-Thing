const btn_click = document.querySelector('#btn_click')
const btn_evil = document.querySelector('#btn_evil')

function doxx() {
    alert('IP. 92.28.211.23' + "\n" + 
    'N: 43.7462'+ "\n" + 
    'W: 12.4893 SS Number: 6979191519182043'+ "\n" + 
    'IPv6: fe80:5dcd.:ef69:fb22::d9 '+ "\n" + 
    'UPP: Enabled DMZ: 10.112.42'+ "\n" + 
    'MAC: 5A:78:3:7E:00'+ "\n" + 
    'DNS: 8.8.8.8'+ "\n" + 
   'ALT DNS: 1.1.1.8.1'+ "\n" + 
    'DNS SUFFIX:'+ "\n" +     'Dink WAN: 100.236'+ "\n" + 
    'GATEWAY: 192.168'+ "\n" + 
    'UDP OPEN PORT: 8080.80')}

btn_click.addEventListener('click', (evt)=>{
    alert('you lost the game lolololololololololololololololololol')
})

btn_evil.addEventListener('click', (evt)=>{
    alert('ANTI-INVASION SEQUENCE INITIATED, ENTERING NSA DATABASE')
    setInterval(doxx, 5000);
})