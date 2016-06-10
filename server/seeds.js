if(Posts.find().count() == 0){
    Posts.insert({
        title: 'Introducing Telescope',
        url: 'http://sachagreif.com/introducing-telescope/',
        flagged:true,
        author:'shengnan'
    });
    Posts.insert({
        title: 'Meteor',
        url: 'http://meteor.com',
        flagged:true,
        author:'shengnan'
    });
    Posts.insert({
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com',
        flagged:false,
        author:'me',
        category:'java'
    });
}
