import Ember from 'ember';

export default Ember.Component.extend({
  addAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addAnswer', true);
    },
    cancel() {
      this.set('addAnswer', false);
      this.set('text', '');
      this.set('notes', '');
      this.set('author', '');
    },
    sendSave() {
      var params = {
        text: this.get('text'),
        author: this.get('author'),
        question: this.get('question')
      };
      this.set('addAnswer', false);
      this.sendAction('sendAnswer', params);
      this.set('text', '');
      this.set('notes', '');
      this.set('author', '');
    }
  }
});
