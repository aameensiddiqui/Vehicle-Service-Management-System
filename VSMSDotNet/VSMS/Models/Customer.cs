using System;
using System.Collections.Generic;

namespace VSMS.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Ratings = new HashSet<Rating>();
            Vehicles = new HashSet<Vehicle>();
        }

        public int Customerid { get; set; }
        public string Firstname { get; set; } = null!;
        public string Lastname { get; set; } = null!;
        public DateTime Birthdate { get; set; }
        public string? Emailid { get; set; }
        public string? Lane { get; set; }
        public string Contactno { get; set; } = null!;
        public int Loginid { get; set; }
        public int Areaid { get; set; }

        public virtual Area Area { get; set; } = null!;
        public virtual Login Login { get; set; } = null!;
        public virtual ICollection<Rating> Ratings { get; set; }
        public virtual ICollection<Vehicle> Vehicles { get; set; }
    }
}
