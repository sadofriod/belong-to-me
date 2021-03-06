(function($) { //创建一个闭包

	$.fn.extend({

		Carousel: function(options) { //插件定义
			var height = $(window).height();
			var width = $(window).width();
			var defaultsSetSpace = { //命名空间
				carouselId: '.itemBox',
				carouselItem: '.carouselItem',
				autoCarousel: false,
				autoCarouselTime: 3000,
				tabCarouselItemTime: 1500,
				carouselHeight: 0.80
			};
			var opts = $.extend(defaultsSetSpace, options); //迭代和格式化每个匹配的元素 
			var carouselId = defaultsSetSpace.carouselId;
			var carouselItem = defaultsSetSpace.carouselItem;
			var autoCarousel = defaultsSetSpace.autoCarousel;
			var autoCarouselTime = defaultsSetSpace.autoCarouselTime;
			var tabCarouselItemTime = defaultsSetSpace.tabCarouselItemTime;
			var carouselHeight = defaultsSetSpace.carouselHeight;
			$(carouselItem).css('height', height * carouselHeight);
			$('.carousel_control').css('line-height', carouselHeight * 100 + '%')
			var i = 0;
			//轮播控制
			if(autoCarousel) { //如果autoCarousel为ture执行自动轮播
				setInterval(function() {
					if(i + 1 < $(carouselId).children().length) { //轮播盒子的子元素个数
						if(i == 0) {
							$(carouselId).find('div').eq(0).css('display', 'none'); //轮播盒子中，为DIV的子元素被设置为不可见
							$(carouselId).find('div').eq(i + 1).fadeIn(tabCarouselItemTime);
						} else {
							$(carouselId).find('div').eq(i).css('display', 'none')
							$(carouselId).find('div').eq(i + 1).fadeIn(tabCarouselItemTime);
						}
						i++;
					} else {
						$(carouselId).find('div').eq(i).css('display', 'none');
						i = 0;
						$(carouselId).find('div').eq(i).fadeIn(tabCarouselItemTime);
					}
				}, autoCarouselTime)
			}

			$('.right').click(function() {
				if(i + 1 < $(carouselId).children().length) {
					if(i == 0) {
						$($(carouselId).children()[i]).css('display', 'none');
						$($(carouselId).children()[i + 1]).fadeIn(tabCarouselItemTime);
					} else {
						$($(carouselId).children()[i]).css('display', 'none')
						$($(carouselId).children()[i + 1]).fadeIn(tabCarouselItemTime);
					}
					i++;
				} else {
					$($(carouselId).children()[i]).css('display', 'none');
					i = 0;
					$($(carouselId).children()[i]).fadeIn(tabCarouselItemTime);
				}

			})
			$('.left').click(function() {
				if(i > 0) {
					$($(carouselId).children()[i]).css('display', 'none')
					$($(carouselId).children()[i - 1]).fadeIn(tabCarouselItemTime);
					i--;
				} else if(i == 0) {
					$($(carouselId).children()[i]).css('display', 'none');
					var end = $(carouselId).children().length;
					end -= 1;
					$($(carouselId).children()[i]).fadeIn(tabCarouselItemTime);
					i = end;
				}
			})
		}

	})

})(jQuery);