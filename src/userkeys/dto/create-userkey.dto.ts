import { IsNotEmpty } from "class-validator";

export class CreateUserKeyDto {
    @IsNotEmpty()
    user_id: string;

    @IsNotEmpty()
    key: string;
}