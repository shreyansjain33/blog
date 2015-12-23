//Parse.initialize("BZYDHX8VimegytEoGAITFtIgOPdZWZKQ7FCEqmi6", "pn2u753nBFtWl1jwJWCPAD5mlrGaNLwirJwoUyOV");

$(function() {
 
    Parse.$ = jQuery;
	Parse.initialize("BZYDHX8VimegytEoGAITFtIgOPdZWZKQ7FCEqmi6", "pn2u753nBFtWl1jwJWCPAD5mlrGaNLwirJwoUyOV");

});


var Blog = Parse.Object.extend("Blog");

var Blogs = Parse.Collection.extend({
    model: Blog
});

var blogs = new Blogs();

var BlogsView =  Parse.View.extend({
    template: Handlebars.compile($('#blogs-tpl').html()),
    render: function(){ 
        var collection = { blog: this.collection.toJSON() };
        this.$el.html(this.template(collection));
    }
});

blogs.fetch({
	success: function(blogs) {
		condole.log('blogs');
	    var blogsView = new BlogsView({ collection: blogs });
	    blogsView.render();
	    $('.main-container').html(blogsView.el);
	},
    error: function(blogs, error) {
        console.log(error);
    }
});
