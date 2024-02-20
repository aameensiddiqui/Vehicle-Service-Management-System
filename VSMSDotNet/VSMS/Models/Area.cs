using System;
using System.Collections.Generic;

namespace VSMS.Models
{
    public partial class Area
    {
        public Area()
        {
            Customers = new HashSet<Customer>();
            Servicecenters = new HashSet<Servicecenter>();
        }

        public int Areaid { get; set; }
        public string Areaname { get; set; } = null!;
        public int Pincode { get; set; }
        public int Cityid { get; set; }

        public virtual City City { get; set; } = null!;
        public virtual ICollection<Customer> Customers { get; set; }
        public virtual ICollection<Servicecenter> Servicecenters { get; set; }
    }
}
