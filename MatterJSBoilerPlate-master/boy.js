class boy
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1,
			density:1.2			
			}
		this.image=loadImage("project 28 img/images/boy.png");
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
        this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var boyPos=this.body.position;		

			push()
			translate(boyPos.x, boyPos.y);
			imageMode(CENTER)
			strokeWeight(4);
			fill(255,255,0)
			image(this.image,0,0,this.w, this.h);
			pop()
			
	}

}