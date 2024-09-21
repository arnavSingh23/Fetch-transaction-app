import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsISO8601 } from 'class-validator';

export class AddPointsDto {
    @ApiProperty({
        description: 'The payer who is adding the points',
        example: 'DANNON',
    })
    @IsString()
    @IsNotEmpty()
    payer: string;

    @ApiProperty({
        description: 'The amount of points being added',
        example: 5000,
    })
    @IsNumber()
    @IsNotEmpty()
    points: number;

    @ApiProperty({
        description: 'The timestamp of when the points were added',
        example: '2020-11-02T14:00:00Z',
    })
    @IsISO8601()
    timestamp: string;
}
