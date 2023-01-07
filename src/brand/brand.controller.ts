import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Param,
    UseGuards,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
  import { BrandService } from './brand.service';
  import { Brand } from './brand.entity';
  import { Role } from '../auth/role.decorator';
  import { Roles } from '../auth/roles.enum';
  import { AuthGuard } from '../auth/auth.guard';
  import { CreateBrandDto } from './dto/create-brand.dto';
  import { UpdateBrandDto } from './dto/update-brand.dto';
  
  @Controller('brands')
  @UseGuards(AuthGuard)
  export class BrandController {
    constructor(private readonly brandService: BrandService) {}
  
    @Get()
    async findAll(): Promise<Brand[]> {
      return this.brandService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Brand> {
      return this.brandService.findOne(id);
    }
  
    @Post()
    @Role(Roles.ADMIN)
    @UsePipes(ValidationPipe)
    async create(@Body() createBrandDto: CreateBrandDto): Promise<Brand> {
      return this.brandService.create(createBrandDto);
    }
  
    @Patch(':id')
    @Role(Roles.ADMIN)
    async update(
      @Param('id') id: number,
      @Body() updateBrandDto: UpdateBrandDto,
    ): Promise<Brand> {
      return this.brandService.update(id, updateBrandDto);
    }
  
    @Delete(':id')
    @Role(Roles.ADMIN)
    async delete(@Param('id') id: number): Promise<void> {
        return this.brandService.delete(id);
      }
    }