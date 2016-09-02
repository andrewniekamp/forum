import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    saveAnswer(params) {
      //Create a new answer called newAnswer from parameters, save to database
      var newAnswer = this.store.createRecord('answer', params);
      //Call the question in those params: "question"
      var question = params.question;
      //Retrieve answers located in "question", and add "newAnswer" to list
      question.get('answers').addObject(newAnswer);
      //Save "newAnswer" so it is tied to the question it belongs to
      newAnswer.save().then(function() {
        //Wait until "newAnswer" has saved, then save "question'" too, so it remembers it contains "newAnswer".
        return question.save();
      });
      // Afterwards, take us to the page displaying details for "question".
      this.transitionTo('question', params.question);
    },
    editQuestionSave(question, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
    }
  }
});
