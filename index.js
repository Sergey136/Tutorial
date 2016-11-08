import express from 'express';

const app = express();

app.get('/', async(req,res) => {
	var a = Number(req.query.a);
	var b = Number(req.query.b);
	var sum = 0;
	
	if(!Number(a)){
		a=0;
	}
	if(!Number(b)){
		b=0;
	}
	if(!Number(sum)){
		sum=0;
	}
	sum=a+b;	
	return res.json({
		summ:sum,
	});

});

app.listen(3000,() => {
  console.log('Example app listening on port 3000!');
});