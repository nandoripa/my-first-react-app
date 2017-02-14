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
      <EmployeeList employees={this.state.employees} />
    );
  }
}

class Employee extends React.Component {
  render() {
    return (<li>{this.props.name - this.props.email}</li>);
  }
}

class EmployeeList extends React.Component {
  render () {
    return (
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
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));