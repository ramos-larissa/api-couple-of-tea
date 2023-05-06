-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Tag" ADD VALUE 'BIRTHDAY';
ALTER TYPE "Tag" ADD VALUE 'CHRISTMAS';
ALTER TYPE "Tag" ADD VALUE 'VALENTINES';

-- CreateTable
CREATE TABLE "wish_list_wedding" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "link" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "buyerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "wish_list_wedding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "buyer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "buyer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "wish_list_wedding" ADD CONSTRAINT "wish_list_wedding_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "buyer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
