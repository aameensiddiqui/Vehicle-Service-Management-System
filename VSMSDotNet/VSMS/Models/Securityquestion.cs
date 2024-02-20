using System;
using System.Collections.Generic;

namespace VSMS.Models
{
    public partial class Securityquestion
    {
        public Securityquestion()
        {
            Logins = new HashSet<Login>();
        }

        public int Questionid { get; set; }
        public string Questiontext { get; set; } = null!;

        public virtual ICollection<Login> Logins { get; set; }
    }
}
