import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('springs', function() {
    this.resource('spring', {path: ':spring_id'});
  });
  this.route('spring-details', {path: 'spring/details/:spring_id'});
});

export default Router;
