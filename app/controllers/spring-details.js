import Ember from "ember";

var SpringDetailsController = {
  needs: ['spring'],
  actions: {
    addReview: function() {
      var newReview = this.store.createRecord('review', {
        reviewerName: this.get('reviewerName'),
        rating: this.get('rating'),
        description: this.get('description')
      });
      var spring = this.get('controllers.spring.model');
      var rating = parseInt(this.get('rating'));
      var newAvgRating = parseInt(spring.get('avgRating'));
      newReview.save().then(function() {
        spring.get('reviews').pushObject(newReview);
        newAvgRating = Math.floor((newAvgRating + rating)/2);
        spring.set('avgRating', newAvgRating)
        spring.save();
      });

      $("#one").hide();
      $("#two").hide();
      $("#three").hide();
      $("#four").hide();
      $("#five").hide();

      if(newAvgRating === 1){
        $("#one").fadeIn();
      }else if(newAvgRating === 2){
        $("#two").fadeIn();
      }else if(newAvgRating === 3){
        $("#three").fadeIn();
      }else if(newAvgRating === 4){
        $("#four").fadeIn();
      }else if(newAvgRating === 5){
        $("#five").fadeIn();
      };

      this.setProperties({
        rating: '',
        reviewerName: '',
        description: ''
      });
    }
  }
}
export default Ember.Controller.extend(SpringDetailsController);
