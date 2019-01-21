const API_KEY = 'AIzaSyCW3d9QMkhbwAcXa6mHj-Y-TnsMjcfW6uk';

module.exports = {
  staticMap: zipCode =>
    `https://maps.googleapis.com/maps/api/staticmap?center=${zipCode}&zoom=18&markers=size:mid%7Ccolor:red%7C${zipCode}&size=600x400&key=${API_KEY}`
};
