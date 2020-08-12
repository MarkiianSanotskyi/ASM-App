/*placeholder*/
$(document).ready(function(){
        $.Placeholder.init({ color : "#797979" });
 });


 $( ".header-menu" ).click( function () {
        $( ".header-menu a " ).removeClass( "active" );
        $( this ).toggleClass( "active" );
    } )
	
	$( "#settings .creepers ul.creepers-box-list li a" ).click( function () {
        $( "#settings .creepers ul.creepers-box-list li  " ).removeClass( "active" );
        $( this ).toggleClass( "active" );
    } )
	
	$( "#contacts-info .creepers ul.creepers-box-list li a" ).click( function () {
        $( "#contacts-info .creepers ul.creepers-box-list li  " ).removeClass( "active" );
        $( this ).toggleClass( "active" );
    } )

    /*Fancybox*/


    var forms = $( '.form-modal' ),
        cb_input = forms.find( 'input[type=text], input[type=email], input[type=tel] , textarea' ),
        cr_close = $.fancybox.close();

    $( "#fancybox-overlay" ).fancybox( {
        padding: [ 0, 0, 0, 0 ],
        margin: [ 120, 0, 0, 0 ],
        scrolling: 'visible',
        minWidth: 350,
        minHeight: 321,
        autoSize: false,
        autoHeight: true,
        autoWidth: true,
        maxWidth: 9999,
        maxHeight: 9999,
        fixed: false,
        autoCenter: false,
        closeBtn: true,
        afterClose: function () {
            cb_input.val( '' );
        }
    } );

    $( '.btr' ).click( function () {
        $.fancybox.close();
    } );


    /*Fancybox end*/



    //   $("a[href$='.jpg'], a[href$='.png']")
//           .addClass("fancybox");

    $( "a[href$='.jpg'], a[href$='.png']" ).each( function () {
        $( this ).addClass( "fancybox" );
        $( this ).attr( 'rel', 'gallery' );

    } );

    $( ".fancybox" ).fancybox( {
        padding: [ 0, 0, 0, 0 ],
        openEffect: 'elastic',
        openSpeed: 300,
//        closeEffect: 'elastic',
//        scrolling: 'visible',
        background: 'white',
        maxWidth: 800,
        arrows: true,
        fixed: false,
        autoCenter: true,
        beforeShow: function () {
            this.title = ( this.title ? '' + this.title + '' : '' ) + 'Image ' + ( this.index + 1 ) + '/' + this.group.length;
        }
    } );
	
	jQuery(function()

	    {

	        jQuery('.scroll-pane').jScrollPane();

	    });
		
		(function($) {
		$(function() {
			$('input, select').styler({
				selectSearch: true
			});
		});
		})(jQuery);
		
		$(function() {

			//Сохраняем нужные элементы в перменных
			var slider  = $('#slider'),
				tooltip = $('.tooltip');

			//Скрываем подсказку в начале
			tooltip.hide();

			//Вызываем слайдер
			slider.slider({
				//Конфигурация
				range: "min",
				min: 1,
				value: 35,

				start: function(event,ui) {
				    tooltip.fadeIn('fast');
				},

				//Событие слайдреа
				slide: function(event, ui) { //При пермещении слайдера

					var value  = slider.slider('value'),
						volume = $('.volume');

					tooltip.css('left', value).text(ui.value);  //Выравниваем подсказку соответственно

					if(value <= 5) { 
						volume.css('background-position', '0 0');
					} 
					else if (value <= 25) {
						volume.css('background-position', '0 -25px');
					} 
					else if (value <= 75) {
						volume.css('background-position', '0 -50px');
					} 
					else {
						volume.css('background-position', '0 -75px');
					};

				},

				stop: function(event,ui) {
				    tooltip.fadeOut('fast');
				},
			});

		});