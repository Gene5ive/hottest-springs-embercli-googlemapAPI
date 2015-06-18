import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  reviewerName: DS.attr('string'),
  description: attr('string'),
  rating: attr('number'),
  spring: DS.belongsTo('spring', {async: true})
});
