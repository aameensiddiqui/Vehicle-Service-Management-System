using System;
using System.Collections.Generic;

namespace VSMS.Models
{
    public partial class Serviceprogress
    {
        public Serviceprogress()
        {
            Transactions = new HashSet<Transaction>();
        }

        public int Serviceprogressid { get; set; }
        public DateTime? Checkin { get; set; }
        public DateTime? Stageone { get; set; }
        public DateTime? Stagetwo { get; set; }
        public DateTime? Checkout { get; set; }
        public bool? Delivered { get; set; }
        public int Servicerequestid { get; set; }

        public virtual Servicerequest Servicerequest { get; set; } = null!;
        public virtual ICollection<Transaction> Transactions { get; set; }
    }
}
