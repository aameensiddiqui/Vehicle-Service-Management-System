using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VSMS.Models;

namespace VSMS.Controllers
{
    [Route("api/[controller] / [action]")]
    [ApiController]
    [EnableCors]
    public class AllCustomersController : ControllerBase
    {
        [HttpGet]
        public List<Customer> GetCustomers()
        {
            List<Customer> customers = new List<Customer>();
            using (var db = new vsmsContext()) {
                customers = db.Customers.ToList();
            }
            return customers;
        }
    }
}
