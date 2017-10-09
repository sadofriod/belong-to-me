var _this;
var flag = 0;

jQuery(document).ready(function() {
	var height;
	var width;
	jQuery('.carousel').Carousel({
		carouselId: '.itemBox', //轮播项目外层盒子的class或者ID
		carouselItem: '.carouselItem', //轮播项目的class
		autoCarousel: true, //是否自动轮播
		autoCarouselTime: 6000, //自动轮播间隔
		tabCarouselItemTime: 2000, //切换动画的时间
		carouselHeight: 0.3 //轮播项目高度 最高为1最小为0
	})
	mui.plusReady(function() {
		height = plus.display.resolutionHeight;
		width = plus.display.resolutionWidth;
		jQuery('#navBox').height(height * 0.618);
		jQuery('.preview').height(height)
		jQuery('#moreInfo').height(height)
		//	var topHeight = jQuery('#topBox').height();
		//	topHeight = parseInt(topHeight);
		//	var navButtonHeight = jQuery('#navButton').height();
		//	navButtonHeight = parseInt(navButtonHeight);
		//	alert(topHeight+"  "+navButtonHeight)
		//	jQuery('#contentBox').height(topHeight-navButtonHeight);
		var buttonWidth = jQuery('#joinUs').width();
		buttonWidth = parseInt(buttonWidth);
		var buttonPadding = jQuery('#joinUs').css('padding-left');
		buttonPadding = parseInt(buttonPadding);
		buttonPadding *= 2;
		buttonWidth += buttonPadding;
		var bottomWidth = jQuery('#bottomBox').width();
		bottomWidth = parseInt(bottomWidth);
		jQuery('#joinUs').css('margin-left', (bottomWidth - buttonWidth) * 0.5);

		jQuery('#navButton > div').click(function(e) {
			jQuery('#navBox').fadeIn(400, function() {
				jQuery('.navItem').fadeIn(600);
				jQuery('.item1').animate({
					top: '19%'
				}, 600);
				jQuery('.item2').animate({
					left: '18%',
					bottom: '22%'
				}, 600);
				jQuery('.item3').animate({
					right: '18%',
					bottom: '22%'
				}, 600);
			})
		})
		jQuery('.close').click(function(e) {

			jQuery('.item1').animate({
				top: '6%'
			}, 400);
			jQuery('.item2').animate({
				left: '5%',
				bottom: '5%'
			}, 400);
			jQuery('.item3').animate({
				right: '5%',
				bottom: '5%'
			}, 400);
			jQuery(this).parent().fadeOut(400)
		})
		jQuery('.close').width(jQuery('.close').height())
		jQuery('.navItem').hide();
		var flag = 1; //分页切换标志
		jQuery('#contentBox > a').click(function(e) {
			jQuery('#topBox').addClass('clickAnimate');
			jQuery('#bottomBox').addClass('clickAnimate1');
			jQuery('#topBox').animate({
				top: "-61.8%"
			}, 600)
			jQuery('#bottomBox').animate({
				bottom: "-38.2%"
			}, 350)
			setTimeout(function() {

				jQuery('#topBox').hide(600, function() {
					jQuery(this).removeClass('clickAnimate')
				});
				jQuery('#bottomBox').hide(600, function() {
					jQuery(this).removeClass('clickAnimate1')
				});
				jQuery('.preview').hide()
				jQuery('#moreInfo').show()
				flag = 0;
			}, 600)
		})
		jQuery('.backIndex').click(function() {
			jQuery('.preview').css('display', 'block')
			if(flag == 0) {
				jQuery('#topBox').addClass('clickAnimate');
				jQuery('#bottomBox').addClass('clickAnimate1');
				jQuery('#topBox').show();
				jQuery('#bottomBox').show();
				jQuery('#topBox').animate({
					top: "0px"
				}, 600)
				jQuery('#bottomBox').animate({
					bottom: "0px"
				}, 450)
				setTimeout(function() {
					jQuery('#topBox').removeClass('clickAnimate');
					jQuery('#bottomBox').removeClass('clickAnimate1');
					jQuery('#moreInfo').hide()
				}, 600)
			}
		})
		jQuery('.itemText').width(width - 80)
		var flag1 = 1; //样式切换标志
		var info = jQuery('.infoItem');
		jQuery('.closeInfo').click(function() {
			info = jQuery(this).parent()
			if(flag1 == 0) {
				info.css({
					position: 'static',

					overflowY: 'hidden'
				})
				info.animate({
					height: '80px'
				}, 200)
				info.find('p').removeClass('itemTextOpen');
				info.find('img').removeClass('itemtImgOpen')
				info.find('div').removeClass('closeInfoOpen')
				info.find('div').html('')
			}
		})

		info.click(function(e) {
			if(jQuery(this).height() == 80) {
				jQuery(this).css({
					position: 'relative ',
					overflowY: 'auto',
					padding: '0px'
				})
				jQuery(this).animate({
					height: height * 0.8
				}, 200)
				jQuery(this).find('p').addClass('itemTextOpen');
				jQuery(this).find('img').addClass('itemtImgOpen')
				jQuery(this).find('div').addClass('closeInfoOpen')
				jQuery(this).find('div').html('close')
				setTimeout(function() {
					flag1 = 0;
				}, 200)
			}
		})
		jQuery('#joinUs').click(function() {

			jQuery('.joinUsTableBox').fadeIn(400);
			jQuery('.joinUsTableBox').children().fadeIn(400)
		})
		jQuery('#cancel').click(function() {
			jQuery(this).parent().fadeOut(400, function() {
				jQuery('.joinUsTableBox').css('display', 'none')
			})
		})
		var txt; //输入框判断值
		jQuery('.userInfo').click(function() {
			txt = jQuery(this).val()
			if(jQuery(this).val() == txt) {
				jQuery(this).val(null)
			}
		})
		jQuery('.navItem').click(function(e) {
			jQuery(this).parent().hide()
			jQuery('.itemContext').show(300);
		})
		console.log(jQuery('#joinUs').offset().left);
	})
})