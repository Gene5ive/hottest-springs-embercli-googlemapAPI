import Ember from "ember";

var SpringsController = {
  actions: {
    add: function() {
          var newSpring = this.store.createRecord('springs', {
          springName: this.get('springName'),
          author: this.get('author'),
          lat: this.get('lat'),
          long: this.get('long'),

        });

    }
  }
}

export default Ember.Controller.extend(SpringsController);
