let time = 0;
let wave = [];

let select;
let radiusSlider;
let box1;
let box2;







function setup() {
	canvas = createCanvas(1000, 775); 
	canvas.position(520,8,50);

	


	
	
	radiusSlider = createSlider(50, 150, 60,0.1);
	radiusSlider.position(1304, 550);


	speed = createSlider(1, 10, 2,0.1);
	speed.position(1304, 585);

	
	select = createSelect();
	
	select.position(1500,750);

	v1Slider = createSlider(-10, 10,-1,0.01);
	v1Slider.position(665,550);
	v1 = v1Slider.value();
	
	

	v2Slider = createSlider(-5, 5,2,0.01);
	v2Slider.position(665,585);
	v2 = v1Slider.value();
	


	v3Slider = createSlider(-10, 10,-3,0.01);
	v3Slider.position(665,620);


	v4Slider = createSlider(-10, 10,-3,0.01);
	v4Slider.position(950,550);

	v5Slider = createSlider(-10, 20,8,0.01);
	v5Slider.position(950,585);

	v6Slider = createSlider(-10, 10,-3,0.01);
	v6Slider.position(950,620);












	
}






function draw() {
   


	background(240);


	
	rect(71, 454, 560, 210);
	stroke(0);
	noFill();

	rect(71, 454, 560, 72);
	stroke(0);

	rect(76, 461, 546, 58);
	stroke(0);


	rect(666, 454, 280, 210);
	stroke(0);

	rect(666, 454, 280, 72);
	stroke(0);

	rect(671, 461, 266, 58);
	stroke(0);



	strokeStyle = 17;

	line(36,10,36,70);
	line(36,10,30,20);
	line(36,10,41,20);

	line(410,351,510,351);
	line(497,359,510,351);
	line(497,345,510,351);
	

	line(0, 246, 1030,246);
	line(1,0,1,900);
	line(1,0,1,900);
	line(1,0,1,900);
	line(1,0,1,900);
	stroke(170);
	noFill();

	

        for (i = 0; i < 1030; i += 7) 
	     {
			
			line(0, i, 1000,i);
			stroke(190);
			noFill();
			
		  }

		  for (i = 0; i < 1030; i += 35) 
		  {
			 
			 line(0, i, 1000,i);
			 stroke(100);
			 noFill();
			 
		   }	
		        
		   
		
           
		   

		  for (i = 0; i < 1000; i += 7) 
		  {
			 line(i, 0, i,1000);
			 stroke(190);
			noFill();
			 
		   }

		   for (i = 0; i < 1000; i += 35) 
		  {
			 line(i, 0, i,1000);
			 stroke(100);
			noFill();
			 
		   }


		   for(i=0 ; i< 1000 ; i =i+7)
		   {
			   text('1', );
			   stroke(0);
			   noFill();
		   }
	
	
	text('Frequency (fo)', speed.x -610, speed.y - -3);
	text('Wave', select.x , select.y - 25);
	text('Amplitude (v1)', radiusSlider.x -610, radiusSlider.y - -4);



	text(parseFloat(v1Slider.value() * 2.54).toFixed(2), v1Slider.x -380, v1Slider.y - 0);
	text(parseFloat(v2Slider.value() * 0.0005).toFixed(5), v2Slider.x -380, v2Slider.y - 0);
	text(parseFloat(v3Slider.value() * 0.2829).toFixed(4), v3Slider.x -380, v3Slider.y - 0);
	text(parseFloat(v4Slider.value() * 0.00003).toFixed(5) , v4Slider.x -380, v4Slider.y - 0);
	text(parseFloat(v5Slider.value() * -0.063).toFixed(4), v5Slider.x -380, v5Slider.y - 0);
	text(parseFloat(v6Slider.value() * -0.0003).toFixed(5) , v6Slider.x -380, v6Slider.y - 0);


	

	



	text('V2', v1Slider.x -555, v1Slider.y - -3);
	text('V3', v2Slider.x -555, v2Slider.y - -3);
	text('V4', v3Slider.x -555, v3Slider.y - -3);
	text('V5', v4Slider.x -550, v4Slider.y - -3);
	text('V6', v5Slider.x -550, v5Slider.y - -3);
	text('v7', v6Slider.x -550, v6Slider.y - -3);

	text('peak voltage of integral harmonics.  i.e.:- v1 peak voltage corresponding to first harmonic', radiusSlider.x -1190, radiusSlider.y - 55);
	text('properties of fundamental harmonics', radiusSlider.x -600, radiusSlider.y - 55);

	{
	text('Amplitude', speed.x -1260, speed.y - 543);

	
	text('Time', speed.x -860, speed.y - 243);
	stroke(200);

	}

  
	

		
	

	

	

	translate(-578, 246);
	let radius;
	let x = 0;
	let y = 0;
	let offset = 550;
	
	for(let i = 0; i < 4; i++){
		let prevX = x;
		let prevY = y;
		let n;
		let coef;
        
		if(select.value() == 'sawtooth'){
			
			if(i % 2 == 0){
				n = i+1;
			}else{
				n = -(i+1);
			}
			coef = i+1;
			radius = radiusSlider.value() * (2 / (n * PI));
		} else {
			
			coef =   (i * 2) + 1 + v1Slider.value() + v2Slider.value() + v3Slider.value() + v4Slider.value() + v5Slider.value() + v6Slider.value() ;
			n =   i * 2 + 1;
			radius = radiusSlider.value() * (4 / (n * PI) );	
		}

		x +=  radius *  (  cos(coef *  time   ));
		y +=  radius * (sin(coef * time ));
		
		
		stroke(10);
		strokeStyle = '#ff0000';
	
		noFill();
		ellipse(prevX, prevY, radius * 2);

		fill(5);
		line(x, y, prevX, prevY);

		console.log(v1Slider.value());
	}
	
	wave.unshift(y);

	translate(offset, 0);

	line(x-offset, y, 0, wave[0]);
	noFill();
	beginShape();
	for(let i = 0; i < wave.length; i++){
		vertex(i, wave[i]);
	}
	endShape();

	

	time -= speed.value() / 100;



}



	document.getElementsById("value3").innerHTML= speed.value();

	console.log(a);






	function setup1(){
		Swal.fire({
			
			title: 'Reset',
			text: 'Click the button to reset the experiment!',
			
			
		  }).then((result) => {
			// Reload the Page
			location.reload();
		  });
		 
	}


	