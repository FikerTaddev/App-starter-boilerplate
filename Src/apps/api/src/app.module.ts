import { Module } from '@nestjs/common';
import {ProductTestModule} from '@repo/products/prouduct-test/backend/index.js';
//@repo/products/prouduct-test/backend/index.js
@Module({
  imports: [ProductTestModule],
})
export class AppModule {}
