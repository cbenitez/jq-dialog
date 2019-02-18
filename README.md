# Top Alertjs

* * *

## Requirements

*   JQuery 3.3.1 
*   Bootstrap 4.2.1 (Optional)
*   JQuery UI 1.12.1 (Optional)

* * *

## Use mode

`$(selector).jqDialog(options);`

* * *

## Default parameters

<pre>
var defaults = {
    title: "Title dialog",
    message: "And here's some amazing content. It's very engaging. Right?",
    duration: 5,
    speed: 500,
    easing: "swing",
    close: true,
    confirm: false,
    acceptBtnText: "Accept",
    cancelBtnText: "Cancel",
    html: false,
    overlay: false,
    callback: function () { }
}; 
</pre>

* * *

## Examples

*   [Example]

    <pre>
    $('body').jqDialog({
        html: true,
        overlay: true,
        confirm:true,
        callback: function (confirm) { if (confirm) alert('Ok'); }
    });
    </pre>

* * *