import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editQuestionSave(question, params) {
      this.sendAction('editQuestionSave', question, params)
    }
  }
});
