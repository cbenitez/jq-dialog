$.fn.jqDialog = function (arguments) {

    $(".jq-dialog").remove();
    $(".jq-dialog-overlay").remove();

    var $element = $(this);

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

    var $jq_dialog = $(`<div class="jq-dialog" role="tooltip"></div>`);
    var $overlay = $(`<div class="jq-dialog-overlay"></div>`);

    var attributes = $.extend(defaults, arguments);

    function raise(runCallback, identifier) {
        $overlay.fadeOut(100);
        $jq_dialog.fadeOut(attributes.speed, attributes.easing, function () {
            if (runCallback) {
                attributes.callback(identifier !== null ? $element.data(identifier) : "");
            }
        });
    }

    var $title = $(`<h3 class="jq-dialog-header">${attributes.title}</h3>`);
    var $message = $(`<div class="jq-dialog-body">${attributes.message}</div>`);
    
    if ( attributes.close ) {
        var $close = $(`<span class="jq-dialog-close"></span>`);
        $title.append( $close );
        
        $close.click(function () {
            $jq_dialog.fadeOut(attributes.speed, attributes.easing, function () {
                raise(true, null);
            });
        });
    }

    $jq_dialog.append( $title );

    if ( attributes.html ) {
        $message.html( attributes.message );
    } else {
        $message.text( attributes.message );
    }

    $jq_dialog.append( $message );
    $element.append( $jq_dialog );
    
    $jq_dialog.fadeIn(attributes.speed, attributes.easing);

    if (attributes.overlay) {

        $element.append($overlay);
    }

    if ( attributes.confirm ) {
        var $acceptBtnText = $(`<button type="button" class="btn btn-success accept-btn-func">${attributes.acceptBtnText}</button>`);
        var $cancelBtnText = $(`<button type="button" class="btn btn-danger cancel-btn-func">${attributes.cancelBtnText}</button>`);

        $jq_dialog.append( $acceptBtnText );
        $jq_dialog.append( $cancelBtnText );
        
        $element.data("dialogConfirm", null);
        
        $acceptBtnText.click(function () {
            $jq_dialog.fadeOut(attributes.speed, attributes.easing, function () {
                $element.data("dialogConfirm", true);
                raise(true, "dialogConfirm");
            });
        });
        
        $cancelBtnText.click(function () {
            $jq_dialog.fadeOut(attributes.speed, attributes.easing, function(){
                $element.data("dialogConfirm", false);
                raise(true, "dialogConfirm");
            });
        });
    }
    
    if ( attributes.callback && !attributes.confirm ){
        $close.click(function () {
            $jq_dialog.fadeOut(attributes.speed, attributes.easing, function () {
                $element.data("dialogConfirm", true);
                raise(true, "dialogConfirm");
            });
        });
    }

}