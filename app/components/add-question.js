import Ember from 'ember';

export default Ember.Component.extend({
  addQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addQuestion', true);
    },
    cancel() {
      this.set('addQuestion', true);
      this.set('text', '');
      this.set('notes', '');
      this.set('author', '');
    },
    sendSave() {
      var params = {
        text: this.get('text'),
        notes: this.get('notes'),
        author: this.get('author')
      };
      this.set('addQuestion', false);
      this.sendAction('sendQuestion', params);
      this.set('text', '');
      this.set('notes', '');
      this.set('author', '');
    }
  }
});
