var notification_count=0;

$(document).on('pageinit', function() {

	$('#messageButton').on('click', function() {
		createMessage();
	});

	$('#dialogButton').on('click', function() {
		createDialog();
	});


	$('#notificationButton').on('click', function() {
		createNotification();
	});


});



function createMessage(){
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: "This displays for 5 seconds.", duration: 5000});
		new Toast({content: "This displays for 3 seconds.", duration: 3000});
}


function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example

	navigator.notification.confirm(
    	"Are you Hungry?",  // message
        dialogDismissed,         // callback
        "Nana Visitor",            // title
        ['Yes!', 'No']                  // buttons
    );

}



function dialogDismissed(buttonIndex) {

	if(buttonIndex==1){
		new Toast({content: "Take a break and eat a plate of Vegan food!", duration: 4000});
		var currentTime = new Date().getTime(); //current time
    var notificationTime = new Date(currentTime + 40000); //delayed time  - add 1 second
 		cordova.plugins.notification.local.schedule({
 		id: 		1,
 			title: 		"Hewoo",
 			message: 	"Eat all zee food!",
 			date: 		notificationTime,
 			badge: 		notification_count++
 		});
	 }
   	else if(buttonIndex==2) new Toast({content: "What's wrong with you!?", duration: 4000});

}



function createNotification() {

	//
    //generate a time to post notification
    //
    var currentTime = new Date().getTime(); //current time
    var notificationTime = new Date(currentTime + 4000); //delayed time  - add 1 second

    //
    //setup notification
    //

    cordova.plugins.notification.local.schedule({
    	id: 		1,
        title: 		"Hii",
        message: 	"Building a new Vulcan",
        date: 		notificationTime,
        badge: 		notification_count++
   	});

}
