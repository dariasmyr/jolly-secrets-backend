import { Injectable } from '@nestjs/common';
import { Notification } from '@prisma/client';

import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class NotificationService {
  constructor(private readonly prismaService: PrismaService) {}

  async getNotifications(
    accountId: number,
    offset: number,
    limit: number,
  ): Promise<Array<Notification>> {
    return this.prismaService.notification.findMany({
      where: {
        accountId,
      },
      skip: offset,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async getNotificationById(
    accountId: number,
    id: number,
  ): Promise<Notification | null> {
    return this.prismaService.notification.findFirst({
      where: {
        id,
        accountId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async setNotificationAsRead(id: number): Promise<Notification | null> {
    return this.prismaService.notification.update({
      where: {
        id,
      },
      data: {
        read: true,
      },
    });
  }

  async createNotification(
    title: string,
    accountId: number,
    message: string,
  ): Promise<Notification> {
    return await this.prismaService.notification.create({
      data: {
        title: title,
        accountId: accountId,
        message: message,
      },
    });
  }

  async getNotificationsByAccountId(
    accountId: number,
  ): Promise<Array<Notification>> {
    return this.prismaService.notification.findMany({
      where: {
        accountId,
      },
    });
  }

  async checkUnreadNotifications(accountId: number): Promise<boolean> {
    const notifications = await this.prismaService.notification.findMany({
      where: {
        accountId,
        read: false,
      },
    });
    return notifications.length > 0;
  }
}
