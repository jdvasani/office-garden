using System;
using System.Collections.Generic;

namespace plants.Data
{
    public interface IPlantService
    {
        List<plant> GetAllPlants();

        plant WaterPlant(int id);

        void  dryStatus(int id);
        
        void changeStatus(int id);

        plant GetPlantById(int id);
    }
}