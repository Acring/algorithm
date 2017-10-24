/**
 * Created by Acring on 2017/10/22.
 */

class Algorithm{
    /**
     * 适应度函数
     */
    static suitable(x:number){
        return parseInt((-((x-300) * sin((x-300)/50) * cos((x-300)/100)) + 500).toString()); // 返回整型
    }

    static screen(kangaroo: Kangaroo[]){
    	if(!kangaroo.length){
    		console.log('error', kangaroo);
    		return;
    	}
    	let sum = 0;
    	let probability = [];
    	let surviveKangaroo = [];
    	for(let x in kangaroo){
    		sum += kangaroo[x].suitable;
    	}
    	for(let k of kangaroo){
    		if(probability.length == 0){
    			probability.push(k.suitable/sum );
    		}else{
    			probability.push(k.suitable/sum + probability[probability.length - 1]);    			
    		}
    	}
    	for(let x in kangaroo){
    		let point = Math.random();
    		let index = 0;
    		while(point > probability[index]){
    			index ++;
    		}
    		surviveKangaroo.push(new Kangaroo(kangaroo[index].liveHorizon));
    	}
    	return surviveKangaroo;
    }
}

