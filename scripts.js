"use strict"

const url = 'https://www.mtbank.by/currxml.php?ver=2';
let ex = document.getElementById('ex');

fetch(url)
  .then(res => res.text())
  .then(function(data) {
    let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(data, 'text/html');
      let rates = xmlDoc.getElementsByTagName("department");
      // Ищем атрибуты 
      for (let i = 0; i < rates.length; i++) {
        const city = rates[i].getAttribute('city');
        const address = rates[i].getAttribute('address');
        const label = rates[i].getAttribute('label');
        let exDiv = document.createElement('div')
        let div = document.createElement('div');
        let p = document.createElement('p');
        let a = ex.appendChild(div);
        let b = a.appendChild(p)
        a.classList = 'depBlock';
        b.classList = 'department';
        let exd = a.appendChild(exDiv);
        
        const department = rates[i];
        let rts = xmlDoc.getElementsByTagName('department')[i].innerHTML;
        exd.innerHTML = rts;
        b.innerHTML = `${label}, г. ${city}, ул. ${address}`
      }
  })