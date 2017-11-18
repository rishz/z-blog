import Ember from 'ember';

const {Route} = Ember;

export default Route.extend({
  queryParams: {
    search:{
      as: 's',
      replace: true
    }
  },
  model(){
    return this.store.findAll('post');
  }
});
