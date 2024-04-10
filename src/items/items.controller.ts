import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { creatItemDto } from './dto/create-item.dto'
import { ItemsService } from './items.service';
import { Item } from './interfaces/items.interface'

@Controller('items')
export class ItemsController {

    constructor(private readonly itemservice: ItemsService) { }

    @Get()

    findall(): Promise<Item[]> {

        return this.itemservice.findall()
    }

    @Get(':id')

    findOne(@Param('id') id: string): Promise<Item> {

        // return `Item no:${params.id}`
        return this.itemservice.findOne(id)
    }

    @Post()

    createItem(@Body() itemdto: creatItemDto): Promise<Item> {

        return this.itemservice.createItem(itemdto);
    }

    @Put(':id')
    findOneandUpdate(@Body() updateitemDto: creatItemDto,
        @Param('id') id: string): Promise<Item> {

        return this.itemservice.updateItem(id, updateitemDto)

    }


    @Delete('/:id')
    deleteItem(@Param('id') id: string): Promise<Item> {

        return this.itemservice.deleteItem(id)

    }
}
