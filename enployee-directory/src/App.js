import React from "react";
import API from "./utils/API"
import Card from "react-bootstrap/Card";

// import Main from "./components/Main";

function FormInput (){
  return <div>form input</div>
}

function UsersView (){
  // props: user (filteredUsers)
  // button to filter by name
    // onClick -> this.sort
    return (
      <div>
        <h1 className="text-center">Make New Friends</h1>
        <h3 className="text-center">
          Thumbs up on any pups you'd like to meet!
        </h3>
        <Card image={this.state.name} />
      </div>
    );
}

class App extends React.Component{

state = {
  allUsers: [],
  filteredUsers: [],
  searchTerm : "",
  // sortOption
}

// component did mount

componentDidMount() {
  this.getUsers()
  .catch(err => console.log(err));
}

getUsers = () => {
    // call API (utils)
  API.getUsers()
    .then(res => 
      // console.log(res.data.picture.thumbnail)
          // set state
      this.setState({
        allUsers : {
        ...this.state.allUsers,
        image : res.data.picture.thumbnail,
        name : res.data.name.first + res.data.name.last,
        phone: res.data.phone,
        email: res.data.email,
        dob: res.data.dob.date}

      })
    )
    .catch(err => console.log(err));
};
      // set up allUsers : [], filteredUsers: []

  // handleInputChange
  handleInputChange = event => {
    // change (setState) searchTerm

    this.setState({ searchTerm: event.target.value });

    // filter users on searchTerm
    // sort iif relevant
  };

   // sortUsers
    // using js sort (by string. or if youo want to sort by number (DOB))
    // optionoal implement, up or down` as

render(){
  return (
    <div className= "App">
      <FormInput />
      <UsersView />
    </div>
      );
}

}

export default App;
