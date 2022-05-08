import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Twemoji} from 'react-emoji-render';

const ThirtyFive= () => {
    return (
        <div>

            <Grid align="left" width="75%">
                <p>

                    <b>MongoDB</b>
                    <ul>
                        <li>Derived from Humongous</li>
                        <li>It has collections. Collections consists of Documents. </li>
                        <li>Documents have BSON structure which looks like JSON Objects</li>
                        <li>Documents are Schema-Less, hence less Collections and Relations in database.</li>
                        <li>Multiple Documents in the same collection can have different structure, which can lead to messy data but it's developer's responsibility to have a clean data.</li>
                        <li>Being Schema-Less gives a lot of flexibility and better performance.</li>
                        <li>100 levels of nesting is allowed. Document's max size is 16mb.</li>
                    </ul>

                    Let's learn with examples. <br/>

                    We have a Database anamikaexpress. It has a collection "articles". Every article in the collection articles may have different attributes. MongoDb CRUD operations are atomic at the document level.
                    <br/>
                    Commands :
                    <ul>
                        <li> show dbs  // shows existing databases on the server.</li>
                        <li>use anamikaexpress // Connects to the database, even if it does not exist, it will create on the fly and connects. But before we enter any data, it won't be shown in show dbs.</li>
                        <li> <div style={{maxWidth: '250px', overflowX: 'scroll'}}>
                            <pre>{`db.articles.inserOne({"title":"mongoDb", "level":"basic"})`}</pre> </div>
                        // It will create on the fly, if not created already. We can omit "" from key as long as long there is no whitespace in key name. We can use '' instead of "" in value. it will create one extra column Id whose type will be ObjectId.
                        </li>
                        <li> <div style={{maxWidth: '250px', overflowX: 'scroll'}}>
                            <pre>{`db.articles.insertMany([{"title":"mongoDb", "level":"basic"}])`}</pre> </div>
                            // We can insert many documents at once.
                        </li>
                        <li> <div style={{maxWidth: '250px', overflowX: 'scroll'}}>
                            <pre>{`db.articles.insert({"title":"mongoDb", "level":"basic"})`}</pre>
                            <pre>{`db.articles.insert([{"title":"mongoDb", "level":"basic"}])`}</pre>
                        </div>
                            // We can insert one or many documents at once.
                        </li>
                        <li>we can add id manually, but it should be unique. If it's not unique, db will throw an error.
                            <div style={{maxWidth: '250px', overflowX: 'scroll'}}>
                                <pre>{`db.articles.inserOne({"_id":"abc","title":"mongoDb", "level":"basic"})`}</pre></div>
                        </li>
                        <li>db.articles.find({}) // gives back cursor object which has all the documents in the database.</li>
                        <li>db.articles.find({}).pretty() // shows in a pretty way.</li>

                        <li>db.articles.find({}).toArray() // stores in an array.</li>
                        <li>db.articles.find({}).count() </li>
                        <li><div style={{maxWidth: '250px', overflowX: 'scroll'}}>
                            <pre>{`db.articles.find({}).forEach((article) => {printjson(article.author)}))`}</pre></div></li>
                        <li><div style={{maxWidth: '250px', overflowX: 'scroll'}}>
                            <pre>{`db.articles.find({},{title:1})`}</pre></div> // it will give only id and title column. 1 denotes show the column.</li>
                        <li><div style={{maxWidth: '250px', overflowX: 'scroll'}}>
                            <pre>{`db.articles.find({},{title:1, "_id": 0})`}</pre></div> // it will give only title column. 0 denotes don't shoe the column.</li>
                        <li>db.articles.findOne({}).pretty()  // gives error</li>

                        <li>it // Uses cursor for more data. When a lot of data comes in shell, it only shows a few records. we have to type it for more records. Cursors don't exist on delete, update, insert commands.</li>
                        <li><div style={{maxWidth: '250px', overflowX: 'scroll'}}>
                            <pre>{`db.articles.deleteOne({"_id":"abc"})`}</pre></div> // it deletes the record where id is abc.
                        </li>
                        <li><div style={{maxWidth: '250px', overflowX: 'scroll'}}>
                            <pre>{`db.articles.deleteMany({"level":"basic"})`}</pre></div> // it deletes all the records where level is basic.
                        </li>

                        <li><div style={{maxWidth: '250px', overflowX: 'scroll'}}>
                            <pre>{`db.articles.deleteMany({})`}</pre></div> // it deletes all the records <br/>
                        </li>

                        <li> <div style={{maxWidth: '250px', overflowX: 'scroll'}}>
                            <pre>{`db.articles.updateOne({"_id":"abc"}, {$set : {"author": "Dark Lord"}})`}</pre></div> // it updates one record where id is abc and adds author field. "set" is a keyword, hence we need to put $ in front of it.
                        </li>
                        <li><div style={{maxWidth: '250px', overflowX: 'scroll'}}>
                            <pre>{`db.articles.update({"_id":"abc"}, {$set : {"author": "Dark Lord"}})`}</pre> </div>// it overrides one record where id is abc and adds author field.
                        </li>
                        <li><div style={{maxWidth: '250px', overflowX: 'scroll'}}>
                            <pre>{`db.articles.updateMany({"level":"basic"}, {$set : {"author": "Dark Lord"}})`}</pre> </div>// it updates all the records where level is basic.
                        </li>
                        <li>cls // clears the screen of mongo shell.</li>
                        <li>db.articles.drop() // it will drop the collection articles.</li>

                        <li>use anamikaexpress <br/>
                            db.dropDatabase()  // It drops databases

                        </li>
                    </ul>

                    These are the datatypes supported in mongodb.
                    <ul>
                        <li>Text //max 16 mb</li>
                        <li>Boolean // true or false</li>
                        <li>Number // default is float in shell.</li>
                        <li>Integer //32 bits long</li>
                        <li>NumberLong //64 bits long</li>
                        <li>NumberDecimal //like 12.99</li>
                        <li>ObjectId // unique Id, it has in-built sorting based on timestamp.</li>
                        <li>ISODate</li>
                        <li>Timestamp</li>
                        <li>Embedded Document // Document has value which is document.</li>
                        <li>Array</li>
                    </ul>
                    <br/>

                    <Grid align="center" style={{backgroundColor:"#eeeeee"}} width="75%">
                        <p style={{fontFamily:"Alegreya, serif", color:"blue", lineHeight:'1.8'}}>
                            ENJOY CODING!!! <Twemoji svg text=" 🤗🤗" />
                            <br/>
                            #codingIsFun #mongoDbBasics #writing #blogging #techBlog #blogger
                        </p>
                    </Grid>
                </p>
            </Grid>

        </div>
    );
};

export default ThirtyFive;
