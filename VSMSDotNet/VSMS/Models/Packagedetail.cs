using System;
using System.Collections.Generic;

namespace VSMS.Models
{
    public partial class Packagedetail
    {
        public Packagedetail()
        {
            Servicerequests = new HashSet<Servicerequest>();
            Facilities = new HashSet<Facility>();
        }

        public int Packagedetailsid { get; set; }
        public string Packagename { get; set; } = null!;
        public decimal Cost { get; set; }
        public int Servicecenterid { get; set; }

        public virtual Servicecenter Servicecenter { get; set; } = null!;
        public virtual ICollection<Servicerequest> Servicerequests { get; set; }

        public virtual ICollection<Facility> Facilities { get; set; }
    }
}
