import Ember from "ember";

var SpringsController = {
  actions: {
    add: function() {
          var newSpring = this.store.createRecord('spring', {
          springName: this.get('springName'),
          author: this.get('author'),
          lat: parseInt(this.get('lat')),
          long: parseInt(this.get('long')),
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
