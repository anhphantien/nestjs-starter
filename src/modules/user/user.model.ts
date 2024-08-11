import { ApiProperty } from '@nestjs/swagger';
import { PaginatedDto } from '~/common/dto';
import { User } from '~/entities';

export class PaginatedUser implements PaginatedDto<User> {
  @ApiProperty({ type: [User] })
  items: User[];

  @ApiProperty()
  total: number;
}
