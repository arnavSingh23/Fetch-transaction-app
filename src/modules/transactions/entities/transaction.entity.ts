import { ApiProperty } from '@nestjs/swagger';


export class Transaction {
    @ApiProperty({
        description: 'Unique identifier for the transaction',
        example: '123e4567-e89b-12d3-a456-426614174000',
    })
    id: string;

    @ApiProperty({
        description: 'The payer who is associated with the transaction',
        example: 'DANNON',
    })
    payer: string;

    @ApiProperty({
        description: 'The amount of points in the transaction',
        example: 5000,
    })
    points: number;
    @ApiProperty({
        description: 'The timestamp when the transaction occurred',
        example: '2020-11-02T14:00:00Z',
    })
    timestamp: Date;
}
