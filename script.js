$(function () {
    $(".slider").each(function () {
        var begin = $(this).data("begin"),
            end = $(this).data("end");
        $(this).slider({
            range: "min",
            min: begin,
            max: end,
            animate: true,
            slide: function (event, ui) {
                //update text box quantity
                var slideramount = ("#" + $(this).attr("id") + "_amount");
                $(slideramount).val(ui.value);
            }
        });
       
        var slideramount = ("#" + $(this).attr("id") + "_amount");
        $(slideramount).val($(this).slider("value"));

    });
    
    $('[name="[temperature]"]').change(function () {
        var value = this.value;
        $('#temperature').slider("value", value);
    });

});