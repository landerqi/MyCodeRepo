const http = require('http');
const cheerio = require('cheerio');

const url = 'http://www.imooc.com/learn/348';

function filterChapters(html) {
	let $ = cheerio.load(html);
	let chapters = $('.chapter');

	let courseData = [];
		//console.log(chapters);

	chapters.each(function(t) {
		let chapter = $(this);
		let chapterTitle = chapter.find('strong').text();
		let videos = chapter.find('.video').children('li');
		let chapterData = {
			chapterTitle: chapterTitle,
			videos: []
		}

		videos.each(function(t) {
			let video = $(this).find('.J-media-item');
			let videoTitle = video.text();
			let id = video.attr('href').split('video/')[1];

			chapterData.videos.push({
				title: videoTitle,
				id: id
			})
		})

		courseData.push(chapterData);
	})

	return courseData;
}

function printCourseInfo(courseData) {
	courseData.forEach((t) => {
		let chapterTitle = t.chapterTitle;
		console.log(chapterTitle.trim() + '\n');

		t.videos.forEach((video) => {
			console.log(' [' + video.id + ']' + video.title.trim() + '\n');
		});
	})
}

http.get(url, function(res) {
	let html = '';

	res.on('data', function(data) {
		html += data;
	})

	res.on('end', function() {
		let courseData = filterChapters(html);

		printCourseInfo(courseData);
	})
}).on('error', function() {
	console.log('获取数据出错');
})
