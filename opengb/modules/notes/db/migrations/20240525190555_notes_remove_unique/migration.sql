/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `UserNotes` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "UserNotes_userId_key";

-- CreateIndex
CREATE UNIQUE INDEX "UserNotes_id_key" ON "UserNotes"("id");
