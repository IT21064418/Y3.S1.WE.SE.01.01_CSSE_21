import { useState } from 'react'
import "./ItemForm.css";

const ItemForm = () => {

  
  const [productId, setProductId] = useState('')
  const [productName, setProductName] = useState('')
  const [productDescription, setProductDescription] = useState('')
  const [productFeatures, setProductFeatures] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [shippingInformation, setShippingInformation] = useState('')
  const [returnPolicy, setReturnPolicy] = useState('')
  const [warrantyInformation, setWarrantyInformation] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const item = {
      product_id : productId,
      product_name: productName,
      product_description: productDescription,
      product_features: productFeatures,
      product_price: productPrice,
      shipping_information: shippingInformation,
      return_policy: returnPolicy,
      Warranty_Information: warrantyInformation
    }

    const items = JSON.parse(localStorage.getItem('items')) || [];
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));

  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Item</h3>

      <label>Product ID:</label>
      <input
        type="text"
        onChange={(e) => setProductId(e.target.value)}
        value={productId}
      />

      <label>Product Name:</label>
      <input
        type="text"
        onChange={(e) => setProductName(e.target.value)}
        value={productName}
      />

      <label>Product Description:</label>
      <input
        type="text"
        onChange={(e) => setProductDescription(e.target.value)}
        value={productDescription}
      />

      <label>Product Features:</label>
      <input
        type="text"
        onChange={(e) => setProductFeatures(e.target.value)}
        value={productFeatures}
      />

      <label>Product Price:</label>
      <input
        type="number"
        min="0"
        step="0.01"
        onChange={(e) => setProductPrice(e.target.value)}
        value={productPrice}
      />

      <label>Shipping Information:</label>
      <input
        type="text"
        onChange={(e) => setShippingInformation(e.target.value)}
        value={shippingInformation}
      />

      <label>Return Policy:</label>
      <input
        type="text"
        onChange={(e) => setReturnPolicy(e.target.value)}
        value={returnPolicy}
      />

      <label>Warranty Information:</label>
      <input
        type="text"
        onChange={(e) => setWarrantyInformation(e.target.value)}
        value={warrantyInformation}
      />

      <button>Add Item</button>

      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default ItemForm
