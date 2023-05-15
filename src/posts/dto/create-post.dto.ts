import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  header: string;

  @IsString()
  @IsNotEmpty()
  body: string;
}
