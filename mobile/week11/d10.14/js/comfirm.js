


(function($) {
	// body...
	
	$.comfirmBox = function(obj){
		var _default = {
			header: 'warning',
			tag: 'default',
			buttons:[
			{
				content:'comfirm1',
				event:function(data){
					console.log(data.html());
				}
			}
			]
		}

		obj = $.extend(true, _default, obj);

		var header = obj.header;
		var tag = obj.tag;

		var str = '<header>' + header + '</header><div class="tag">' + tag + '</div><div class="btn"></div>';

		var div = document.createElement('div');
		$(div).addClass('comfirmBox').appendTo('body').html(str);

		var len = obj.buttons.length;
		var width = 100 / len + '%';

		$.each(obj.buttons, function(index, button) {
			 /* iterate through array or object */
			 var btn = document.createElement('span');
			$(btn).addClass('option').css('width',width).html(button.content).appendTo('.btn');
			$(btn).click(function(event) {
				/* Act on the event */
				button.event($(btn));
			});
		});

	}

})(jQuery)

