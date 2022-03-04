import { Migration } from '@mikro-orm/migrations';

export class Migration20220303161612 extends Migration {
  async up(): Promise<void> {
    this.addSql('create table "user" ("id" bigserial primary key, "createdAt" timestamptz(0) not null default clock_timestamp(), "updatedAt" timestamptz(0) not null default clock_timestamp(), "userName" text not null, "email" text not null, "password" text not null, "firstName" text not null, "lastName" text not null);');
    this.addSql('alter table "user" add constraint "user_userName_unique" unique ("userName");');
    this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');
  }

  async down(): Promise<void> {
    this.addSql('drop table "user";');
  }
}
