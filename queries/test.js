db.test.drop();
db.test.insertMany([
    {name: "n1", created_at: ISODate("2020-12-11T14:12:00Z")},
    {name: "n2", created_at: null},
    {name: "n3", created_at: ISODate("2014-12-11T14:12:00Z")},
    {name: "n4", created_at: null},
    {name: "n6", created_at: ISODate("2016-12-11T14:12:00Z")}
]);
db.test.find({"$or": [{"created_at": null}, {"created_at": {"$lt": ISODate("2022-12-11T14:12:00Z")}}]}).sort({"checked_at": 1});