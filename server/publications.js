Meteor.publish('posts',function () {
    return Posts.find({},{fields:{}});
})

Meteor.publish('postsByAuthor',function (name) {
    return Posts.find({flagged:false,author:name});
})

Meteor.publish('postById',function (postid) {
    return Posts.find({_id:postid});
})