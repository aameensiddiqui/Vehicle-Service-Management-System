using System;
using System.Collections.Generic;

namespace VSMS.Models
{
    public partial class Transaction
    {
        public Transaction()
        {
            Invoices = new HashSet<Invoice>();
        }

        public int Transactionid { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
        public string Paymentmode { get; set; } = null!;
        public int Serviceprogressid { get; set; }

        public virtual Serviceprogress Serviceprogress { get; set; } = null!;
        public virtual ICollection<Invoice> Invoices { get; set; }
    }
}
