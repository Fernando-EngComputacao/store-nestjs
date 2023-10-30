import { Module } from '@nestjs/common';
import { UserModule } from './module/user/user.module';
import { ProductModule } from './module/product/product.module';

@Module({
  imports: [UserModule, ProductModule],
})
export class AppModule {}
