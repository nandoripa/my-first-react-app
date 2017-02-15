class App extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [
        {id: 1, name: "Mike", email: "mike@foo.dev"},
        {id: 2, name: "John", email: "john@foo.dev"}
      ]
    };
  }

  render () {
    return (
      <EmployeeList
        employees={this.state.employees} 
        onAddEmployee={this.handleOnAddEmployee.bind(this)}
      />
    );
  }

  handleOnAddEmployee (event) {
    event.preventDefault();

    let newEmployee = {
      name: event.target.name.value,
      email: event.target.email.value,
    };

    this.setState({
      employees: this.state.employees.concat([newEmployee])
    })
  }
}

class Employee extends React.Component {
  render() {
    return (<li>{this.props.name} - {this.props.email}</li>);
  }
}

class EmployeeList extends React.Component {
  render () {
    return (
      <div>
        <ul>
          {this.props.employees.map(employee => {
            return (
              <Employee
                key={employee.id}
                name={employee.name}
                email={employee.email}
              />
            );
          })}
        </ul>

        <form onSubmit={this.props.onAddEmployee}>
          <input id="name" type="text" placeholder="Nombre" name="nombre" />
          <br/>
          <input id="email" type="email" placeholder="Email" name="email" />
          <br/><br/>
          <input type="submit" value="Guardar" /> 
      </form>
     </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));