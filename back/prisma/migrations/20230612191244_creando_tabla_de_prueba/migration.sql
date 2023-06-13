-- CreateTable
CREATE TABLE "testUsers" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "testUsers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "testUsers_username_key" ON "testUsers"("username");
