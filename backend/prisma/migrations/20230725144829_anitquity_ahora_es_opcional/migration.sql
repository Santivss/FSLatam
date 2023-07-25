-- DropForeignKey
ALTER TABLE "Mod" DROP CONSTRAINT "Mod_antiquity_id_fkey";

-- AlterTable
ALTER TABLE "Mod" ALTER COLUMN "antiquity_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Mod" ADD CONSTRAINT "Mod_antiquity_id_fkey" FOREIGN KEY ("antiquity_id") REFERENCES "Antiquity"("antiquity_id") ON DELETE SET NULL ON UPDATE CASCADE;
