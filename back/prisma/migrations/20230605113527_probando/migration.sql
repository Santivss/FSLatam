-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nickname" TEXT NOT NULL,
    "fullName" TEXT,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "icon_profile" TEXT NOT NULL DEFAULT 'default_icon_user',
    "country" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mods" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "version" TEXT NOT NULL DEFAULT '1.0.0',
    "image_high" TEXT NOT NULL,
    "image_low" TEXT NOT NULL,
    "preview_video" TEXT,
    "link_mod" TEXT NOT NULL,
    "downloads_count" INTEGER NOT NULL,
    "stars_count" INTEGER NOT NULL,
    "compatibility" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Mods_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_nickname_key" ON "User"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "Mods_link_mod_key" ON "Mods"("link_mod");

-- AddForeignKey
ALTER TABLE "Mods" ADD CONSTRAINT "Mods_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
