import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  avgRating: attr('number'),
  springName: attr('string'),
  lat: attr('number'),
  long: attr('number'),
  author: attr('string'),
  zoom: attr('number'),
  asGoogleMap: ['lat', 'long', 'zoom'],
  reviews: DS.hasMany('review', {async: true})
});
