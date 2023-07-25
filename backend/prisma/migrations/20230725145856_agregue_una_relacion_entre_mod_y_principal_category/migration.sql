-- AlterTable
ALTER TABLE "Mod" ADD COLUMN     "principal_category_id" INTEGER;

-- AddForeignKey
ALTER TABLE "Mod" ADD CONSTRAINT "Mod_principal_category_id_fkey" FOREIGN KEY ("principal_category_id") REFERENCES "PrincipalCategory"("principal_category_id") ON DELETE SET NULL ON UPDATE CASCADE;
