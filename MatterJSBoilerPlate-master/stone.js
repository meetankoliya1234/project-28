class stone
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1,
			density:1.2			
			}
		this.image=loadImage("project 28 img/images/stone.png")
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var stonePos=this.body.position;		

			push()
			translate(stonePos.x, stonePos.y);			
			strokeWeight(4);
			fill(255,255,0)
			imageMode(CENTER)
			image(this.image,0,0,this.w, this.h);
			pop()
			
	}

}