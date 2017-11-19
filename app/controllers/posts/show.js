import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';

const { Controller } = Ember;

export default Controller.extend({
  actions:{
    saveComment(post, commentBody){
      this.store.createRecord('comment',{
        post,
        body:commentBody
      })
        .save()
        .then(() => {
        // delete the draft state
          stateFor('post-info') // WeakMap for all post Infos
            .get(post)
            .set('body', ''); // set the draft comment back to ''
        })
    }
  }
});
