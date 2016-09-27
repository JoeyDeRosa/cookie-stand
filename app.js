'use strict';

function CookieShop(name, min, max, cpc) {
  this.shopName = name;
  this.minCustomers = min;
  this.maxCustomers = max;
  this.cookiesPerCustomer = cpc;
  this.times = ['','6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ', '5pm: ', '6pm: ', '7pm: ', 'Total: '];
  this.generateRandom = function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  };
  shopArray.push(this);
}
var shopArray = [];
new CookieShop('1st and Pike', 23, 65, 6.3);
new CookieShop('SeaTac Airport', 3, 24, 1.2);
new CookieShop('Seattle Center', 11, 38, 3.7);
new CookieShop('Capitol Hill', 20, 38, 2.3);
new CookieShop('Alki', 2, 16, 4.6);


function createTableHeader(shopArray) {
  var table = document.getElementById('table');
  var trEl = document.createElement('tr');
  for(var i = 0; i < shopArray[0].times.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = shopArray[0].times[i];
    trEl.appendChild(tdEl);
  }
  table.appendChild(trEl);
}

function generateCookiesPerHour(shop) {
  var cookiesPerHour = [];
  var totalCookies = 0;
  for(var i = 0; i < shop.times.length - 1; i++) {
    if(i === shop.times.length - 2) {
      cookiesPerHour.push(totalCookies);
    } else {
      cookiesPerHour.push(Math.ceil(shop.generateRandom() * shop.cookiesPerCustomer));
      totalCookies += cookiesPerHour[i];
    }
  }
  var table = document.getElementById('table');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = shop.shopName;
  trEl.appendChild(tdEl);
  for(var i = 0; i < cookiesPerHour.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }
  table.appendChild(trEl);
}

createTableHeader(shopArray);
for(var i = 0; i < shopArray.length; i++) {
  generateCookiesPerHour(shopArray[i]);
}
