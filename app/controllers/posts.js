import Ember from 'ember';

const {Controller, run:{debouce}} = Ember;

export default Controller.extend({
  _triggerPageRefresh(){
    this.send('pageRefresh');
  },
  actions: {
    queuePageRefresh(){
      debouce(this, '_triggerPageRefresh', 300);
    }
  }
});
