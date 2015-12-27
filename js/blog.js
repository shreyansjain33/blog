$(function() {
 
    Parse.$ = jQuery;
    Parse.initialize("BZYDHX8VimegytEoGAITFtIgOPdZWZKQ7FCEqmi6", "pn2u753nBFtWl1jwJWCPAD5mlrGaNLwirJwoUyOV");
//    alert("Checkpoint!");
});


var Blog = Parse.Object.extend("Blog");

var Blogs = Parse.Collection.extend({
    model: Blog
});

var blogs = new Blogs();

blogs.fetch({
    success: function(blogs) {
        alert("Awesome!");
        var blogsView = new BlogsView({ collection: blogs });
        blogsView.render();
    $('.main-container').html(blogsView.el);
    },
    error: function(blogs, error) {
        console.log(error);
        alert("Error!");
    }
});

var BlogsView =  Parse.View.extend({
    template: Handlebars.compile($('#blogs-tpl').html()),
    render: function(){ 
        var collection = { blog: this.collection.toJSON() };
        this.$el.html(this.template(collection));
    }
});