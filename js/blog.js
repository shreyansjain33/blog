$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
	Parse.initialize("BZYDHX8VimegytEoGAITFtIgOPdZWZKQ7FCEqmi6", "pn2u753nBFtWl1jwJWCPAD5mlrGaNLwirJwoUyOV");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("You are Awesome!!");
    });
 
});

var Blog = Parse.Object.extend("Blog");

var Blogs = Parse.Object.extend(
{
	model: Blog;
});

var blogs = new Blogs;


var BlogsView = Parse.View.extend({
	templates: Handlebars.compile($('#blogs-tpl').html()),
	render: function(){
		var collection = { blog: this.collection.toJSON() };
		this.$el.html(this.template(coolection));
	}
});


blogs.fetch({
	success: function(blogs){
		var blogsView = new BlogsView ({collection: Blogs});
		blogsView.render;
		$('.main-container').html(blogView.el);
	},
	error: function (blogs, error){
		console.log(error);
	}
});
