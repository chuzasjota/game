var juego = new Phaser.Game(370,550,Phaser.AUTO,'bloquejuego');
var fondoJuego, pajaro, boton, arcade;
var cursores;
var persona;
var mirando = 'arriba';

var estadoPpal = {
	preload: function(){
		// Carga todos los recursos del juego
		juego.load.image('fondo','img/bg.jpeg');
		juego.load.spritesheet('pajaros','img/pajaro.png',43,30);
		juego.load.image('btn','img/btn.png');
		juego.load.spritesheet('persona','img/persona.png',64,64);
	},
	create: function(){
		//Mostrar en pantalla todo lo cargado en preload
		fondoJuego = juego.add.tileSprite(0,0,370, 550,'fondo');
		//pajaro = juego.add.sprite(100,100,'pajaros');
		//pajaro.frame = 1;
		//pajaro.animations.add('vuelo',[0,1,2],10,true);
		cursores = juego.input.keyboard.createCursorKeys();
		arcade = juego.physics.startSystem(Phaser.Physics.ARCADE);
		//juego.physics.arcade.enable(pajaro);
		//pajaro.body.collideWorldBounds = true;
		persona = juego.add.sprite(juego.width/2,juego.height/2,'persona');
		juego.physics.arcade.enable(persona);
		persona.body.collideWorldBounds = true;
		persona.anchor.setTo(0.5);
		persona.animations.add('arriba', [0,1,2,3,4,5,6,7,8],10, true);
		persona.animations.add('abajo', [18,19,20,21,22,23,24,25,26],10, true);
		persona.animations.add('derecha', [27,28,29,30,31,32,33,34,35],10, true);
		persona.animations.add('izquierda', [9,10,11,12,13,14,15,16,17],10, true);

	},
	update: function(){
		//Animacion del juego
		//fondoJuego.tilePosition.x -= 1;
		//pajaro.animations.play('vuelo')
		if(cursores.right.isDown){
			//pajaro.position.x += 1;
			persona.position.x += 1;
			persona.animations.play('derecha');
			if(mirando != 'derecha'){
				mirando = 'derecha';
			}
		}else if(cursores.left.isDown){
			//pajaro.position.x -= 1;
			persona.position.x -= 1;
			persona.animations.play('izquierda');
			if(mirando != 'izquierda'){
				mirando = 'izquierda';
			}
		}else if(cursores.up.isDown){
			//pajaro.position.y -= 1;
			persona.position.y -= 1;
			persona.animations.play('arriba');
			if(mirando != 'arriba'){
				mirando = 'arriba';
			}
		}else if(cursores.down.isDown){
			//pajaro.position.y += 1;
			persona.position.y += 1;
			persona.animations.play('abajo');
			if(mirando != 'abajo'){
				mirando = 'abajo';
			}
		}else{
			if(mirando != 'espera'){
				persona.animations.stop();
			}
			mirando = 'espera';
		}
	}
};

juego.state.add('principal',estadoPpal);
juego.state.start('principal');