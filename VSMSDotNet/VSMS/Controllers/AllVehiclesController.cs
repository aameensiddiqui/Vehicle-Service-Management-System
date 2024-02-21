using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VSMS.Models;
using System.Collections.Generic;
using System.Linq;

namespace VSMS.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [EnableCors]
    public class AllVehiclesController : ControllerBase
    {
        [HttpGet]
        public List<Vehicle> GetVehicles()
        {
            List<Vehicle> vehicles = new List<Vehicle>();
            using (var db = new vsmsContext())
            {
                vehicles = db.Vehicles.ToList();
            }
            return vehicles;
        }
    }
}
