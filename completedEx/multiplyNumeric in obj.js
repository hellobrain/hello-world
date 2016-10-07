// Before
var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

// multiplyNumeric(image);

// // after
// image = {
//     width: 200,
//     height: 800,
//     title: 'Cool image'
// };
function multiplyNumeric(image){
	var newObj = [];
	for (var item in image){
		if(isFinite(image[item])){
			newObj[item] = image[item] * 2;
		} else {
			newObj[item] = image[item];
		}
	}
	return newObj;
}

multiplyNumeric(image);
