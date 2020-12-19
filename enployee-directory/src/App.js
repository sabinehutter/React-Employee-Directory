import React from "react";
// import Main from "./components/Main";

function FormInput (){
  return <div>form input</div>
}

function UsersView (props){
  // props: user (filteredUsers)
  // button to filter by name
    // onClick -> this.sort
  return <div>users view</div>
}

class App extends React.Component{

state = {
  allUsers: [],
  filteredUsers: [],
  searchTerm : "",
  // sortOption
}

// component did mount
  // call API (utils)
    // set state
      // set up allUsers : [], filteredUsers: []

  // handleInputChange
    // change (setState) searchTerm
    // filter users on searchTerm
    // sort iif relevant

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
