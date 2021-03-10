const https = require('https');
const fetchUrl = 'https://heb-ecom-covid-vaccine.hebdigital-prd.com/vaccine_locations.json';
const linkUrl = 'https://vaccine.heb.com/scheduler';

const nearbyCities = [
  'leander',
  'austin',
  'bastrop',
  'westlake hills',
  'killeen',
  'jonestown',
  'georgetown'
];

module.exports = {
  key: 'HEB',
  /**
   * Get vaccine location data.
   * @returns Promise
   */
  fetch: () => {
    return new Promise((resolve, reject) => {
      https.get(fetchUrl, res => {
        let body = '';

        res.on('data', chunk => {
          body += chunk;
        })

        res.on('end', () => {
          resolve(body);
        })
      })
      .on('error', error => {
        reject(error);
      })
    })
  },

  /**
   * Parse response into sms message.
   * @param data {string} JSON string 
   * @returns string
   */
  parse: (data) => {
    const json = JSON.parse(data);
    const storesWithSlots = json.locations.filter(location => nearbyCities.includes(location.city.toLowerCase()) && location.openTimeslots >= 80);
    let message = '';
    if (storesWithSlots.length) {
      storesWithSlots.forEach(store => {
        message += `Open slot at ${store.name}` + "\n";
      })
      message += linkUrl;
    }
    return message;
  }
}
