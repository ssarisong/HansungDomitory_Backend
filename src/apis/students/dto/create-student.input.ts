import { ApiProperty } from "@nestjs/swagger";
import { Column } from "typeorm";

export class CreateStudentInput {
    @ApiProperty({ description: "학번" })
    @Column()
    id: string;

    @ApiProperty({ description: "이름" })
    @Column()
    name: string;

    @ApiProperty({ description: "비밀번호" })
    @Column()
    password: string;
}