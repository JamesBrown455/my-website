import '../imports/ui/body.js';

Router.configure({
   layoutTemplate: 'body'  //can be any template name
 });


Router.map(function () {
  this.route('home', {
    path: '/',
  });

  this.route('about');
  this.route('work');
  this.route('links');
  this.route('edu');
  this.route('port');
});
