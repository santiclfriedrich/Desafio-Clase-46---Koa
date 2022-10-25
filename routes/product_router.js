import Router from "koa-router";
import productController from "../controllers/product_controller.js";


const router = new Router({
  prefix: "/product",
});

//GET

router.get("/", productController.getAllProducts);

router.get("/:id", productController.getProductById);

router.post("/", productController.createProduct);

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

export default router;