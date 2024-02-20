using System;
using System.Collections.Generic;

namespace VSMS.Models
{
    public partial class Vehicle
    {
        public Vehicle()
        {
            Servicerequests = new HashSet<Servicerequest>();
        }

        public int Vehicleid { get; set; }
        public string Vehiclenumber { get; set; } = null!;
        public string Model { get; set; } = null!;
        public string Fueltype { get; set; } = null!;
        public int Registrationyear { get; set; }
        public int Brandid { get; set; }
        public int Customerid { get; set; }

        public virtual Brand Brand { get; set; } = null!;
        public virtual Customer Customer { get; set; } = null!;
        public virtual ICollection<Servicerequest> Servicerequests { get; set; }
    }
}
