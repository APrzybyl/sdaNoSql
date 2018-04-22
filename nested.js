 db = connect("localhost:27017/films")
 
  
 db.film.insert({"title": "Prometeusz",
		"year": 2015,
		"director": {
			"first_name": "Ridley",
			"last_name": "Scott",
			"birthday": "1980-11-23"}});
 
 db.film.find({"director.last_name": "Scott"})
 
 //cursor = db.film.find()
 
 // while (cursor.hasNext()) {
 // printjson(cursor.next());
 //}
 
 
db.film.aggregate([{$group: {_id: '$year',total: {$sum:1}} }])