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

blogs.fetch({
	success: function(blogs){
		console.log(blogs);
	},
	error: function (blogs, error){
		console.log(error);
	}
});

