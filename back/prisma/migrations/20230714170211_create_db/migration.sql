-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "user_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "country_id" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Country" (
    "country_id" SERIAL NOT NULL,
    "country_name" TEXT NOT NULL,
    "country_icon" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("country_id")
);

-- CreateTable
CREATE TABLE "PrincipalCategory" (
    "principal_category_id" SERIAL NOT NULL,
    "principal_category_name" TEXT NOT NULL,
    "principal_category_icon" TEXT NOT NULL,

    CONSTRAINT "PrincipalCategory_pkey" PRIMARY KEY ("principal_category_id")
);

-- CreateTable
CREATE TABLE "Subcategory" (
    "subcategory_id" SERIAL NOT NULL,
    "subcategory_name" TEXT NOT NULL,
    "subcategory_icon" TEXT NOT NULL,
    "principal_category_id" INTEGER NOT NULL,
    "size" BOOLEAN,
    "antiquity" BOOLEAN,

    CONSTRAINT "Subcategory_pkey" PRIMARY KEY ("subcategory_id")
);

-- CreateTable
CREATE TABLE "Size" (
    "size_id" SERIAL NOT NULL,
    "size_name" TEXT NOT NULL,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("size_id")
);

-- CreateTable
CREATE TABLE "Antiquity" (
    "antiquity_id" SERIAL NOT NULL,
    "antiquity_name" TEXT NOT NULL,

    CONSTRAINT "Antiquity_pkey" PRIMARY KEY ("antiquity_id")
);

-- CreateTable
CREATE TABLE "Mod" (
    "mod_id" SERIAL NOT NULL,
    "mod_title" TEXT NOT NULL,
    "mod_description" TEXT NOT NULL,
    "consoles" BOOLEAN NOT NULL,
    "multiplayer" BOOLEAN NOT NULL,
    "mod_link" TEXT NOT NULL,
    "subcategory_id" INTEGER NOT NULL,
    "antiquity_id" INTEGER NOT NULL,
    "game_id" INTEGER NOT NULL,
    "image_icon" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Mod_pkey" PRIMARY KEY ("mod_id")
);

-- CreateTable
CREATE TABLE "Game" (
    "game_id" SERIAL NOT NULL,
    "game_name" TEXT NOT NULL,
    "game_icon" TEXT NOT NULL,

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
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_ModSize_AB_unique" ON "_ModSize"("A", "B");

-- CreateIndex
CREATE INDEX "_ModSize_B_index" ON "_ModSize"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ModBrand_AB_unique" ON "_ModBrand"("A", "B");

-- CreateIndex
CREATE INDEX "_ModBrand_B_index" ON "_ModBrand"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "Country"("country_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subcategory" ADD CONSTRAINT "Subcategory_principal_category_id_fkey" FOREIGN KEY ("principal_category_id") REFERENCES "PrincipalCategory"("principal_category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mod" ADD CONSTRAINT "Mod_subcategory_id_fkey" FOREIGN KEY ("subcategory_id") REFERENCES "Subcategory"("subcategory_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mod" ADD CONSTRAINT "Mod_antiquity_id_fkey" FOREIGN KEY ("antiquity_id") REFERENCES "Antiquity"("antiquity_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mod" ADD CONSTRAINT "Mod_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "Game"("game_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mod" ADD CONSTRAINT "Mod_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
