import { Body, Controller, Get, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";

@Controller('user')
export class usersController {
    @Post('/profile')
    create(@Req() req: Request, @Res() res: Response): string {
        const body = req.body;
        res.json(body);
        return 'Received the request body using req.body!';
    }

    @Get('/hi')
    sayHello() {
        return 'say hello';
    }
}