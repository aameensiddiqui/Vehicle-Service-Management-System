using System;
using System.Collections.Generic;

namespace VSMS.Models
{
    public partial class Facility
    {
        public Facility()
        {
            Packages = new HashSet<Packagedetail>();
        }

        public int Facilityid { get; set; }
        public string Facilityname { get; set; } = null!;

        public virtual ICollection<Packagedetail> Packages { get; set; }
    }
}
