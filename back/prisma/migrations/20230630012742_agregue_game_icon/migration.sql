/*
  Warnings:

  - Added the required column `game_icon` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" ADD COLUMN "game_icon" TEXT NOT NULL DEFAULT 'default_value';

