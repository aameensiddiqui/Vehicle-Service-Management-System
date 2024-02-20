using System;
using System.Collections.Generic;

namespace VSMS.Models
{
    public partial class Invoice
    {
        public int Invoiceid { get; set; }
        public bool Status { get; set; }
        public int Servicerequestid { get; set; }
        public int Transactionid { get; set; }

        public virtual Servicerequest Servicerequest { get; set; } = null!;
        public virtual Transaction Transaction { get; set; } = null!;
    }
}
