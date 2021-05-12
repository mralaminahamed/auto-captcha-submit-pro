/*@ts-ignore*/
window.fbAsyncInit = function() {
    /*@ts-ignore*/
    FB.init({
        appId      : '{your-app-id}',
        cookie     : true,
        xfbml      : true,
        version    : '{api-version}'
    });
    /*@ts-ignore*/
    FB.AppEvents.logPageView();

};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    /*@ts-ignore*/
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    /*@ts-ignore*/
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


/*@ts-ignore*/
FB.getLoginStatus(function(response) {
    /*@ts-ignore*/
    statusChangeCallback(response);
});


/*{
    status: 'connected',
        authResponse: {
    accessToken: '...',
        expiresIn:'...',
        signedRequest:'...',
        userID:'...'
}
}*/

/*@ts-ignore*/
function checkLoginState() {
    /*@ts-ignore*/
    FB.getLoginStatus(function(response) {
        /*@ts-ignore*/
        statusChangeCallback(response);
    });
}