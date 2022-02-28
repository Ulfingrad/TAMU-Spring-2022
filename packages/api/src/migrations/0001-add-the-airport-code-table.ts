import { Migration } from '@mikro-orm/migrations';

export class Migration20210927234531 extends Migration {
  async up(): Promise<void> {
    // this.addSql('create table "user" ("id" bigserial primary key, "createdAt" timestamptz(0) not null default clock_timestamp(), "updatedAt" timestamptz(0) not null default clock_timestamp(), "name" text not null);');
    this.addSql('CREATE TABLE "ap-code" ("code" varchar(3) primary key, "city" text, "country" text);');
  }

  async down(): Promise<void> {
    this.addSql('DROP TABLE "ap-code";');
  }
}
