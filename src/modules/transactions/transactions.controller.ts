import {Controller, Get, Post, Body} from '@nestjs/common';
import {TransactionsService} from './transactions.service';
import {ApiTags, ApiOperation, ApiResponse} from '@nestjs/swagger';
import {SpendPointsDto} from "./dto/spend-points.dto";
import {AddPointsDto} from "./dto/add-points.dto";

@ApiTags('transactions')
@Controller('transactions')
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService) {
    }

    @ApiOperation({summary: 'Add points to a payer'})
    @ApiResponse({status: 200, description: 'Points added successfully'})
    @Post('add')
    addPoints(@Body() addPointsDto: AddPointsDto) {
        return this.transactionsService.addPoints(addPointsDto);
    }

    @ApiOperation({summary: 'Spend points'})
    @ApiResponse({
        status: 200,
        description: 'Points spent successfully',
        type: Array,
    })
    @Post('spend')
    spendPoints(@Body() spendPointsDto: SpendPointsDto) {
        return this.transactionsService.spendPoints(spendPointsDto);
    }

    @ApiOperation({summary: 'Get current points balance'})
    @ApiResponse({
        status: 200,
        description: 'Returns the current balance per payer',
    })

    @Get('balance')
    getBalance() {
        return this.transactionsService.getBalance();
    }
}