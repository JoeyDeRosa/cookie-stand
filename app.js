'use strict';
var firstAndPikeShop = {
  name: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  cookiesPerCustomer: 6.3,
  times: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '],
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  generateCookiesPerHour: function() {
    var cookiesPerHour = [];
    var totalCookies = 0;
    for(var i = 0; i < 16; i++) {
      if(i === 15) {
        cookiesPerHour.push(totalCookies);
      } else {
        cookiesPerHour.push(Math.ceil(this.generateRandom() * this.cookiesPerCustomer));
        totalCookies += cookiesPerHour[i];
      }
    }
    var firstAndPike = document.getElementById('firstAndPike');
    for(var i = 0; i < cookiesPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.times[i] + cookiesPerHour[i];
      firstAndPike.appendChild(liEl);
    }
  }
};

var seaTacShop = {
  name: 'SeaTac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  cookiesPerCustomer: 1.2,
  times: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '],
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  generateCookiesPerHour: function() {
    var cookiesPerHour = [];
    var totalCookies = 0;
    for(var i = 0; i < 16; i++) {
      if(i === 15) {
        cookiesPerHour.push(totalCookies);
      } else {
        cookiesPerHour.push(Math.ceil(this.generateRandom() * this.cookiesPerCustomer));
        totalCookies += cookiesPerHour[i];
      }
    }
    var seaTac = document.getElementById('seaTac');
    for(var i = 0; i < cookiesPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.times[i] + cookiesPerHour[i];
      seaTac.appendChild(liEl);
    }
  }
};

var seattleCenterShop = {
  name: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  cookiesPerCustomer: 3.7,
  times: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '],
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  generateCookiesPerHour: function() {
    var cookiesPerHour = [];
    var totalCookies = 0;
    for(var i = 0; i < 16; i++) {
      if(i === 15) {
        cookiesPerHour.push(totalCookies);
      } else {
        cookiesPerHour.push(Math.ceil(this.generateRandom() * this.cookiesPerCustomer));
        totalCookies += cookiesPerHour[i];
      }
    }
    var seattleCenter = document.getElementById('seattleCenter');
    for(var i = 0; i < cookiesPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.times[i] + cookiesPerHour[i];
      seattleCenter.appendChild(liEl);
    }
  }
};

var capitolHillShop = {
  name: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  cookiesPerCustomer: 2.3,
  times: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '],
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  generateCookiesPerHour: function() {
    var cookiesPerHour = [];
    var totalCookies = 0;
    for(var i = 0; i < 16; i++) {
      if(i === 15) {
        cookiesPerHour.push(totalCookies);
      } else {
        cookiesPerHour.push(Math.ceil(this.generateRandom() * this.cookiesPerCustomer));
        totalCookies += cookiesPerHour[i];
      }
    }
    var capitolHill = document.getElementById('capitolHill');
    for(var i = 0; i < cookiesPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.times[i] + cookiesPerHour[i];
      capitolHill.appendChild(liEl);
    }
  }
};

var alkiShop = {
  name: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  cookiesPerCustomer: 4.6,
  times: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '],
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  generateCookiesPerHour: function() {
    var cookiesPerHour = [];
    var totalCookies = 0;
    for(var i = 0; i < 16; i++) {
      if(i === 15) {
        cookiesPerHour.push(totalCookies);
      } else {
        cookiesPerHour.push(Math.ceil(this.generateRandom() * this.cookiesPerCustomer));
        totalCookies += cookiesPerHour[i];
      }
    }
    var alki = document.getElementById('alki');
    for(var i = 0; i < cookiesPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.times[i] + cookiesPerHour[i];
      alki.appendChild(liEl);
    }
  }
};

alkiShop.generateCookiesPerHour();
capitolHillShop.generateCookiesPerHour();
seattleCenterShop.generateCookiesPerHour();
firstAndPikeShop.generateCookiesPerHour();
seaTacShop.generateCookiesPerHour();
