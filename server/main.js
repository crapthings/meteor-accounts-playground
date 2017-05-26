Meteor.startup(function () {

  if (!Meteor.users.findOne()) {
    Accounts.createUser({
      username: 'demo',
      password: 'demo',
    });
  }

  Meteor.publish(null, function () {
    if (!this.userId) return this.ready();

    Meteor._sleepForMs(3000);

    return Meteor.users.find({ _id: this.userId }, {
      fields: {
        services: false,
      }
    })
  });

});

Accounts.onLogin(function () {
  console.log('onLogin')
})
