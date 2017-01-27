import jQuery from 'jquery';
import * as d3 from 'd3';
// import _ from 'underscore';

// export for others scripts to use
window.$ = jQuery;
window.jQuery = jQuery;

// const siza = '';
// const vname = 'nome';
// const color = 'time';


function load(a) {
	const svg = d3.selectAll('#chart').append('svg')
		.attr('width', 800)
		.attr('height', 800);
	console.log(a);

	svg.selectAll('circle').data(a)
		.enter().append('circle')
		.attr('fill', '#0f0')
		.attr('r', '3px')
		.attr('cx', d => (d.id));

	d3.forceCenter([300, 300]);

	d3.forceSimulation();
}

$(document).ready(() => {
	const interval = setInterval(() => {
		if (document.readyState === 'complete') {
			$('.loading').hide();
			$('.no-scroll').removeClass('no-scroll');
			clearInterval(interval);
		}
	}, 100);

	const url = 'https://spreadsheets.google.com/feeds/list/1z3KFpyECed4U03L4gHqQLtNjspI0uCPft4t7gyHNWf8/1/public/values?alt=json';

	d3.json(url, (err, data) => {
		const allGames = [];
		$(data.feed.entry).each((index, el) => {
			const game = {
				id: index,
				score: el.gsx$score.$t,
			};
			allGames.push(game);
		});
		load(allGames);
		window.games = allGames;
	});

});

