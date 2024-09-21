import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty, Min } from 'class-validator';

export class SpendPointsDto {
    @ApiProperty({
        description: 'The amount of points to spend',
        example: 5000,
    })
    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    points: number;
}
