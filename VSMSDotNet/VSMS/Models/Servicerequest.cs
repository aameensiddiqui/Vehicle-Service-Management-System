using System;
using System.Collections.Generic;

namespace VSMS.Models
{
    public partial class Servicerequest
    {
        public Servicerequest()
        {
            Invoices = new HashSet<Invoice>();
            Serviceprogresses = new HashSet<Serviceprogress>();
        }

        public int Servicerequestid { get; set; }
        public bool Status { get; set; }
        public DateOnly Bookingdate { get; set; }
        public TimeOnly? Pickuptime { get; set; }
        public DateOnly Servicdate { get; set; }
        public int Vehicleid { get; set; }
        public int Servicecenterid { get; set; }
        public int Packageid { get; set; }

        public virtual Packagedetail Package { get; set; } = null!;
        public virtual Servicecenter Servicecenter { get; set; } = null!;
        public virtual Vehicle Vehicle { get; set; } = null!;
        public virtual ICollection<Invoice> Invoices { get; set; }
        public virtual ICollection<Serviceprogress> Serviceprogresses { get; set; }
    }
}
