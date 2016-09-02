import Ember from 'ember';

export default Ember.Route.extend({
  //Model hook
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    deleteQuestion(question) {
      var answersToDelete = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answersToDelete).then(function() {
        return question.destroyRecord();
      });
      this.transitionTo('index');
    }
  }
});
