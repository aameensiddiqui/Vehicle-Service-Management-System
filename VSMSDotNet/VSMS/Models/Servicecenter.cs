using System;
using System.Collections.Generic;

namespace VSMS.Models
{
    public partial class Servicecenter
    {
        public Servicecenter()
        {
            Packagedetails = new HashSet<Packagedetail>();
            Ratings = new HashSet<Rating>();
            Servicerequests = new HashSet<Servicerequest>();
        }

        public int Servicecenterid { get; set; }
        public string Scname { get; set; } = null!;
        public string Emailid { get; set; } = null!;
        public string Contactno { get; set; } = null!;
        public string Lane { get; set; } = null!;
        public int Brandid { get; set; }
        public int Bookinglimit { get; set; }
        public int Areaid { get; set; }
        public int Loginid { get; set; }

        public virtual Area Area { get; set; } = null!;
        public virtual Brand Brand { get; set; } = null!;
        public virtual Login Login { get; set; } = null!;
        public virtual ICollection<Packagedetail> Packagedetails { get; set; }
        public virtual ICollection<Rating> Ratings { get; set; }
        public virtual ICollection<Servicerequest> Servicerequests { get; set; }
    }
}
