import Ember from 'ember';

const PostInfoState = Ember.Object.Extend({});

PostInfoState.reopenClass({
  initializeState(){
    return{
      body: ''
    }
  }
});

export default PostInfoState;
