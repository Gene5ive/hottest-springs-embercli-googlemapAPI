import Ember from "ember";

var SpringsController = {
  actions: {
    add: function() {
          var newSpring = this.store.createRecord('spring', {
          springName: this.get('springName'),
          author: this.get('author'),
          lat: this.get('lat'),
          long: this.get('long'),
          zoom: 6
        });
        newSpring.save();
        this.setProperties({
          springName: '',
          author: '',
          lat: '',
          long: '',
        });
    }
  }
};

export default Ember.Controller.extend(SpringsController);
