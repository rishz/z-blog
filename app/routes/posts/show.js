import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model({ id }) {
    return this.store.peekRecord('post', id) ||
      this.store.findRecord('post', id);
  }
});
