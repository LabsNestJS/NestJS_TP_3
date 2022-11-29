import { NestFactory } from "@nestjs/core";
import { AppModule } from "../app.module";
import { randEmail, randFilePath, randFirstName, randJobTitle, randLastName, randNumber, randPassword, randSequence, randSkill, randUserName } from "@ngneat/falso";
import { UserService } from "../user/user.service";
import { CvService } from "../cv/cv.service";
import { SkillService } from "../skill/skill.service";
import { User } from "../user/entity/userEntity";
import { Cv } from "../cv/entity/cvEntity";
import { Skill } from "../skill/entity/skillEntity";

async function bootstrap () {
    const app = await NestFactory.createApplicationContext(AppModule);
    const userService = app.get(UserService);
    const cvService = app.get(CvService);
    const skillService = app.get(SkillService);
    const skills: Skill[]=[];
    for (let i=0;i<10;i++){
        const newUser = new User();
        newUser.username = randUserName();
        newUser.email = randEmail();
        newUser.password = randPassword();
        await userService.addUser(newUser);
        
        const newCv = new Cv();
        newCv.name = randLastName();
        newCv.firstname = randFirstName();
        newCv.age = randNumber();
        newCv.cin = randSequence();
        newCv.job = randJobTitle();
        newCv.path = randFilePath();
        newCv.skills=skills;
        newCv.user=newUser;
        await cvService.addCv(newCv);
        
        const newSkill = new Skill();
        newSkill.designation = randSkill();
        skills[i]=newSkill;
        await skillService.addSkill(newSkill);
    }
    await app.close();
}
bootstrap();

