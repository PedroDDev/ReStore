using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models
{
    [Table("re_Basket_Items")]
    public class BasketItem
    {
        public int Id { get; set; }

        public int Quantity { get; set; }

        public int ProductId { get; set; }

        public Product Product { get; set; }

        public int BasketId { get; set; }
        public Basket Basket { get; set; }
    }
}