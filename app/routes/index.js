import Ember from 'ember';

export default Ember.Route.extend({
  //Model hook
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  }
});
