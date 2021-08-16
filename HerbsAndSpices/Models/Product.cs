using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HerbsAndSpices.Models
{
    public class Product
    {
        public int ProductID { get; set; }
        public string ProductName { get; set; }
        public double UnitPrice { get; set; }
        public int UnitsInStock { get; set; }
        public string DeliveryOn { get; set; }
       
    }
}