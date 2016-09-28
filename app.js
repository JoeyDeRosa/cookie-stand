'use strict';
var form = document.getElementById('form');

function CookieShop(name, min, max, cpc) {
  this.shopName = name;
  this.minCustomers = min;
  this.maxCustomers = max;
  this.cookiesPerCustomer = cpc;
  this.cookiesPerHour = [];
  this.times = ['','6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ', '5pm: ', '6pm: ', '7pm: ', 'Total: '];
  this.generateRandom = function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  };
  this.render = function() {
    var totalCookies = 0;
    for(var i = 0; i < this.times.length - 1; i++) {
      if(i === this.times.length - 2) {
        this.cookiesPerHour.push(totalCookies);
      } else {
        this.cookiesPerHour.push(Math.ceil(this.generateRandom() * this.cookiesPerCustomer));
        totalCookies += this.cookiesPerHour[i];
      }
    }
    var table = document.getElementById('table');
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.shopName;
    trEl.appendChild(tdEl);
    for(var i = 0; i < this.cookiesPerHour.length; i++) {
      tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesPerHour[i];
      trEl.appendChild(tdEl);
    }
    table.appendChild(trEl);
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
  var thead = document.createElement('thead');
  var trEl = document.createElement('tr');
  for(var i = 0; i < shopArray.times.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = shopArray.times[i];
    trEl.appendChild(thEl);
  }
  thead.appendChild(trEl);
  table.appendChild(thead);
}

function createTableFooter(shopArray) {
  var table = document.getElementById('table');
  var tfoot = document.createElement('tfoot');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Total:';
  trEl.appendChild(tdEl);
  for(var i = 0; i < shopArray[0].cookiesPerHour.length; i++) {
    var hourlyCookies = 0;
    tdEl = document.createElement('td');
    for(var x = 0; x < shopArray.length; x++){
      hourlyCookies += shopArray[x].cookiesPerHour[i];
    }
    tdEl.textContent = hourlyCookies;
    trEl.appendChild(tdEl);
  }
  tfoot.appendChild(trEl);
  table.appendChild(tfoot);
}

function renderAll() {
  createTableHeader(shopArray[0]);
  for(var i = 0; i < shopArray.length; i++) {
    shopArray[i].render();
  }
  createTableFooter(shopArray);
}

function handleSubmit(event) {
  event.preventDefault();
  if (!event.target.newLocation.value || !event.target.minCustomers.value || !event.target.maxCustomers.value || !event.target.cookiesPerCustomer.value) {
    return alert('Fields cannot be empty!');
  }
  var inputLocation = event.target.newLocation.value;
  var inputMin = event.target.minCustomers.value;
  var inputMax = event.target.maxCustomers.value;
  var inputAvg = event.target.cookiesPerCustomer.value;
  new CookieShop(inputLocation, inputMin, inputMax, inputAvg);
  renderAll();
  event.target.newLocation.value = null;
  event.target.minCustomers.value = null;
  event.target.maxCustomers.value = null;
  event.target.cookiesPerCustomer.value = null;
}
form.addEventListener('submit', handleSubmit);
