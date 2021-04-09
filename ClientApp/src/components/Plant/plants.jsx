import React, {Component} from 'react';
import axios from 'axios';


export class plants extends Component
{
    constructor(props){
      super(props);
     this.waterPlant=this.waterPlant.bind(this);
    
    this.state ={
        plantsarray: [],
        loading: true,
        interval: null,
        interval1: null
    }

}
componentDidMount(){
    this.populateData();
   
}

 waterPlant(id){
     
    axios.put("api/plants/WaterPlant/"+id).then(result =>
        { 
              window.location.reload(false);
          
            }
    )
      
  setTimeout(this.lookStatus,10000,id);
  setTimeout(this.needWaterStatus,21600000,id);
   
}

lookStatus(id){
    axios.put("api/plants/changeStatus/"+id).then(result =>
        {  
             console.log(result.data)
            window.location.reload(false);
          
            }
    )
}

needWaterStatus(id){
    axios.put("api/plants/dryStatus/"+id).then(result =>
        { 
            window.location.reload(false);
          
            }
    )
    clearInterval(this.interval1);
}



populateData(){
    axios.get("api/plants/GetAllPlants").then(result =>
        {
            const response= result.data;
            this.setState({plantsarray : response, loading:false});
        }
        )
}

renderAllPlants(plantsarray){
    return (
              <table className="table table-striped"> 
                <thead>
                    <tr>
                        <th> Id </th>
                        <th> plant name </th>
                        <th> status </th>
                        <th> last watered </th>
                        <th> Action</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                      plantsarray.map(plant=> (
                        <tr key={plant.name} >
                        <td>{ plant.id}</td>
                        <td> {plant.name}</td>
                        <td> {plant.status}</td>
                        <td> {plant.lastWatered}</td>
                        <td>
                          <div className='form-group'>
                              <button onClick={()=> this.waterPlant(plant.id)} className="btn btn-success" >
                              Water plant
                              </button>
                              </div>     
                          </td>
                        
                      </tr>

                      ) )
                     }
                   

                </tbody>
              
               </table>
    );

}


render(){
   let content = this.state.loading ? ( 
   <p> 
       <em>Loading...</em>
  </p>
  ) : (
      this.renderAllPlants(this.state.plantsarray)
      )

    return (
            <div>
                <h1> Plants</h1>
                {content}
            </div>
    );
}


}