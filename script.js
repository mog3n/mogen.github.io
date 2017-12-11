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