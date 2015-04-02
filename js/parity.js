angular.module('parity', [])
    .controller('ParityCtrl', function($log, $scope) {

        // global attrs
        var width, height, svg;

        // draws the X axis using D3
        function xAxis() {
            $log.debug('x axis');
            var scale = d3.scale.linear()
                .domain([0,9])
                .range([0,width]);
            var axis = d3.svg.axis()
                .scale(scale)
                .ticks(10);
            svg.call(axis);
        }

        // drwas nothing for now.
        function yAxis() {
            $log.debug('y axis');
            var scale = d3.scale.linear()
                .domain([0,9])
                .range([0, height]);
            var axis = d3.svg.axis()
                .orient('left')
                .scale(scale)
                .ticks(10);
            svg.call(axis);
        }

        // draws the grid where nodes and edges will be placed.
        function grid() {
            $log.debug('grid');
            xAxis();
            yAxis();
        }

        // initializes the svg elem and anything else that needs to be
        // initialized.
        function init() {
            $log.debug('init');
            height = 500;
            width = 600;
            svg = d3.select("#game")
                .append("svg")
                .attr("class", "axis")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(0,30)");
            grid();
        }

        // set things up.
        init()
    });
