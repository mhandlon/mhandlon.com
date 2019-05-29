require([ "raphael", "jquery"], function (Raphael, $) {

    var paper = Raphael($("#me")[0], 512, 512);
    console.log(paper);
    //var offset = {top:0, left:0};
    var offset = $('#me').position();
    console.log(offset);

    var r = 5;

    for (i = 0, L = me.length; i < L; i++) {
        var c = me[i].c.split("|");
        //r = parseInt(c[0]) + parseInt(c[1]) + parseInt(c[2]);
        //r = r < 200 ? 7 : r < 350 ? 6 : 5;
        var rgb = "rgb(".concat(c[0], ",", c[1], ",", c[2], ")");
        //console.log(rgb);
        //console.log(me[i].x + " " + me[i].y + " " + me[i].c);
        paper.circle(me[i].x, me[i].y, r)
            .attr({"stroke-width": 0, "fill": rgb, "stroke": rgb})
            .data({ox: me[i].x, oy: me[i].y})
            .mouseover(function (ev) {
                    var dist = {
                        cx: Math.floor(Math.random() * (ev.pageX - offset.left - this.attr("cx")) * -5) + this.attr("cx"),
                        cy: Math.floor(Math.random() * (ev.pageY - offset.top - this.attr("cy")) * -5) + this.attr("cy")
                    }
                    this.stop().animate(dist, 1234, "elastic", function () {
                        this.stop().animate({cx: this.data("ox"), cy: this.data("oy")}, 4321);
                    });
                });
    }
});
