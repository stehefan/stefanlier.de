/*
  Warnings:

  - You are about to drop the column `timeframe` on the `Experience` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Experience_timeframe_key";

-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "timeframe";
