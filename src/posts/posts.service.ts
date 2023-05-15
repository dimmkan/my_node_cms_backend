import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './entities/post.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postsRepository: Repository<PostEntity>,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<PostEntity> {
    const newPost = new PostEntity();
    Object.assign(newPost, createPostDto);
    return await this.postsRepository.save(newPost);
  }

  async findAll(): Promise<PostEntity[]> {
    return await this.postsRepository.find();
  }

  async findOne(id: number): Promise<PostEntity> {
    return await this.postsRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<PostEntity> {
    const updatedPost = await this.postsRepository.findOne({ where: { id } });
    Object.assign(updatedPost, updatePostDto);
    return await this.postsRepository.save(updatedPost);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.postsRepository.delete(id);
  }
}
