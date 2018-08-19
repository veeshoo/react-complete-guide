import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    constructor(props){
        super(props);
        console.log("[Persons.js] Inside the constructor", props);
        this.lastPersonRef = React.createRef();
    }

    componentWillMount(){
        console.log("[Persons.js] component will mount");
     }
        
    componentDidMount() {
        console.log("[Persons.js] Component mounted");
        this.lastPersonRef.current.focus();
    }

    componentWillReceiveProps(nextProps) {
        console.log("[Update Persons.js] Inside componentWillReceiveProps", nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("[Update Persons.js] Inside shouldComponentUpdate", nextProps, this.props);
    //     return nextProps.persons!==this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked;
    // }

    componentWillUpdate(nextProps, nextState){
        console.log("[Update Persons.js] Inside componentWillUpdate", nextProps, this.props);
    }

    componentDidUpdate(){
        console.log("[Update Persons.js] Inside componentDidUpdate",  this.props);
    }

    render() {
        console.log("[Persons.js] Rendering",  this.props);
        return this.props.persons.map((person, index) => {
            return <Person click={() => this.props.clicked(index)}
                      name={person.name} 
                      position={index}
                      ref={this.lastPersonRef}
                      age={person.age} 
                      key={person.id}
                      changed={(event) => this.props.changed (event, person.id)}/>;
        });
    }
} 

export default Persons;
