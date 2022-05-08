import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Twemoji} from 'react-emoji-render';

const ThirtySix= () => {
    return (
        <div>

            <Grid align="left" width="75%">
                <p>

                    We have a Database anamikaexpress. It has a collection "articles". Every article in the collection articles may have different attributes.
                    <br/>
                    There are 3 types of operators :
                    <ol>
                        <li>Query Selectors : Comparison, Logical, Element, Evaluation, Array, Comments</li>
                        <li>Projection Operators : $, $elemMatch, $meta, $slice</li>
                        <li>Update Operators : $inc, $dec</li>
                    </ol>
                    Comparison Operators
                    <ul>
                        <li>
                            <div style={{maxWidth: '250px', overflowX: 'scroll'}}>
                            <pre>{`db.articles.find({title: { $eq : "mongo"}})  or   db.articles.find({title: "mongo"}) `}</pre> </div>
                        // It will give articles which have title as mongo.
                        </li>
                        <li> <div style={{maxWidth: '250px', overflowX: 'scroll'}}>
                            <pre>{`// relatedTo is an array
db.articles.find({relatedTo: "cooking"})

// relatedTo contains only cooking
db.articles.find({relatedTo: ["cooking"]})

// Articles whose title is not mongo
db.articles.find({title: { $ne : "mongo"}})

// Articles with likes greater than 27
db.articles.find({likes: { $gt : 27}})

// Articles with likes greater than equal to 27
db.articles.find({likes: { $gte : 27}})

// Articles with likes less than 27
db.articles.find({likes: { $lt : 27}})

// Articles with likes less than equal to 27
db.articles.find({likes: { $lte : 27}})

// Articles with title in mongo or database
db.articles.find({title : {$in : ["mongo", "database"]}})

// Articles with title not in mongo or database
db.articles.find({title : {$nin : ["mongo", "database"]}})
`}</pre> </div>
                        </li>
                    </ul>
                        Logical Operators
                    <ul>
                        <li> <div style={{maxWidth: '250px', overflowX: 'scroll'}}>
                            <pre>{`Article with likes greater than 60 or less than 10
db.articles.find({ $or : [ {likes : {$gt : 60}}, {age : {$lt : 10}} ] })

Article with likes Neither greater than 60 or less than 10
db.articles.find({ $nor : [ {likes : {$gt : 60}}, {age : {$lt : 10}} ] })

Article with likes greater than 60 and title mongo
db.articles.find({ $and : [ {likes : {$gt : 60}}, {title : "mongo"} ] })
or
db.articles.find({likes : {$gt : 60}, title : "mongo"} )

Article likes not equal to 60
db.articles.find({likes : {$not : {$eq : 60}}}) or  db.articles.find({likes : {$ne : 60}})`}</pre>
                        </div>
                        </li>
                    </ul>
                    Element Operators
                    <ul>
                        <li>
                            <div style={{maxWidth: '250px', overflowX: 'scroll'}}>
                                <pre>{`db.articles.find({commentSection : {$exists : true}}) // if field exists and has value null then also it returns

db.articles.find({commentSection : {$exists : true, $ne : null}})

type of phone number is number
db.articles.find({phoneOfAuthor: {$type: "number"}})
db.articles.find({phoneOfAuthor: {$type: ["number", "string"]}})`}</pre></div>
                        </li>
                    </ul>
                    Evaluation Operators
                    <ul>
                        <li><div style={{maxWidth: '250px', overflowX: 'scroll'}}>
                            <pre>{`db.articles.find({title: {$regex : /mongo/}})

$expr : if you want to compare two fields in same document.
fetch all the items where costPrice is greater than salePrice in sale collection
db.sale.find({$expr : {$gt : ["$costPrice", "$salePrice"]}})  // $ sign in front of field names and wrapped by ""
`}</pre></div></li>
                    </ul>
                    Array operators
                    <ul>
                        <li><div style={{maxWidth: '250px', overflowX: 'scroll'}}>
                            <pre>{`db.articles.find({comments: {$size: 3}})  //size has to be an exact number

db.articles.find({comments: {$all: ["nice", "Good"]}}) // does not care about order

db.articles.find({comments: {$elemMatch:{commentBy: "unknown", frequency: {$gt:3}}}})`}</pre></div></li>
                        <li>
                            //iterating on cursor : <br/>
                            <pre>{`cursor = db.articles.find({})
while (cursor.hasNext()){
  cursor.next()
}`}</pre>
                        </li>
                        <li>
                            //Sorting cursor results :
                            <div style={{maxWidth: '250px', overflowX: 'scroll'}}>
                            <pre>{`// 1 means ASC, -1 means DESC
db.persons.find().sort({"age": 1})

// ASC by age then DESC by name
db.persons.find().sort({"age": 1, "name":-1})

//Skipping and limiting cursor results
db.persons.find().skip(100)

db.persons.find().limit(100)
`}</pre></div>
                            Logical Order -> sort, then skip then limit
                        </li>
                    </ul>
                    <ul>
                        Projection
                        <li><div style={{maxWidth: '250px', overflowX: 'scroll'}}>
                            <pre>{`db.persons.find({hobbies: "cooking"}, {"hobbies.$": 1})
db.persons.find({hobbies: "cooking"}, {hobbies : {$elemMatch: {$eq : "sports"}}}) // documents which have cooking and only show sports in hobbies

db.persons.find({hobbies: "cooking"}, {hobbies : {$slice: 2}}) // documents with first 2 hobbies
db.persons.find({hobbies: "cooking"}, {hobbies : {$slice: [1, 2]}}) // documents will skip first hobby and show us next 2 hobbies
`}</pre></div>
                        </li>
                    </ul>


                    <ul>
                        Update operators
                        <li><div style={{maxWidth: '250px', overflowX: 'scroll'}}>
                            <pre>{`db.articles.updateOne({title: "mongo"}, {$inc: {likes:1}}})
db.articles.updateOne({title: "mongo"}, {$dec: {likes:1}}})
or
db.articles.updateOne({title: "mongo"}, {$inc: {likes:-1}}})

db.articles.updateOne({title: "mongo"}, {$inc: {likes:1}, $set: {isARated: true}}})  // increments likes by 1 and sets isARated to true
db.articles.updateOne({title: "mongo"}, {$inc: {likes:1}, $set: {likes: 30}}}) //error updating likes would create a conflict at likes
db.articles.updateOne({title: "mongo"}, {$max: {likes: 32}}}) // it will update if likes are less than 32
db.articles.updateOne({title: "mongo"}, {$min: {likes: 32}}}) // it will update if likes is more than 32
db.articles.updateOne({title: "mongo"}, {$mul: {likes: 1.1}}}) // it will update multiply the likes by 10%

`}</pre></div>
                        </li>

                        <li>Getting rid of fields :
                            <div style={{maxWidth: '250px', overflowX: 'scroll'}}>
                            <pre>{`db.articles.updateMany({isPoem : true}, {$unset: {comments: ""}}}) // delete comments field for isPoem true document
`}</pre></div>
                        </li>


                        <li>Renaming the fields :<div style={{maxWidth: '250px', overflowX: 'scroll'}}>
                            <pre>{`db.articles.updateMany({}, {$rename: {likes: "loves"}}}) //Renames likes field to loves
`}</pre></div></li>
                        <li>Upsert :
                            <div style={{maxWidth: '250px', overflowX: 'scroll'}}>
                            <pre>{`db.articles.updateOne({title: "mongo"}, {$set : {likes: 23, comments: ["nice", "good"]}}) // If no match then no update
db.articles.updateOne({title: "mongo"}, {$set : {likes: 23, comments: ["nice", "good"]}}, {upsert: true})// if document does not exist then it will create it.
`}</pre></div></li>

                        <li>Update matched Array :<div style={{maxWidth: '250px', overflowX: 'scroll'}}>
                            <pre>{`db.articles.updateMany({comments: {$elemMatch:{title: "mongo", frequency: {$gt:3}}}}, {$set : {"comments.$.highFrequency": true}}})
`}</pre></div></li>


                        <li> Add element in Array
                            <div style={{maxWidth: '250px', overflowX: 'scroll'}}>
                            <pre>{`db.articles.updateOne({title: "mongo"}, {$push: {comments: "Good Job"}})
`}</pre></div></li>
                        <li> Remove element in Array
                            <div style={{maxWidth: '250px', overflowX: 'scroll'}}>
                            <pre>{`db.articles.updateOne({title: "mongo"}, {$pull: {comments: "Good Job"}})
`}</pre></div></li>
                    </ul>
                    <br/>

                    <Grid align="center" style={{backgroundColor:"#eeeeee"}} width="75%">
                        <p style={{fontFamily:"Alegreya, serif", color:"blue", lineHeight:'1.8'}}>
                            ENJOY CODING!!! <Twemoji svg text=" 🤗🤗" />
                            <br/>
                            #codingIsFun #mongoDbAdvancedCrud #writing #blogging #techBlog #blogger
                        </p>
                    </Grid>
                </p>
            </Grid>

        </div>
    );
};

export default ThirtySix;
