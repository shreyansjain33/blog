$(function() {
 
    Parse.$ = jQuery;
	Parse.initialize("BZYDHX8VimegytEoGAITFtIgOPdZWZKQ7FCEqmi6", "pn2u753nBFtWl1jwJWCPAD5mlrGaNLwirJwoUyOV");

});


var LoginView = Parse.View.extend({
        template: Handlebars.compile($('#login-tpl').html()),
        events: {
        'submit .form-signin': 'login'
    },
    login: function(e) {
        // Prevent Default Submit Event
        e.preventDefault();
        // Get data from the form and put them into variables
        var data = $(e.target).serializeArray(),
            username = data[0].value,
            password = data[1].value;

        // Call Parse Login function with those variables
        Parse.User.logIn(username, password, {
            // If the username and password matches
            success: function(user) {
                var welcomeView = new WelcomeView({ model: user });
                welcomeView.render();
                $('.main-container').html(welcomeView.el);
            },     
            // If there is an error
            error: function(user, error) {
                console.log(error);
            }
        });
    },
        render: function(){
        this.$el.html(this.template());
    },
});
var    WelcomeView = Parse.View.extend({
       template: Handlebars.compile($('#welcome-tpl').html()),
        render: function(){
            var attributes = this.model.toJSON();
            this.$el.html(this.template(attributes));
        }
    });

var loginView = new LoginView();
loginView.render();
$('.main-container').html(loginView.el);


var AddBlogView = Parse.View.extend({
    template: Handlebars.compile($('#add-tpl').html()),
    render: function(){
        this.$el.html(this.template());
    }
});

$('.add-blog').on('click', function(){
    add: function(){
        var addBlogView = new AddBlogView();
        addBlogView.render();
        $('.main-container').html(addBlogView.el);
    }
    // function
});
