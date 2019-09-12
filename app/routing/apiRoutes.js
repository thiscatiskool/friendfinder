var friends = require("../data/friends")

module.exports = function(app){

    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        console.log(req.body);

        var userData = req.body;
        var userScores = userData.scores;

        console.log(userScores);

        var totalDifference = 0;

        for(var i=0; i<friends.length; i++){
            console.log(friends[i]);
            totalDifference = 0;

            for(var j = 0; j<friends[i].scores[j]; j++){
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                if(totalDifference <= bestMatch.friendDifference){
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = friends[i].friendDifference;
                }
            }
        }

        friends.push(userData);

        res.json(bestMatch);
        

    });

}