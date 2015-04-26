angular.module('parity', [])
    .controller('ParityCtrl', function($log, $scope) {

        // global attrs
        var margin, width, height, svg;

        // draws the X axis using D3
        function xAxis() {
            $log.debug('x axis');
            var scale = d3.scale.linear()
                .domain([0,9])
                .range([0,width]);
            var axis = d3.svg.axis()
                    .orient('bottom')
                    .scale(scale)
                    .ticks(10);
            svg.append('g')
                .attr('class', 'x axis')
                .attr('transform', 'translate(0,'+height+')')
                .call(axis);
        }

        // draws nothing for now.
        function yAxis() {
            $log.debug('y axis');
            var scale = d3.scale.linear()
                .domain([0,9])
                .range([0, height]);
            var axis = d3.svg.axis()
                .orient('left')
                .scale(scale)
                .ticks(10);
            svg.append('g')
                .attr('class', 'y axis')
                .call(axis);
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
            margin = {top: 20, right: 20, bottom: 30, left: 40};
            height = 500 - margin.top - margin.bottom;
            width = 960 - margin.left - margin.right;
            svg = d3.select("#game")
                .append("svg")
                .attr("class", "axis")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", 'translate(' + margin.left + ',' + margin.top + ')');
            // draw the grid
            grid();

            // Let's try to draw a circle on click
            d3.select('#game').on('click', function(d, i) {
                $log.debug('clicked d,i=' + d +','+i);
                $log.debug('mouse:' + angular.toJson(d3.mouse(svg)));
            });
        }
        // set things up.
        init();
    });
