var menuHidden = true;

function toggleMenu(){
    
    if (menuHidden){
        
        // Main menu appear
        $('#menu-popup').css('top', window.innerHeight + $('#menu-popup').innerHeight());
        $('#menu-popup').css('visibility', 'visible');
        $('#menu-popup').css('top', window.innerHeight - $('#menu-popup').innerHeight());
        // Background dim
        $('#menu-popup-bg').css('top', 0);
        $('#menu-popup-bg').css('visibility', 'visible');
        // Drop menu button
        $('#nav-btn').css('top', window.innerHeight + "px");
        
        menuHidden = false;
        
        /*
        // Animate menu appearing
        var menuTop = $(document).height() + $('#menu-popup').innerHeight(); //Height of window plus menu
        var animationTimeInMS = 1000;
        var framerate = 60;
        
        // The step size:: I map time/framerate over to the height of the object.
        var step_size = $('#menu-popup').innerHeight() / (animationTimeInMS/framerate);
        var amount_of_steps = (animationTimeInMS/framerate);
        var current_steps = 0;
        var animationHeight = 0; // Stores the delta (in px)
        
        var menuAnimation = setInterval(function(){
            
            if(current_steps < amount_of_steps){
                animationHeight = step_size * current_steps;
                $('#menu-popup').css('top', menuTop-animationHeight + 'px');
                $('#menu-popup').css('visibility', 'visible');
                current_steps += 1;
                
                console.log($('#nav-btn').innerHeight(), step_size, amount_of_steps, current_steps, animationHeight);
            }else{
                clearInterval(menuAnimation);
            }
            
        }, (1000/framerate)); //60 fps
        
        menuHidden = false;
        */
        
    }else{
        // Drop menu
        $('#menu-popup').css('top', window.innerHeight + $('#menu-popup').innerHeight());
        // Drop background
        $('#menu-popup-bg').css('top', window.innerHeight + $('#menu-popup-bg').innerHeight());
        // Show menu button
        updateMenuPos();
        
        menuHidden = true;
        
    }
    
}

function updateMenuPos(){
    var width = window.innerWidth;
    var height = window.innerHeight;

    var nav_btn_width = $('#nav-btn').innerWidth();
    var nav_btn_height = $('#nav-btn').innerHeight();

    var top = (height - nav_btn_height - 70);
    var left = (width - nav_btn_width) / 2;
    console.log(top, left);
    
    // Update the position of the 'Quick Menu' button
    $('#nav-btn').css('top', top + "px");
    $('#nav-btn').css('left', left + "px");
}

$(window).resize(function(){
    updateMenuPos();
    $('#menu-popup').css('top', $(window).height() + $('#menu-popup').innerHeight());
    $('#menu-popup-bg').css('top', $(window).height() + $('#menu-popup-bg').innerHeight());
})

$('#nav-btn').click(function(){
    // When the floating 'Quick Menu' is pressed
    toggleMenu();
});
$('#menu-popup-bg').click(function(){
    toggleMenu();
});

$('#menu-popup-close').click(function(){
    toggleMenu();
});

// Set menu popup to bottom
$('#menu-popup-bg').css('top', $(window).height() + $('#menu-popup-bg').innerHeight());
updateMenuPos()

// Get the day of the week
var myDate = new Date();
// UTC -> EST
console.log(myDate.getHours());
//myDate.setHours(myDate.getHours() - 5);
date_to_obj = {0: "day-sun", 1: "day-mon", 2: "day-tue", 3: "day-wed", 4: "day-thur", 5: "day-fri", 6: "day-sat"}
day_to_str = {0: "Sunday", 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday"}
time_to_obj = {0: "time-sun", 1: "time-mon", 2: "time-tue", 3: "time-wed", 4: "time-thur", 5: "time-fri", 6: "time-sat"}
day_to_emoji = {
    0 : '<img src="emojis/fork_and_knife.png" style="width:60px;"><img src="emojis/food-happy.png" style="width:60px;">',
    1 : '<img src="emojis/fork_and_knife.png" style="width:60px;"><img src="emojis/food-happy.png" style="width:60px;">',
    2 : '<img src="emojis/less-happy.png" style="width:60px;">', // <img src="emojis/less-happy.png" style="width:60px;">
    3 : '<img src="emojis/fork_and_knife.png" style="width:60px;"><img src="emojis/food-happy.png" style="width:60px;">',
    4 : '<img src="emojis/fork_and_knife.png" style="width:60px;"><img src="emojis/food-happy.png" style="width:60px;">',
    5 : '<img src="emojis/fork_and_knife.png" style="width:60px;"><img src="emojis/food-happy.png" style="width:60px;">',
    6 : '<img src="emojis/fork_and_knife.png" style="width:60px;"><img src="emojis/food-happy.png" style="width:60px;">'
};
// "Sorry, We're closed today. (Treat yourself to something nice!)"
day_to_description = {
    0 : "We're open from <b>9:00am to 10:00pm</b> today.",
    1 : "We're open from <b>10:00am to 9:00pm</b> today.",
    2 : "Sorry, we're closed today.",
    3 : "We're open from <b>10:00am to 9:00pm</b> today.",
    4 : "We're open from <b>10:00am to 9:00pm</b> today.",
    5 : "We're open from <b>10:00am to 9:00pm</b> today.",
    6 : "We're open from <b>9:00am to 10:00pm</b> today."
}

// Set appropriate object
$('#' + date_to_obj[myDate.getDay()]).css('color', '#f47d42');
$('#' + time_to_obj[myDate.getDay()]).css('color', '#f47d42');

$('#dynamic-emoji').html(day_to_emoji[myDate.getDay()])
$('#dynamic-day').html('Happy ' + day_to_str[myDate.getDay()] + '!');
$('#dynamic-text').html(day_to_description[myDate.getDay()]);

$('body').css('visibility', 'visible');