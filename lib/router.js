Router.configure({
    layoutTemplate:'layout',
    loadingTemplate:'loading',
    notFoundTemplate:'notFound',
    waitOn:function () {
        return Meteor.subscribe('posts');
    }
});

Router.route('/',{name:'postsList'});
Router.route('/posts/:_id',{
    name:'postPage'
   // data:function () {
   //     var postId = this.params._id;
   //     return Posts.findOne({_id:postId})
   //  }
});
Router.route('/login',{name:'login'});
Router.onBeforeAction('dataNotFound',{only:'postPage'});

