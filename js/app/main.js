require([ "raphael", "jquery"], function (Raphael, $) {

    var offset = {top: 0, left: 0};
    $(document).ready(function () {

        var paper = Raphael($("#me")[0], 512, 512);
        console.log(paper);
        var offset = $('#me').position();
        console.log(offset);
        var r = 5;

        for (i = 0, L = me.length; i < L; i++) {
            var c = me[i].c.split("|");
            r = parseInt(c[0]) + parseInt(c[1]) + parseInt(c[2]);
            r = r < 200 ? 7 : r < 350 ? 6 : 5;
            var rgb = "rgb(".concat(c[0], ",", c[1], ",", c[2], ")");
            //console.log(rgb);
            //console.log(me[i].x + " " + me[i].y + " " + me[i].c);
            //console.log(me[i]);
            paper.circle(me[i].l, me[i].t, r)
                .attr({"stroke-width": 0, "fill": rgb, "stroke": rgb})
                .data({ox: me[i].l, oy: me[i].t})
                .mouseover(function(ev){
                    //console.log(ev);
                    cx = Math.floor(Math.random() * (ev.pageX - offset.left - this.attr("cx")) * -6) + this.attr("cx");
                    cy = Math.floor(Math.random() * (ev.pageY - offset.top - this.attr("cy")) * -6) + this.attr("cy");
                    var dist = {
                        cx: cx,
                        cy: cy
                    }
                    //console.log("x: " + ev.pageX + " " + offset.left + " " + this.attr("cx") + " " + cx);
                    //console.log("y: " + ev.pageY + " " + offset.top + " " + this.attr("cy") + " " + cy);
                    this.stop().animate(dist, 1234, "elastic", function () {
                        //console.log("animate " + this.data("ox") + " " + this.data("oy"));
                        this.stop().animate({cx: this.data("ox"), cy: this.data("oy")}, 4321);
                    });
                });
        }
    });
});
