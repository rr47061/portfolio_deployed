import React from "react"

const PersonList = () => {

    const people = [
        {img:22 , name: "rohit" , job: 'frontend'},
        {img:25 , name: "rohit" , job: 'frontend'},
        {img:27 , name: "rohit" , job: 'frontend'},
        {img:29 , name: "rohit" , job: 'frontend'}

    ];
    return (
        <section>
            <Person person={people[0]}/>
            <Person person={people[1]}>
                this is child
            </Person>
            <Person person={people[2]}/>
            <Person person={people[3]}/>

        </section>
    );

};

const Person = props => {

const {img,name,job} = props.person;
const {children}  = props;
    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
    return (
        <div className="person">
            <img src={url} alt=""/>
            <h4>{name}</h4>
            {children}
            <h4>{job}</h4>
        </div>
    )
};

export default PersonList;