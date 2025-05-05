import Product from '../model/productSchema.js';

export const createProduct = async (req, res) => {
    const { name, description, price } = req.body;
    try {
        if (!name || !description || !price) {
            return res.status(400).json({ message: 'All fields are required',success: false });
        }
      await Product.create({ name, description, price });
      res.status(201).json({
        message: 'Product created successfully',
        success: true,
      });
    } catch (err) {
      res.status(500).json({ message: 'Error creating product',success: false });
    }
  };

  export const getAllProducts = async (req, res) => {
    try {
      const products = await Product.find();

        if ( products.length === 0) {
            return res.status(404).json({ message: 'No products found',success: false });
            }

      res.json({
        message: 'Products fetched successfully',
        success: true,
        products,
      });
    } catch (err) {
      res.status(500).json({ message: 'Error fetching products',success: false });
    }
  };

  export const getProductById = async (req, res) => {

    const { id } = req.query;
    try {
      const product = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!product) {
        return res.status(404).json({ message: 'Product not found',success: false });
      }
        res.status(200).json({
            message: 'Product updated successfully',
            success: true,
            product,
        });
  }
    catch (err) {
      res.status(500).json({ message: 'Error updating product',success: false });
    }
  };

    export const deleteProduct = async (req, res) => {
        const { id } = req.query;
        try {
            const product = await Product.findByIdAndDelete(id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found',success: false });
            }
            res.status(200).json({
                message: 'Product deleted successfully',
                success: true,
            });
        } catch (err) {
            res.status(500).json({ message: 'Error deleting product',success: false });
        }
    }

  