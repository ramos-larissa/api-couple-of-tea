/*
  Warnings:

  - You are about to drop the column `buyerId` on the `wish_list_wedding` table. All the data in the column will be lost.
  - You are about to drop the `buyers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "wish_list_wedding" DROP CONSTRAINT "wish_list_wedding_buyerId_fkey";

-- AlterTable
ALTER TABLE "wish_list_wedding" DROP COLUMN "buyerId",
ADD COLUMN     "buyer" JSONB;

-- DropTable
DROP TABLE "buyers";
