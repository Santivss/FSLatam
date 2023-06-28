/*
  Warnings:

  - Changed the type of `consoles` on the `Mod` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Mod" DROP COLUMN "consoles",
ADD COLUMN     "consoles" BOOLEAN NOT NULL;
