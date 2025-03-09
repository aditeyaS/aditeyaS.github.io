import Skill from "@/types/skill";
import {
  SiAppwrite,
  SiAppwriteHex,
  SiDjango,
  SiDjangoHex,
  SiDotnet,
  SiDotnetHex,
  SiExpress,
  SiExpressHex,
  SiFlask,
  SiFlaskHex,
  SiMongodb,
  SiMongodbHex,
  SiMongoose,
  SiMongooseHex,
  SiMysql,
  SiMysqlHex,
  SiNodemon,
  SiNodemonHex,
  SiPassport,
  SiPassportHex,
  SiPhpmyadmin,
  SiPhpmyadminHex,
  SiPocketbase,
  SiPocketbaseHex,
  SiPostgresql,
  SiPostgresqlHex,
  SiPrisma,
  SiPrismaHex,
  SiSpringboot,
  SiSpringbootHex,
  SiSupabase,
  SiSupabaseHex,
  SiDrizzle,
  SiDrizzleHex,
} from "@icons-pack/react-simple-icons";

export const DOT_NET: Skill = {
  name: ".Net",
  icon: <SiDotnet />,
  color: SiDotnetHex,
};

export const DJANGO: Skill = {
  name: "Django",
  icon: <SiDjango />,
  color: SiDjangoHex,
};

export const S_Express: Skill = {
  name: "Express",
  icon: <SiExpress />,
  color: SiExpressHex,
};

export const S_Flask: Skill = {
  name: "Flask",
  icon: <SiFlask />,
  color: SiFlaskHex,
};

export const SPRING_BOOT: Skill = {
  name: "Spring Boot",
  icon: <SiSpringboot />,
  color: SiSpringbootHex,
};

export const S_Prisma: Skill = {
  name: "Prisma",
  icon: <SiPrisma />,
  color: SiPrismaHex,
};

export const S_Postgresql: Skill = {
  name: "PostgreSQL",
  icon: <SiPostgresql />,
  color: SiPostgresqlHex,
};

export const S_Pocketbase: Skill = {
  name: "PocketBase",
  icon: <SiPocketbase />,
  color: SiPocketbaseHex,
};

export const S_Phpmyadmin: Skill = {
  name: "phpMyAdmin",
  icon: <SiPhpmyadmin />,
  color: SiPhpmyadminHex,
};

export const S_Passport: Skill = {
  name: "Passport",
  icon: <SiPassport />,
  color: SiPassportHex,
};

const S_Nodemon: Skill = {
  name: "Nodemon",
  icon: <SiNodemon />,
  color: SiNodemonHex,
};
const S_Mysql: Skill = {
  name: "MySQL",
  icon: <SiMysql />,
  color: SiMysqlHex,
};

const S_Mongoose: Skill = {
  name: "Mongoose",
  icon: <SiMongoose />,
  color: SiMongooseHex,
};

export const S_Mongodb: Skill = {
  name: "MongoDB",
  icon: <SiMongodb />,
  color: SiMongodbHex,
};

const S_Appwrite: Skill = {
  name: "Appwrite",
  icon: <SiAppwrite />,
  color: SiAppwriteHex,
};

const S_Supabase: Skill = {
  name: "Supabase",
  icon: <SiSupabase />,
  color: SiSupabaseHex,
};

export const S_Drizzle: Skill = {
  name: "Drizzle",
  icon: <SiDrizzle />,
  color: SiDrizzleHex,
};

export const SKILL_BACK_END = [
  S_Express,
  S_Drizzle,
  S_Mongodb,
  S_Flask,
  SPRING_BOOT,
  DJANGO,
  S_Mysql,
  S_Appwrite,
  S_Supabase,
  S_Postgresql,
  S_Nodemon,
  DOT_NET,
  S_Mongoose,
  S_Passport,
  S_Phpmyadmin,
  S_Prisma,
];
