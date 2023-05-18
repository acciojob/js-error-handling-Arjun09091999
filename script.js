//your code here
class OutOfRangeError extends Error{
	constructor(message){
		super();
		this.name = "Expression should only consist of integers and +-/* characters and not < arg >" 
	}
	function evalString(){ 
		if(cond1){
			throw new OutOfRangeError("Expression should not start with invalid operator") 
		}
		else if(cond2){
			throw new OutOfRangeError("Expression should not end with invalid operator") 
		}
	}
	try{ 
	evalString(); 
}
catch (err){
	throw (err.message);
	throw (err.name);
}
}
class InvalidExprError extends Error{ 
	constructor(message){
		super();
		this.name = "Expression should not have an invalid combination of expression"; 
	}
	function evalString(){
		if(cond){
			throw new InvalidExprError();
		}
	}
	try{
	evalString();
}
catch(err){
	throw(err.name); 
}
}
