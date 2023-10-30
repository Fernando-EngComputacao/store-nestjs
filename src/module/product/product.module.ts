import { Module } from "@nestjs/common";
import { ProductRepository } from "./product.respository";
import { ProductController } from "./product.controller";

@Module({
    controllers: [ProductController],
    providers: [ProductRepository]
})
export class ProductModule{}

