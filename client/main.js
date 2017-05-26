import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.events({
  'click button'(event, instance) {
    !Meteor.userId() ? Meteor.loginWithPassword('demo', 'demo', function () {
      console.log(Meteor.user());
    }) : Meteor.logout();
  },
});

Meteor.startup(function () {
  Accounts.onLogin(function () {
    console.log('onLogin fired', Meteor.user())
  });

  Meteor.autorun(function () {
    console.log('用户是否登录', Meteor.userId());
    console.log('用户字段', Meteor.user());
    console.log('用户登录中', Meteor.loggingIn());
    console.log('用户字段', Meteor.user());
  });
});
