/**
 * Created by Acring on 2017/10/22.
 */

class Algorithm{
    /**
     * 适应度函数
     */
    static suitable(x:number){
        return parseInt((2*x/5 * sin(x/50) * cos(x/100) + 700).toString()); // 返回整型
    }

    static screen(kangaroo: Kangaroo[]){
    	if(!kangaroo.length){
    		console.log('error', kangaroo);
    		return;
    	}
    	console.log('screen');
    	console.log(kangaroo);
    	let sum = 0;
    	let probability = [];
    	let surviveKangaroo = [];
    	for(let x in kangaroo){
    		sum += kangaroo[x].suitable;
    	}
    	console.log(sum);
    	for(let k of kangaroo){
    		if(probability.length == 0){
    			probability.push(k.suitable/sum );
    		}else{
    			probability.push(k.suitable/sum + probability[probability.length - 1]);    			
    		}
    	}
    	console.log(probability);
    	for(let x in kangaroo){
    		let point = Math.random();
    		let index = 0;
    		while(point > probability[index]){
    			index ++;
    		}
    		surviveKangaroo.push(kangaroo[index]);
    		console.log('push',point,index,kangaroo[index])
    	}
    	console.log(surviveKangaroo);
    	return surviveKangaroo;
    }

	_

}

