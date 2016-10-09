// Добавить в конструктор Article:

// Подсчёт общего количества созданных объектов.
// Запоминание даты последнего созданного объекта.
// Используйте для этого статические свойства.
// Пусть вызов Article.showStats() выводит то и другое.

function Article() {
	Article.counter++;
  	Article.created = new Date();
}
Article.counter = 0;
Article.showStats = function(){
  	return "Всего: " + this.counter + ", Последняя:" + this.created;
};


new Article();
new Article();

console.log(Article.showStats()); // Всего: 2, Последняя: (дата)

new Article();
new Article();

//Article.showStats(); // Всего: 3, Последняя: (дата)
