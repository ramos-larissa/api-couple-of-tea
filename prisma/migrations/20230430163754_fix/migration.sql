/*
  Warnings:

  - You are about to drop the `buyer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "wish_list_wedding" DROP CONSTRAINT "wish_list_wedding_buyerId_fkey";

-- DropTable
DROP TABLE "buyer";

-- CreateTable
CREATE TABLE "buyers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "buyers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "wish_list_wedding" ADD CONSTRAINT "wish_list_wedding_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "buyers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
