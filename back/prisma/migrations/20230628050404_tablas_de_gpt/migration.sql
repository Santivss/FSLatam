/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - Added the required column `country_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
DROP COLUMN "name",
ADD COLUMN     "country_id" INTEGER NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "user_id" SERIAL NOT NULL,
ADD COLUMN     "user_name" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("user_id");

-- CreateTable
CREATE TABLE "Country" (
    "country_id" SERIAL NOT NULL,
    "country_name" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("country_id")
);

-- CreateTable
CREATE TABLE "PrincipalCategory" (
    "principal_category_id" SERIAL NOT NULL,
    "principal_category_name" TEXT NOT NULL,

    CONSTRAINT "PrincipalCategory_pkey" PRIMARY KEY ("principal_category_id")
);

-- CreateTable
CREATE TABLE "Subcategory" (
    "subcategory_id" SERIAL NOT NULL,
    "subcategory_name" TEXT NOT NULL,
    "principal_category_id" INTEGER NOT NULL,

    CONSTRAINT "Subcategory_pkey" PRIMARY KEY ("subcategory_id")
);

-- CreateTable
CREATE TABLE "Mod" (
    "mod_id" SERIAL NOT NULL,
    "mod_title" TEXT NOT NULL,
    "mod_description" TEXT NOT NULL,
    "consoles" TEXT[],
    "multiplayer" BOOLEAN NOT NULL,
    "mod_link" TEXT NOT NULL,
    "subcategory_id" INTEGER NOT NULL,
    "antiquity_id" INTEGER NOT NULL,
    "game_id" INTEGER NOT NULL,

    CONSTRAINT "Mod_pkey" PRIMARY KEY ("mod_id")
);

-- CreateTable
CREATE TABLE "Antiquity" (
    "antiquity_id" SERIAL NOT NULL,
    "antiquity_name" TEXT NOT NULL,

    CONSTRAINT "Antiquity_pkey" PRIMARY KEY ("antiquity_id")
);

-- CreateTable
CREATE TABLE "Game" (
    "game_id" SERIAL NOT NULL,
    "game_name" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("game_id")
);

-- CreateTable
CREATE TABLE "Image" (
    "image_id" SERIAL NOT NULL,
    "image_link" TEXT NOT NULL,
    "mod_id" INTEGER NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("image_id")
);

-- CreateTable
CREATE TABLE "Size" (
    "size_id" SERIAL NOT NULL,
    "size_name" TEXT NOT NULL,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("size_id")
);

-- CreateTable
CREATE TABLE "Brand" (
    "brand_id" SERIAL NOT NULL,
    "brand_name" TEXT NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("brand_id")
);

-- CreateTable
CREATE TABLE "_ModSize" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ModBrand" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ModSize_AB_unique" ON "_ModSize"("A", "B");

-- CreateIndex
CREATE INDEX "_ModSize_B_index" ON "_ModSize"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ModBrand_AB_unique" ON "_ModBrand"("A", "B");

-- CreateIndex
CREATE INDEX "_ModBrand_B_index" ON "_ModBrand"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "Country"("country_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subcategory" ADD CONSTRAINT "Subcategory_principal_category_id_fkey" FOREIGN KEY ("principal_category_id") REFERENCES "PrincipalCategory"("principal_category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mod" ADD CONSTRAINT "Mod_subcategory_id_fkey" FOREIGN KEY ("subcategory_id") REFERENCES "Subcategory"("subcategory_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mod" ADD CONSTRAINT "Mod_antiquity_id_fkey" FOREIGN KEY ("antiquity_id") REFERENCES "Antiquity"("antiquity_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mod" ADD CONSTRAINT "Mod_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "Game"("game_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_mod_id_fkey" FOREIGN KEY ("mod_id") REFERENCES "Mod"("mod_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ModSize" ADD CONSTRAINT "_ModSize_A_fkey" FOREIGN KEY ("A") REFERENCES "Mod"("mod_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ModSize" ADD CONSTRAINT "_ModSize_B_fkey" FOREIGN KEY ("B") REFERENCES "Size"("size_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ModBrand" ADD CONSTRAINT "_ModBrand_A_fkey" FOREIGN KEY ("A") REFERENCES "Brand"("brand_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ModBrand" ADD CONSTRAINT "_ModBrand_B_fkey" FOREIGN KEY ("B") REFERENCES "Mod"("mod_id") ON DELETE CASCADE ON UPDATE CASCADE;
