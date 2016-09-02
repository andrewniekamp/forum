import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    saveAnswer(params) {
      //Create a new answer with the information from our parameters, save it to the database, and call it "newAnswer".
      var newAnswer = this.store.createRecord('answer', params);
      //Refer to the question in those parameters as "question".
      var question = params.question;
      // Retrieve the list of answers located in "question", and add "newAnswer" to that list.
      question.get('answers').addObject(newAnswer);
      // Save "newAnswer", so it remembers what question it belongs in.
      newAnswer.save().then(function() {
        // Wait until "newAnswer" has finished saving, then save "question'" too, so it remembers it contains "newAnswer".
        return question.save();
      });
      // Afterwards, take us to the page displaying details for "question".
      this.transitionTo('question', params.question);
    },
  }
});
