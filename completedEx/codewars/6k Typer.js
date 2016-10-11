var typer = (function(v) {
  return {
  	getType: function(v){
  		return {}.toString.call(v).slice(8, -1);},
    isNumber: function(v){
    	return typeof v !== "undefined" 
    	&& typeof v.valueOf() == "number"
    	&& !isNaN(v.valueOf()); // null throw error exception!!
    },
    isString: function(v){
    	return this.getType(v) === "String";
    },
    isArray: function(v){
    	return this.getType(v) === "Array";
    },
    isFunction: function(v){
    	return this.getType(v) === "Function";
    },
    isDate: function(v){
    	return this.getType(v) === "Date";
    },
    isRegExp: function(v){
    	return this.getType(v) === "RegExp";
    },
    isBoolean: function(v){
    	return this.getType(v) === "Boolean";
    },
    isError: function(v){
    	return this.getType(v) === "Error";
    },
    isNull: function(v){
    	return this.getType(v) === "Null";
    },
    isUndefined: function(v){
    	return this.getType(v) === "Undefined";
    }
  };
}());

typer.isNumber(-1);
