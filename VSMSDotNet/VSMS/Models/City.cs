using System;
using System.Collections.Generic;

namespace VSMS.Models
{
    public partial class City
    {
        public City()
        {
            Areas = new HashSet<Area>();
        }

        public int Cityid { get; set; }
        public string Cityname { get; set; } = null!;

        public virtual ICollection<Area> Areas { get; set; }
    }
}
