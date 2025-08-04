import React ,{Component} from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./PR.css"


export default class PlotRent extends Component{
    constructor(props){
        super(props);
        this.state = {
            tenantName: "",
            plotNumber:"",
            rentAmount:"",
            leaseType:"Lease Hold", 
            periodStart:"",
            periodEnd:"",
            

        };
    }
    handleSubmit = (event) => {
        event.preventDefault();
        toast.success("Plot Rent Submitted Successfully!");
    }
    render () {
    return(
        <div className="main-content">
        <div className="PlotRent">
         <h2>Plot Rent</h2>
         <form onSubmit={this.handleSubmit}>
            <div>
                <label>Tenant Name</label>
                 <input type="text" value={this.state.tenantName} onChange={(e) => this.setState({tenantName: e.target.value})} required/>
            </div>

            <div>
                <label>Plot Number</label>
                 <input type="number" value={this.state.plotNumber} onChange={(e) => this.setState({plotNumber: e.target.value})} required/>
            </div>

             <div>
                <label>Rent Amount</label>
                 <input type="number" value={this.state.rentAmount} onChange={(e) => this.setState({rentAmount: e.target.value})} required/>
            </div>

            <div>
                <label>Lease Type</label>
                        <select value={this.state.leaseType} onChange={(e) => this.setState({leaseType: e.target.value})} required>
                            <option value="leaseHold">Lease Hold</option>
                            <option value="freeHold">Free Hold</option>
                        </select>
            </div>

            <div>
                <label>Period Start</label>
                 <input type="date" value={this.state.periodStart} onChange={(e) => this.setState({periodStart: e.target.value})} required/>
            </div>

            <div>
                <label>Period End</label>
                 <input type="date" value={this.state.periodEnd} onChange={(e) => this.setState({periodEnd: e.target.value})} required/>
            </div>

            <button type = "submit">Pay with m-pesa</button>
         </form>


        </div>
        </div>
    )
}
}
