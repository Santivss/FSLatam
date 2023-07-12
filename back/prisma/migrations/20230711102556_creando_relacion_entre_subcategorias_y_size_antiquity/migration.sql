-- AlterTable
ALTER TABLE "Mod" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Subcategory" ADD COLUMN     "antiquity_id" INTEGER,
ADD COLUMN     "size_id" INTEGER;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "Subcategory" ADD CONSTRAINT "Subcategory_size_id_fkey" FOREIGN KEY ("size_id") REFERENCES "Size"("size_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subcategory" ADD CONSTRAINT "Subcategory_antiquity_id_fkey" FOREIGN KEY ("antiquity_id") REFERENCES "Antiquity"("antiquity_id") ON DELETE SET NULL ON UPDATE CASCADE;
