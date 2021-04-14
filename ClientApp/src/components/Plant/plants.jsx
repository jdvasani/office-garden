import React, {Component} from 'react';
import axios from 'axios';

export class plants extends Component
{
    constructor(props){
      super(props);
     this.waterPlant=this.waterPlant.bind(this);
    
    this.state ={
        plantsarray: [],
        loading: true
    }

}
componentDidMount(){
    this.populateData();
   
}
 waterPlant(id,obj){
    axios.put("api/plants/WaterPlant/"+id).then(result =>
        { 
            this.populateData();
           
            }
    )
      
    setTimeout(this.lookStatus,10000,id,obj);
   
}



lookStatus(id, obj){
    axios.put("api/plants/changeStatus/"+id).then(result =>
        {   
            obj.populateData();
            }
    )
    setTimeout(obj.needWaterStatus,21600000,id,obj);
}

needWaterStatus(id,obj){
    axios.put("api/plants/dryStatus/"+id).then(result =>
        { 
            obj.setState({
                bgColor: 'red'
                
              })
              obj.populateData();
          
            }
    )
       
    

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
                              <button onClick={()=> this.waterPlant(plant.id,this)} className="btn btn-success" >
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