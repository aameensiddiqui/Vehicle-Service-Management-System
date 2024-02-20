using System;
using System.Collections.Generic;

namespace VSMS.Models
{
    public partial class Rating
    {
        public int Ratingid { get; set; }
        public int? Rating1 { get; set; }
        public string? Comment { get; set; }
        public int? Customerid { get; set; }
        public int? Servicecenterid { get; set; }

        public virtual Customer? Customer { get; set; }
        public virtual Servicecenter? Servicecenter { get; set; }
    }
}
