import { Injectable, BadRequestException } from '@nestjs/common';
import { SpendPointsDto } from "./dto/spend-points.dto";
import { Transaction } from "./entities/transaction.entity";
import { AddPointsDto } from "./dto/add-points.dto";


@Injectable()
export class TransactionsService {
    private transactions: Transaction[] = [];

    addPoints(addPointsDto: AddPointsDto): void {
        const newTransaction: Transaction = {
            id: this.generateId(),
            payer: addPointsDto.payer,
            points: addPointsDto.points,
            timestamp: new Date(addPointsDto.timestamp),
        };
        this.transactions.push(newTransaction);
    }

    spendPoints(spendPointsDto: SpendPointsDto): { payer: string; points: number }[] {
        const totalPoints = this.getTotalPoints();
        if (totalPoints < spendPointsDto.points) {
            throw new BadRequestException('Not enough points available');
        }

        let toSpend = spendPointsDto.points;
        const spent: { payer: string; points: number }[] = [];

        this.transactions.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());

        for (const transaction of this.transactions) {
            if (toSpend <= 0) break;

            const availablePoints = Math.min(transaction.points, toSpend);
            spent.push({ payer: transaction.payer, points: -availablePoints });
            transaction.points -= availablePoints;
            toSpend -= availablePoints;
        }

        return spent;
    }

    getBalance(): Record<string, number> {
        return this.transactions.reduce((acc, t) => {
            acc[t.payer] = (acc[t.payer] || 0) + t.points;
            return acc;
        }, {} as Record<string, number>);
    }

    private generateId(): string {
        return (Math.random() * 100000).toString();
    }

    private getTotalPoints(): number {
        return this.transactions.reduce((acc, t) => acc + t.points, 0);
    }
}
