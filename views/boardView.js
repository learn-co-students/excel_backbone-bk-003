// BoardView = Backbone.View.extend({
//     tagName: "table",
//     initialize: function() {
//         this.render()
//     },
//     render: function() {
//         var $tbody = $('<tbody><tr><td>@</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td></tr></tbody>')
//         this.model.cells = [
//             []
//         ]
//         for (var i = 0; i < 5; i++) {
//             this.model.cells.push([])
//             $tr = $('<tr><td>' + (i + 1) + '</td></tr>')
//             for (var j = 0; j < 5; j++) {
//                 var $td = $('<td><input id=' + String.fromCharCode(j + 65) + (i + 1) + '></td>')
//                 debugger
//                 var cellView = new CellView({
//                     el: $td,
//                     model: new Cell()

//                 })
//                 this.model.cells[i + 1].push(cellView)
//                 $tr.append($td)
//             }
//             $tbody.append($tr)
//         }
//         this.$el.append($tbody)
//         return this
//     }
// })



BoardView = Backbone.View.extend({
    initialize: function() {
        this.render();
    },
    tagName: "table",
    render: function() {
        this.model.cells = [
            []
        ]
        var $table = $('<tbody><tr><td>@</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td></tr></tbody>')
        for (var i = 0; i < 5; i++) {
            this.model.cells.push([])
            $tr = $("<tr><td>" + (i + 1) + "</td></tr>")
            for (var j = 0; j < 5; j++) {
                var $td = $('<td><input id =' + String.fromCharCode(j + 65) + (i + 1) + '></td>')
                var cellView = new CellView({
                    el: $td,
                    model: new Cell()
                })
                this.model.cells[i + 1].push(cellView)
                $tr.append($td)
            }

            $table.append($tr);

        };
                

        this.$el.append($table);
        return this;
    }
})