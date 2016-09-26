'use strict'
var firstAndPike = {
  minCustomers: 23,
  maxCustomers: 65,
  customersPerHour: 6.3,
  cookiesPerHour: [],
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },
  generateCookiesPerHour: function() {
    for(var i = 0; i < 15; i++) {
      cookiesPerHour.push(this.generateRandom());
    }
    return cookiesPerHour;
  }
};
