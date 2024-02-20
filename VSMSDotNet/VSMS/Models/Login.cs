using System;
using System.Collections.Generic;

namespace VSMS.Models
{
    public partial class Login
    {
        public Login()
        {
            Customers = new HashSet<Customer>();
            Servicecenters = new HashSet<Servicecenter>();
        }

        public int Loginid { get; set; }
        public string Userid { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string Answer { get; set; } = null!;
        public bool? Status { get; set; }
        public int Roleid { get; set; }
        public int Questionid { get; set; }

        public virtual Securityquestion Question { get; set; } = null!;
        public virtual Role Role { get; set; } = null!;
        public virtual ICollection<Customer> Customers { get; set; }
        public virtual ICollection<Servicecenter> Servicecenters { get; set; }
    }
}
