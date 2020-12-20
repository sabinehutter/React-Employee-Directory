import React from "react";
import API from "./utils/API"
import Card from "react-bootstrap/Card";

// import Main from "./components/Main";

function FormInput() {
  return <div>form input</div>
}

function SearchBar(props) {
  return (
    <div>
      <nav class="navbar navbar-light bg-light mx-auto" style={{height : "100px"}}>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onChange = {this.handleSearchChange} value = {props.searchTerm}></input>
        </form>
      </nav>
    </div>)}
  
  
function UsersView (props){
  // props: user (filteredUsers)
  // button to filter by name
    // onClick -> this.sort
    return (
  
      <div>
        <div class="row">
          <div class="col user-images"><img src={props.user.picture.thumbnail} alt="User Photo" style= {{ width:"30%"}}></img></div>
          <div class="col"><p>{props.user.name.first} {props.user.name.last}</p></div>
          <div class="col"><p>{props.user.phone}</p></div>
          <div class="col"><p>{props.user.email}</p></div>
          <div class="col"><p>{props.user.dob.date.substring(0, 10)}</p></div>
        </div>
      </div>
      );
  }
  
function Header (){
  return (
    <div>

        <div class="jumbotron jumbotron-fluid" style={{ backgroundColor: "#16204B", borderBottom: "8px solid red", margin: "0px auto" }}>
          <div class="container">
            <h1 class="display-4" style={{ color: "white" }} >Employee Directory</h1>
            <p class="lead .bg-primary" style={{ color: "white" }} >Click on carrots to filter by heading or use the search box to narrow your results.</p>
          </div>
        </div>
      </div>)
    }
    
class App extends React.Component{

        state = {
          allUsers: [],
          filteredUsers: [],
          searchTerm: "",
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
              allUsers: res.data.results,
              filteredUsers: res.data.results
            })
          })
      };
            // set up allUsers : [], filteredUsers: []
      
        // handleInputChange
    handleSearchChange = (event) => {
        // change (setState) searchTerm
        console.log(event.target)
        const {name, value } = event.target;

        this.setState(
          {
            [name]: {value},
          },
          () => {
              const filtered = this.state.allUsers.filter((result) =>
                // console.log(result)
                result.name.first.includes(this.state.searchName)
              );
              console.log(filtered);
              this.setState({
                filteredUsers: filtered,
              });
            }
          );
        };
  
      // filter users on searchTerm
        // use javascript function
      // sort if relevant (nice to have)
  
     // sortUsers
     handleSubmit = (event) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
      if (this.state.trackSort !== "ascend") {
        const sorted = this.state.allUsers.sort((a, b) => a.name.first.localeCompare(b.name.first))
        console.log(sorted)
        console.log("clicked")
        this.setState({
          filteredUsers: sorted,
          trackSort:"ascend"
        });
      }
  
      else{  const sorted = this.state.allUsers.sort((a, b) => b.name.first.localeCompare(a.name.first))
        console.log(sorted)
        console.log("clicked")
        this.setState({
          filteredUsers: sorted,
          trackSort:"descend"
        });}
  
    };
      // using js sort (by string. or if youo want to sort by number (DOB))
      // optionoal implement, up or down` as
  
render(){
  return (
    <div className="App">
        <Header />
        <nav class="navbar navbar-light bg-light mx-auto" style={{height : "100px"}}>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onChange = {this.handleSearchChange} value = {this.state.searchTerm}></input>
        </form>
      </nav>
      <div className="row">
            <div className="table-title col">Image</div>
            <div className="table-title click col-3" onClick={this.handleSubmit}>Name</div>
            <div className="table-title col">Phone Number</div>
            <div className="table-title col">Email</div>
            <div className="table-title col">DOB</div>
          </div>
        {/* <FormInput /> */}
        {this.state.allUsers.map((user, index) => (
          // console.log(user)
          <UsersView user={user} key={index} />
        )
        )}
      </div>
      );
}

}

export default App;
