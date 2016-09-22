$(function() {
        $("img").mouseenter(function() {
            var
                self = this,
                clone = self.__clone = self.__clone || $(self).clone(false);
 
            $(self).before(clone);
 
            clone.css({position: "absolute", "z-index": 9000}).stop().animate({
                width: "400px",
                marginLeft: "-100px"
            },{
                duration: 100
            }).mouseleave(function() {
                clone.stop().animate({
                    width: "100px",
                    marginLeft: "0px"
                }, {
                    duration: 80,
                    complete: function() {
                        $(this).remove();
                        self.__clone = null;
                    }
                });
            });
        });
    });
