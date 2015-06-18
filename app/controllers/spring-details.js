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
      newReview.save();
      var spring = this.get('controllers.spring.model');
      spring.get('reviews').pushObject(newReview);

      var rating = parseInt(this.get('rating'));

      var newAvgRating = parseInt(spring.get('avgRating'));
      newAvgRating = (newAvgRating + rating)/2;
      spring.set('avgRating', newAvgRating)
      spring.save();

alert(newAvgRating);
      if(newAvgRating === 1){
        $("#one").show();
      }else if(newAvgRating === 2){
        $("#two").show();
      }else if(newAvgRating === 3){
        $("#three").show();
      }else if(newAvgRating === 4){
        $("#four").show();
      }else if(newAvgRating === 5){
        $("#five").show();
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
