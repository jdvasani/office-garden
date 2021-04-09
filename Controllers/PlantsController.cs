
using Microsoft.AspNetCore.Mvc;
using plants.Data;

namespace plants.Controllers
{
     [Route("api/[controller]")]
    public class PlantsController: Controller
    {
        private IPlantService _service;
        public PlantsController(IPlantService service)
        {
            this._service=service;
        }
        
        [HttpGet("[action]")]
        public IActionResult GetAllPlants()
        {
            var allPlants = _service.GetAllPlants();
            return Ok(allPlants);
        }


        [HttpPost("dryStatus/{id}")]

        public IActionResult dryStatus(int id)
        {
            _service.dryStatus(id);
            return Ok();

        }

         [HttpGet("GetPlantById/{id}")]
        public IActionResult GetPlantById(int id)
        {
            var plant = _service.GetPlantById(id);
            return Ok(plant);
        }
    
     [HttpPut("WaterPlant/{id}")]
     public IActionResult WaterPlant(int id)
    {      
           _service.WaterPlant(id);
         return Ok();
    }


    [HttpPut("changeStatus/{id}")]
    public IActionResult changeStatus(int id)
    {
        _service.changeStatus(id);
        return Ok();
    }
    
    }

    
}