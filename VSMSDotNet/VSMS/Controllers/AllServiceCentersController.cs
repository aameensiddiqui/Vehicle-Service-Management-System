using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VSMS.Models;

namespace VSMS.Controllers
{
    [Route("api/[controller] / [action]")]
    [ApiController]
    [EnableCors]
    public class AllServiceCentersController : ControllerBase
    {
        [HttpGet]
        public List<Servicecenter> GetServicecenters() {
            List<Servicecenter> servcent =  new List<Servicecenter>();
            using (var db = new vsmsContext())
            {
                servcent = db.Servicecenters.ToList();
            }
            return servcent;
        }
    }
}
