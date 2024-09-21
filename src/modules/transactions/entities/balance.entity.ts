import { ApiProperty } from '@nestjs/swagger';

export class Balance {
    @ApiProperty({
        description: 'The payer who has points',
        example: 'DANNON',
    })
    payer: string;

    @ApiProperty({
        description: 'The number of points available for the payer',
        example: 1000,
    })
    points: number;
}
