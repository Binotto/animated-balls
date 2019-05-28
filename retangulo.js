function Retangulo(context){
	this.context = context;
	this.x = 0;
	this.y = 0;
	this.l = 20;
	this.h = 20;
	this.cor = 'yellow';
	this.velocidadeX = 0;
	this.velocidadeY = 0;
}
//CETA OS METODOS
Retangulo.prototype ={
	atualizar : function(){
		var ctx = this.context;

		if(this.x < this.l || this.x > ctx.canvas.width - this.l){
			this.velocidadeX *= -1;
		}

		if(this.y < this.h || this.y > ctx.canvas.height - this.h){
			this.velocidadeY *= -1;
		}

		this.x += this.velocidadeX;
		this.y += this.velocidadeY;
	},
	desenhar : function(){
		var ctx = this.context;

		ctx.save();

		ctx.fillStyle = this.cor;

		ctx.beginPath();
		//ctx.arc(this.x, this.y, this.raio, 0, Math.PI * 2);
		ctx.fillRect(this.x, this.y, this.l, this.h);

		ctx.fill();

		ctx.restore();
	}
}