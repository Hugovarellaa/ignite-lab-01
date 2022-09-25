import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

interface createPurchaseParams {
  productId: string;
  customerId: string;
}

@Injectable()
export class PurchaseServices {
  constructor(private prisma: PrismaService) {}

  async listAllPurchases() {
    return await this.prisma.purchase.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async listAllFromCustomer(customerId: string) {
    return await this.prisma.purchase.findMany({
      where: {
        customerId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async createPurchase({ customerId, productId }: createPurchaseParams) {
    const product = await this.prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!product) {
      throw new Error('Product not found');
    }

    return await this.prisma.purchase.create({
      data: {
        customerId,
        productId,
      },
    });
  }
}