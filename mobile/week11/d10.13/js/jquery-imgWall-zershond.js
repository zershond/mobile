/*
jQuery封装瀑布流照片墙
作者：zershond
date：2016.10.13
*/

		(function($){
			//opts设置参数  selector jQuery选择器
			$.fnImgWall  = function(opts, _selector){

				//设置默认参数
				var _default = {
					concent: '',
					col: 3
				}
				var selector = _selector ? _selector : $('.container');

				//jQuery 扩展方法（两个对象合并）对象克隆（产生新的对象） 
				// 加了 true 表示深度克隆
				opts = $.extend(true, _default, opts);
				var col = opts.col;

				// 定义css样式对象
				var imgCss = {};

				$('img',selector).each(function(i, img) {
					var self = $(this);
					_imgCss = {
						left: imgCss[i] ? (imgCss[i].left + imgCss[i].width) : 0, 
						width: $(document).width()/col,
						top: imgCss[(i - (col-1))] ? (imgCss[(i - (col-1))].top + $('img',selector).eq(i-col).height()) : 0
					};
					if(i%col == 0){
						_imgCss.left = 0;
					}
					imgCss[i + 1] = _imgCss;
					$(img).css(_imgCss);
				});

				// 若有回调函数，则执行
				if(typeof opts.callbcak == 'function'){
					opts.callbcak(obj);
				}
			}
		})(jQuery)