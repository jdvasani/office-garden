using System;
using System.Collections.Generic;
using System.Linq;

namespace plants.Data 
{
    public class PlantService : IPlantService
    {
        public void dryStatus(int id)
        {
             var  p = Data.plants.FirstOrDefault(n => n.Id == id);         
           if(p!= null)
           {              
               
               p.status="need water";
           }
        }

        public List<plant> GetAllPlants() =>  Data.plants.ToList();

       
        public void WaterPlant(int id)
        {
             var  p = Data.plants.FirstOrDefault(n => n.Id == id);         
           if(p!= null)
           {              
          
              if(p.status=="watering"){
                 p.status="watered";
              }
              else {
                  p.status="watering";
              }
               p.lastWatered=DateTime.Now;
                 
               
           }
        }

        public void changeStatus(int id)
        {
            var  p = Data.plants.FirstOrDefault(n => n.Id == id);         
           if(p!= null)
           {              
               
               p.status="watered";
           }
             
        }

        public plant GetPlantById(int id) => Data.plants.FirstOrDefault(n => n.Id == id);

    }
}