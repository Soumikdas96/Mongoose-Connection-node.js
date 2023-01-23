const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/soumik", { useNewUrlParser: true, useUnifiedTopology: true } )
.then ( () => console.log("connection successfull....") )
.catch((err) => console.log(err));



//1.Schema
const ronySchema = new mongoose.Schema({
    name :  {
        type: String,
        required: true
    },
    ctype : String,
    video : Number,
    author : String,
    active: Boolean,
})

//2.Model
// collection creation
const Rony = new mongoose.model("Rony", ronySchema);


//3. Document

const createDocument = async () => {
    try{
        const reactRony = new Rony({
            name :  "React Js",
            ctype : "Front End",
            video : 90,
            author : "Soumik Das",
            active: true,
        })

        const result = await reactRony.save();
        console.log(result);
    }catch(err){
        console.log(err)
    }
}


//createDocument();


//4. Read Document

/**const getDocument = async () =>{
    const result = await Rony.find();
    console.log(result);
}**/

// Condition wise
// put you condition in line no. 62
//  .find({{ctype: "{$gt : 10"}})
//for more condition --> https://www.mongodb.com/docs/manual/reference/operator/query/

const getDocument = async () =>{
    try{
        const result = await Rony
        .find({ctype: "Front End"})
        .select({name:1})
        .limit(1);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

getDocument();
