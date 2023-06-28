/*
  Warnings:

  - Added the required column `country_icon` to the `Country` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_icon` to the `Mod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `principal_category_icon` to the `PrincipalCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subcategory_icon` to the `Subcategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "country_icon" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Mod" ADD COLUMN     "image_icon" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PrincipalCategory" ADD COLUMN     "principal_category_icon" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Subcategory" ADD COLUMN     "subcategory_icon" TEXT NOT NULL;
