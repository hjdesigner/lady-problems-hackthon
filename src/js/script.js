function chat(){
	if ( $('body').hasClass('page-chat') ) {

		$('#chat-btn').on('click', function(event) {
			event.preventDefault();
			var textoChat = $('#chat-msg').val();
			
			var msgChat = '<div class="msg-mentor"><p>'+textoChat+'</p><div class="chat-img-mentor"><div class="chat-nome">Larissa</div><figure class="chat-img"><img src="images/lari-chat.jpg" alt=""></figure></div></div>'
			
			$('.box-msg').append(msgChat);

			$('#chat-msg').val("");
		});


	}
}
function login(){

	if ( $('body').hasClass('page-login') ) {

		$('#entrar').on('click', function(event) {
			event.preventDefault();
			var emailLogin = $('#email').val();
			var senhaLogin = $('#senha').val();

			 if( emailLogin == 'mentora@mentora.com.br' && senhaLogin == '1234' ){
			 	window.location.href = "pupilas.html";
			 }
			 else{
			 	$('.login-error').html('E-mail ou senha errado.');
			 }
		});
	}
}
function cadastro(){

	if( $('body').hasClass('page-cadastro') ){
		
		$('#entrar-cadastro').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			window.location.href = "sucesso-cadastro.html";
		});

	}
}

$(document).ready(function($) {

	chat();
	login();
	cadastro();

});