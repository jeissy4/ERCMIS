import React ,{Component} from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./LR.css"


export default class LandRates extends Component{
    constructor(props){
        super(props);
        this.state = {
            ownerName: "",
            nationalID: "",
            contact: "",
            plotNumber: "",
            year: ""
            

        };
    }
    handleSubmit = (event) => {
        event.preventDefault();
        toast.success("Land Rates Submitted Successfully!");
    }
    render () {
    return(
        <div className="main-content">
        <div className="LandRates">
         <h2>Land Rates</h2>
         <form onSubmit={this.handleSubmit}>
            <div>
                <label>Owner Name</label>
                 <input type="text" value={this.state.ownerName} onChange={(e) => this.setState({ownerName: e.target.value})} required/>
            </div>

            <div>
                <label>National ID</label>
                 <input type="number" value={this.state.nationalID} onChange={(e) => this.setState({nationalID: e.target.value})} required/>
            </div>

             <div>
                <label>Contact</label>
                 <input type="number" value={this.state.contact} onChange={(e) => this.setState({contact: e.target.value})} required/>
            </div>

            <div>
                <label>Plot Number</label>
                 <input type="number" value={this.state.plotNumber} onChange={(e) => this.setState({plotNumber: e.target.value})} required/>
            </div>

            <div>
                <label>Year</label>
                 <input type="date" value={this.state.year} onChange={(e) => this.setState({year: e.target.value})} required/>
            </div>

            <button type = "submit">Pay with m-pesa</button>
         </form>


        </div>
        </div>
    )
}
}
