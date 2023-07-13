/*
  Warnings:

  - You are about to drop the column `antiquity_id` on the `Subcategory` table. All the data in the column will be lost.
  - You are about to drop the column `size_id` on the `Subcategory` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Subcategory" DROP CONSTRAINT "Subcategory_antiquity_id_fkey";

-- DropForeignKey
ALTER TABLE "Subcategory" DROP CONSTRAINT "Subcategory_size_id_fkey";

-- AlterTable
ALTER TABLE "Subcategory" DROP COLUMN "antiquity_id",
DROP COLUMN "size_id";
