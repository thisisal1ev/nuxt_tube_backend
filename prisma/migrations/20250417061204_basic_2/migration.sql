/*
  Warnings:

  - You are about to drop the column `image` on the `Video` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Video" DROP COLUMN "image",
ADD COLUMN     "poster" TEXT;
