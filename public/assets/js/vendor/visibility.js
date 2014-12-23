/**
 * Created by ThomasJensen on 23/12/14.
 */
(function() {
    'use strict';

    // Set the name of the "hidden" property and the change event for visibility
    var hidden, visibilityChange;
    if (typeof document.hidden !== "undefined") {
        hidden = "hidden";
        visibilityChange = "visibilitychange";
    } else if (typeof document.mozHidden !== "undefined") { // Firefox up to v17
        hidden = "mozHidden";
        visibilityChange = "mozvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") { // Chrome up to v32, Android up to v4.4, Blackberry up to v10
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
    }

    var videoElement = document.getElementById("videoElement");

    // If the page is hidden, pause the video;
    // if the page is shown, play the video
    function handleVisibilityChange() {
        if (document[hidden]) {
            videoElement.pause();
        } else {
            videoElement.play();
        }
    }

    // Warn if the browser doesn't support addEventListener or the Page Visibility API
    if (typeof document.addEventListener === "undefined" || typeof document[hidden] === "undefined") {
        alert("This demo requires a modern browser that supports the Page Visibility API.");
    } else {
        // Handle page visibility change
        document.addEventListener(visibilityChange, handleVisibilityChange, false);
    }

})();