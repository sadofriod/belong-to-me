mui('.mui-scroll-wrapper').scroll({
	indicators: false //是否显示滚动条
});
var sliderSegmentedControl = document.getElementById('sliderSegmentedControl');
mui('.mui-input-group').on('change', 'input', function() {
	if(this.checked) {
		sliderSegmentedControl.className = 'mui-slider-indicator mui-segmented-control mui-segmented-control-inverted mui-segmented-control-' + this.value;
		//force repaint
		sliderProgressBar.setAttribute('style', sliderProgressBar.getAttribute('style'));
	}
});
jQuery('userhead').click(function() {
	mui.openWindow({
		url: 'chat.html',
		id: 'chat.html'
	})
})
var vm = new Vue({
	el: '#active',
	data: {
		card: [{
				username: '柳舒眉',
				time: '2017-06-30 17:32',
				dp: '有人想来参加话剧团吗?释放内心的自己展现自己',
				people: '123',
				join: '10',
				flag: 0,
				isShow: false,
				isChildShow: false,
				time1: 90,
				hide: 'block',
				src: 'images/basketball.jpg',
				activetime: '周六8:30-9:30',
				place: '学校剧场',
			},
			{
				username: '小雯',
				time: '2017-06-30 14:32',
				dp: '在内蒙古工业大学金川校区的网球活动，来人呐！',
				people: '808',
				join: '3',
				flag: 0,
				isShow: false,
				isChildShow: false,
				time1: 70,
				hide: 'block',
				src: 'img/timg.jpg',
				activetime: '周六9:20-10:10',
				place: '学校网球场',
			},
			{
				username: '罗辑',
				time: '2017-06-30 16:32',
				dp: '在内蒙古工业大学金川校区的网球活动，来人呐！',
				people: '7088',
				join: '7',
				flag: 0,
				isShow: false,
				isChildShow: false,
				time1: 50,
				hide: 'block',
				src: 'img/girl.png',
				activetime: '周六11:30-13:30',
				place: '学校网球场',
			},
			{
				username: '亮亮',
				time: '2017-06-30 18:32',
				dp: '好无聊啊，你们有什么活动加我一个哇！！！！！',
				people: '890',
				join: '6',
				flag: 0,
				isShow: false,
				isChildShow: false,
				time1: 20,
				hide: 'block',
				src: 'img/122.png',
				activetime: '周六11:00-11:30',
				place: '暂定',
			},
			{
				username: '晶静',
				time: '2017-09-30 17:30',
				dp: '有没有人想来参加一个diy的活动：）相当有意思的',
				people: '787',
				join: '8',
				flag: 0,
				isShow: false,
				isChildShow: false,
				time1: 90,
				hide: 'block',
				src: 'img/123.png',
				activetime: '周六11:00-11:30',
				place: '学校活动室',
			},
			{
				username: '漆黑的夜',
				time: '2017-11-30 17:32',
				dp: '有人来踢足球吗? 友谊球赛',
				people: '12234',
				join: '6',
				flag: 0,
				isShow: false,
				isChildShow: false,
				time1: 50,
				hide: 'block',
				src: 'img/1230.png',
				activetime: '周六10:30-11:30',
				place: '学校球场',
			},
		]
	},
	methods: {
		open: function(index) {
			var card = this.card;
			if(this.card[index].isShow == false) {
				this.card[index].isShow = true;
				setTimeout(function(index, that) {
					that.card[index].isChildShow = true;
				}, 98, index, this);
			} else {
				this.card[index].isChildShow = false;
				this.card[index].isShow = false;
			}

		},
		addPeople: function(index) {
			var card = this.card;
			var flag = card[index].flag;
			card[index].join = parseInt(card[index].join) + 1;
			jQuery('#timeValue').height(jQuery('#timeValue').height() - card[index].time1 / 10)
			this.card[index].isShow = true;
			setTimeout(function(index, that) {
				that.card[index].hide = 'none';

			}, 200, index, this);
			card[index].flag = 1;
			jQuery(jQuery('#active2').find('.card-information')[index]).css('display', 'block');
			jQuery('#timeNum').html('-' + card[index].time1 / 10);
			jQuery('#timeNum').addClass('showTimeNum');
			setTimeout(function() {
				jQuery('#timeNum').removeClass('showTimeNum');
				jQuery('#timeNum').html('');
			}, 1000)
		},
		openWin: function(index) {
			mui.openWindow({
				url: 'detailed.html',
				id: 'detailed',
				extras: {
					dp: this.card[index].dp,
					picSrc: this.card[index].src,
					pic: '',
					name: this.card[index].username,
					time: this.card[index].time,
					activeTime: this.card[index].activetime,
					place: this.card[index].place,
					people: this.card[index].join
				}
			})
		}
	}
})
var vm1 = new Vue({
	el: '#active1',
	data: {
		card: [{
				username: '柳舒眉',
				time: '2017-06-30 17:32',
				dp: '有人想来参加话剧团吗?释放内心的自己展现自己',
				people: '123',
				join: '10',
				flag: 0,
				isShow: false,
				isChildShow: false,
				time1: 90,
				hide: 'block',
				src: 'images/basketball.jpg',
				activetime: '周六8:30-9:30',
				place: '学校剧场',
			},
			{
				username: '小雯',
				time: '2017-06-30 14:32',
				dp: '在内蒙古工业大学金川校区的网球活动，来人呐！',
				people: '808',
				join: '3',
				flag: 0,
				isShow: false,
				isChildShow: false,
				time1: 70,
				hide: 'block',
				src: 'img/timg.jpg',
				activetime: '周六9:20-10:10',
				place: '学校网球场',
			},
			{
				username: '罗辑',
				time: '2017-06-30 16:32',
				dp: '在内蒙古工业大学金川校区的网球活动，来人呐！',
				people: '7088',
				join: '7',
				flag: 0,
				isShow: false,
				isChildShow: false,
				time1: 50,
				hide: 'block',
				src: 'img/girl.png',
				activetime: '周六11:30-13:30',
				place: '学校网球场',
			},
			{
				username: '亮亮',
				time: '2017-06-30 18:32',
				dp: '好无聊啊，你们有什么活动加我一个哇！！！！！',
				people: '890',
				join: '6',
				flag: 0,
				isShow: false,
				isChildShow: false,
				time1: 20,
				hide: 'block',
				src: 'img/122.png',
				activetime: '周六11:00-11:30',
				place: '暂定',
			},
			{
				username: '晶静',
				time: '2017-09-30 17:30',
				dp: '有没有人想来参加一个diy的活动：）相当有意思的',
				people: '787',
				join: '8',
				flag: 0,
				isShow: false,
				isChildShow: false,
				time1: 90,
				hide: 'block',
				src: 'img/123.png',
				activetime: '周六11:00-11:30',
				place: '学校活动室',
			},
			{
				username: '漆黑的夜',
				time: '2017-11-30 17:32',
				dp: '有人来踢足球吗? 友谊球赛',
				people: '12234',
				join: '6',
				flag: 0,
				isShow: false,
				isChildShow: false,
				time1: 50,
				hide: 'block',
				src: 'img/1230.png',
				activetime: '周六10:30-11:30',
				place: '学校球场',
			},
		]
	},
	methods: {
		open: function(index) {
			var card = this.card;
			if(this.card[index].isShow == false) {
				this.card[index].isShow = true;
				console.log(this.card[index].isShow);
				setTimeout(function(index, that) {
					that.card[index].isChildShow = true;
				}, 98, index, this);
			} else {
				this.card[index].isChildShow = false;
				this.card[index].isShow = false;
			}

		},
		openWin: function(index) {
			mui.openWindow({
				url: 'detailed.html',
				id: 'detailed',
				extras: {
					dp: this.card[index].dp,
					picSrc: this.card[index].src,
					pic: '',
					name: this.card[index].username,
					time: this.card[index].time,
					activeTime: this.card[index].activetime,
					place: this.card[index].place,
					people: this.card[index].join
				}
			})
		}
	}
})
new Vue({
	el: '#active2',
	data: {
		card: [{
				username: '柳舒眉',
				time: '2017-06-30 17:32',
				dp: '有人想来参加话剧团吗?释放内心的自己展现自己',
				people: '123',
				join: '10',
				flag: 0,
				isShow: false,
				isChildShow: false,
				time1: 90,
				hide: 'block',
				src: 'images/basketball.jpg',
				activetime: '周六8:30-9:30',
				place: '学校剧场',
			},
			{
				username: '小雯',
				time: '2017-06-30 14:32',
				dp: '在内蒙古工业大学金川校区的网球活动，来人呐！',
				people: '808',
				join: '3',
				flag: 0,
				isShow: false,
				isChildShow: false,
				time1: 70,
				hide: 'block',
				src: 'img/timg.jpg',
				activetime: '周六9:20-10:10',
				place: '学校网球场',
			},
			{
				username: '罗辑',
				time: '2017-06-30 16:32',
				dp: '在内蒙古工业大学金川校区的网球活动，来人呐！',
				people: '7088',
				join: '7',
				flag: 0,
				isShow: false,
				isChildShow: false,
				time1: 50,
				hide: 'block',
				src: 'img/girl.png',
				activetime: '周六11:30-13:30',
				place: '学校网球场',
			},
			{
				username: '亮亮',
				time: '2017-06-30 18:32',
				dp: '好无聊啊，你们有什么活动加我一个哇！！！！！',
				people: '890',
				join: '6',
				flag: 0,
				isShow: false,
				isChildShow: false,
				time1: 20,
				hide: 'block',
				src: 'img/122.png',
				activetime: '周六11:00-11:30',
				place: '暂定',
			},
			{
				username: '晶静',
				time: '2017-09-30 17:30',
				dp: '有没有人想来参加一个diy的活动：）相当有意思的',
				people: '787',
				join: '8',
				flag: 0,
				isShow: false,
				isChildShow: false,
				time1: 90,
				hide: 'block',
				src: 'img/123.png',
				activetime: '周六11:00-11:30',
				place: '学校活动室',
			},
			{
				username: '漆黑的夜',
				time: '2017-11-30 17:32',
				dp: '有人来踢足球吗? 友谊球赛',
				people: '12234',
				join: '6',
				flag: 0,
				isShow: false,
				isChildShow: false,
				time1: 50,
				hide: 'block',
				src: 'img/1230.png',
				activetime: '周六10:30-11:30',
				place: '学校球场',
			},
		]
	},
	methods: {
		open: function(index) {
			var card = this.card;
			if(this.card[index].isShow == false) {
				this.card[index].isShow = true;
				setTimeout(function(index, that) {
					that.card[index].isChildShow = true;
				}, 98, index, this);
			} else {
				this.card[index].isChildShow = false;
				this.card[index].isShow = false;
			}

		},
		openWin: function(index) {
			mui.openWindow({
				url: 'detailed.html',
				id: 'detailed',
				extras: {
					dp: this.card[index].dp,
					picSrc: this.card[index].src,
					pic: '',
					name: this.card[index].username,
					time: this.card[index].time,
					activeTime: this.card[index].activetime,
					place: this.card[index].place,
					people: this.card[index].join
				}
			})
		}
	}
})