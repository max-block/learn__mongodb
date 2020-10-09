db.test.drop()
db.test.insertMany([
    { name: "n1", a: 10, b: 20 },
    { name: "n2", a: 30, b: 400 },
])


db.test.find({"$expr": {"$gt": ["$a", {"$subtract": ["$b", 20]}]}})