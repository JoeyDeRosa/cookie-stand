'use strict'
var firstAndPikeShop = {
  name: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  cookiesPerCustomer: 6.3,
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  generateCookiesPerHour: function() {
    var cookiesPerHour = [];
    for(var i = 0; i < 15; i++) {
      cookiesPerHour.push(Math.ceil(this.generateRandom() * this.cookiesPerCustomer));
    }
    var firstAndPike = document.getElementById('firstAndPike');
    for(var i = 0; i < cookiesPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = cookiesPerHour[i];
      firstAndPike.appendChild(liEl);
    }
  }
};

var seaTacShop = {
  name: 'SeaTac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  cookiesPerCustomer: 1.2,
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  generateCookiesPerHour: function() {
    var cookiesPerHour = [];
    for(var i = 0; i < 15; i++) {
      cookiesPerHour.push(Math.ceil(this.generateRandom() * this.cookiesPerCustomer));
    }
    var seaTac = document.getElementById('seaTac');
    for(var i = 0; i < cookiesPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = cookiesPerHour[i];
      seaTac.appendChild(liEl);
    }
  }
};

firstAndPikeShop.generateCookiesPerHour();
seaTacShop.generateCookiesPerHour();
