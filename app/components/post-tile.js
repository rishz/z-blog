import Ember from 'ember';
import stateFor from 'ember-state-services';

const { Component } = Ember;

export default Component.extend({
  classNames:['post-tile'],
  postInfo: stateFor('post-info', 'model')
});
