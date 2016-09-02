import Ember from 'ember';

export default Ember.Component.extend({
  editQuestion: false,
  actions: {
    questionEditShow() {
      this.set('editQuestion', true);
    },
    cancel() {
      this.set('editQuestion', false);
      this.set('text', '');
      this.set('notes', '');
      this.set('author', '');
    },
    editQuestionSave(question) {
      var params = {
        text: this.get('text'),
        notes: this.get('notes'),
        author: this.get('author')
      };
      this.sendAction('editQuestionSave', question, params);
      this.set('editQuestion', false);
      this.set('text', '');
      this.set('notes', '');
      this.set('author', '');
    }
  }
});
