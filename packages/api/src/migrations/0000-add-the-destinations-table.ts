import { Migration } from '@mikro-orm/migrations';

export class Migration20210927234531 extends Migration {
  async up(): Promise<void> {
    // this.addSql('create table "user" ("id" bigserial primary key, "createdAt" timestamptz(0) not null default clock_timestamp(), "updatedAt" timestamptz(0) not null default clock_timestamp(), "name" text not null);');
    this.addSql('CREATE TABLE "destinations" ("id" bigserial primary key, "orig" text not null, "dest" text not null, "miles" integer not null, "period" text not null);');
  }

  async down(): Promise<void> {
    this.addSql('drop table "destinations";');
  }
}
