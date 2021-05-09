import './Body.css';
import React from "react";

class Body extends React.Component {

    state = {
        listitems: [
            {
                id: 0,
                context: "Why women can't keep secrets",
                modifier: "list-group-item list-group-item-primary"
            },
            {
                id: 1,
                context: "Mental Health : A Luxury Today?",
                modifier: "list-group-item list-group-item-secondary"
            },
            {
                id: 2,
                context: "Puzzle 1 : Slitherlink",
                modifier: "list-group-item list-group-item-success"
            },
            {
                id: 3,
                context: "Missing flight at Mumbai international airport",
                modifier: "list-group-item list-group-item-danger"
            },
            {
                id: 4,
                context: "My 1st flight journey",
                modifier: "list-group-item list-group-item-warning"
            },
            {
                id: 5,
                context: "Who am I?",
                modifier: "list-group-item list-group-item-warning"
            },
            {
                id: 6,
                context: "3 mentors of my life",
                modifier: "list-group-item list-group-item-warning"
            },
            {
                id: 7,
                context: "Let me breathe; please set me free",
                modifier: "list-group-item list-group-item-warning"
            },
            {
                id: 8,
                context: "Independent India : A crossword puzzle",
                modifier: "list-group-item list-group-item-warning"
            },
            {
                id: 9,
                context: "Lockdown Thoughts : Privilege of what I want over what I need",
                modifier: "list-group-item list-group-item-warning"
            },
            {
                id: 10,
                context: "क्या हम वाकई स्वतंत्र हैं?",
                modifier: "list-group-item list-group-item-warning"
            },
            {
                id: 11,
                context: "A Thought",
                modifier: "list-group-item list-group-item-warning"
            }
        ]
    };

    render() {

        return(
            <React.Fragment>
                <ul className="list-group">
                    {this.state.listitems.map(listitem => (
                        <li key={listitem.id} className={listitem.modifier}>
                            <div className="meta">


                            </div>
                        </li>
                    ))}
                </ul>
            </React.Fragment>
        );
    }



}

export default Body;
