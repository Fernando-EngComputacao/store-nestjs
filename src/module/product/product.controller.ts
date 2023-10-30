import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductRepository } from "./product.respository";
import { CreateProductDTO } from "./dto/product.dto";


@Controller('/product')
export class ProductController {
    constructor(private productRepository: ProductRepository) {}

    @Post()
    async createProduct(@Body() productData: CreateProductDTO) {
        return this.productRepository.save(productData);
    }

    @Get()
    async listProducts() {
        return this.productRepository.findAll();
    }
}