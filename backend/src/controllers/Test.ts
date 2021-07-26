import {
    Controller,
    Get,
    Params,
    Query,
    Body,
    Post,
    Header
} from 'koa-ts-controllers';

@Controller('/test')
class TestController {
    // @Get('/hello')
    // async hello(a:any){
    //     console.log(a.b)
    //     return 'Hello Test';
    // }
    @Get('/user/:id(\\d+)')
    async getUser(
        @Params() p:{id: number}
    ){
        return '当前params中的用户id是:'+p.id;
    }
    // @Get('/user')
    // async getUser(
    //     @Query() q:{id: number}
    // ){
    //     return '当前params中的用户id是:'+q.id;
    // }

    // @Post('/user')
    // async postUser(
    //     @Body() body:{
    //         name:string;
    //         password:string
    //     },
    //     @Header() h: any
    // ){
    //     return `当前提交的数据时:${body}`;
    // }

}