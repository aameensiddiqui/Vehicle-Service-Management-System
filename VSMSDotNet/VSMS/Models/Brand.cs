using System;
using System.Collections.Generic;

namespace VSMS.Models
{
    public partial class Brand
    {
        public Brand()
        {
            Servicecenters = new HashSet<Servicecenter>();
            Vehicles = new HashSet<Vehicle>();
        }

        public int Brandid { get; set; }
        public string Bname { get; set; } = null!;

        public virtual ICollection<Servicecenter> Servicecenters { get; set; }
        public virtual ICollection<Vehicle> Vehicles { get; set; }
    }
}
