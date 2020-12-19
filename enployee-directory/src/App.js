import React from "react";
import API from "./utils/API"
import Card from "react-bootstrap/Card";

// import Main from "./components/Main";

function FormInput (){
  return <div>form input</div>
}

function UsersView (props){
  // props: user (filteredUsers)
  // button to filter by name
    // onClick -> this.sort
    return (
      <div>
        <p>{props.user.name.first} {props.user.name.last}</p>
        <p>{props.user.phone}</p>
        <p>{props.user.email}</p>
        <p>{props.user.dob.date}</p>
      </div>
    );
}

function Header (){
  return (
    <div>
 <h1 className="text-center">Employee Directory</h1>
        <h3 className="text-center">
          Thumbs up on any pups you'd like to meet!
        </h3> 
  </div>)
}

class App extends React.Component{

state = {
  allUsers: [],
  filteredUsers: [],
  searchTerm : "",
  // sortOption
  // state property for each column and don't .reverse unless sortOption is sorted / descending 
}

// component did mount

componentDidMount() {
  this.getUsers()
}

getUsers = () => {
    // call API (utils)
  API.getUsers()
    .then((res) => {
      console.log(res)
          // set state
      this.setState({
        allUsers : res.data.results
      })})
};
      // set up allUsers : [], filteredUsers: []

  // handleInputChange
  handleInputChange = event => {
    // change (setState) searchTerm
    this.setState({ searchTerm: event.target.value });

    // filter users on searchTerm
      // use javascript function 
    // sort if relevant (nice to have)
  };

   // sortUsers
    // using js sort (by string. or if youo want to sort by number (DOB))
    // optionoal implement, up or down` as

render(){
  return (
    <div className= "App">
      <Header />
      {/* <FormInput /> */}
      {this.state.allUsers.map((user,index) => (
        // console.log(user)
          <UsersView user = {user} key={index}/>
      )
      )}
      {/* <UsersView users = {this.state.allUsers}/> */}
    </div>
      );
}

}

export default App;
