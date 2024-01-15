function blockTawkTo() {
    var tawkToScripts = document.querySelectorAll('script[src*="tawk.to"]');
    tawkToScripts.forEach(function (script) {
        script.remove();
    });
    var twkScripts = document.querySelectorAll('script[src*="twk-"]');
    twkScripts.forEach(function (script) {
        script.remove();
    });
    var elementsWithTawkClasses = document.querySelectorAll('[class*="tawk"]');
    elementsWithTawkClasses.forEach(function (element) {
        element.remove();
    });
    var iframes = document.querySelectorAll('iframe[title="chat widget"]');
    iframes.forEach(function (iframe) {
        iframe.remove();
    });
}

function observeDOM() {
    var targetNode = document.body;
    var observerOptions = {
        childList: true,
        subtree: true,
    };
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                setTimeout(blockTawkTo, 500);
            }
        });
    });
    observer.observe(targetNode, observerOptions);
}

window.addEventListener('load', function () {
    observeDOM();
});