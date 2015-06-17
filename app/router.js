import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('springs', function() {
    this.resource('spring', {path: 'springs/:spring_id'});
  });
  this.resource('blah');
});

export default Router;
