const API_KEY = 'AIzaSyBxyiiVsnmLTpFYat4LIfaxKiRIecbYRvI';

module.exports = {
  staticMap: zipCode =>
    `https://maps.googleapis.com/maps/api/staticmap?center=${zipCode}&zoom=18&markers=size:mid%7Ccolor:red%7C${zipCode}&size=600x400&key=${API_KEY}`
};
