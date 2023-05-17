/*
  Warnings:

  - You are about to drop the column `price` on the `wish_list_wedding` table. All the data in the column will be lost.
  - Added the required column `priceBRL` to the `wish_list_wedding` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceNOK` to the `wish_list_wedding` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "wish_list_wedding" DROP COLUMN "price",
ADD COLUMN     "priceBRL" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "priceNOK" DOUBLE PRECISION NOT NULL;
