/*
  Warnings:

  - You are about to drop the column `description` on the `wish_list_wedding` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `wish_list_wedding` table. All the data in the column will be lost.
  - Added the required column `descriptionBRL` to the `wish_list_wedding` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionNOK` to the `wish_list_wedding` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameBRL` to the `wish_list_wedding` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameNOK` to the `wish_list_wedding` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `wish_list_wedding` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "wish_list_wedding" DROP COLUMN "description",
DROP COLUMN "name",
ADD COLUMN     "descriptionBRL" TEXT NOT NULL,
ADD COLUMN     "descriptionNOK" TEXT NOT NULL,
ADD COLUMN     "nameBRL" TEXT NOT NULL,
ADD COLUMN     "nameNOK" TEXT NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;
