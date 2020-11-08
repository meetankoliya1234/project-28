class tree
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1,
			density:1.2			
			}
		this.image=loadImage("project 28 img/images/tree.png");
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var treePos=this.body.position;		

			push()
			translate(treePos.x, treePos.y);
			imageMode(CENTER)
			strokeWeight(4);
			fill(255,255,0)
			image(this.image,0,0,this.w, this.h);
			pop()
			
	}

}