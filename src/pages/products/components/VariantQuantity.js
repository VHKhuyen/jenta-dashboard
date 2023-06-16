import { useState } from "react";
import { request } from "../../../utils/httpRequest";

function VariantQuantity({ variant_id, setProducts }) {
  const [quantity, setQuantity] = useState(0);
  const handleSave = async () => {
    try {
      const response = await request.patch("/inventory/variants", {
        variant_id,
        quantity,
      });
      if (response.data.success) {
        setProducts((prevProducts) => {
          return prevProducts.map((productVariant) => {
            if (productVariant.product_variants_id === variant_id) {
              return response.data.productVariant[0];
            }
            return productVariant;
          });
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-control">
      <div className="input-group">
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="input input-bordered w-24"
        />
        <button className="btn btn-primary" onClick={handleSave}>
          Lưu
        </button>
      </div>
    </div>
  );
}

export default VariantQuantity;
