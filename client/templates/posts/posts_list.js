
Template.postsList.helpers({
    posts: function () {
       // return Posts.find({category:'java'});
        return Posts.find();
    }
});