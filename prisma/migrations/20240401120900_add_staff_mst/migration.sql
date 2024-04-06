-- CreateTable
CREATE TABLE `staff_mst` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `name_kana` VARCHAR(191) NOT NULL,
    `shop_mst_code` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `staff_mst` ADD CONSTRAINT `staff_mst_shop_mst_code_fkey` FOREIGN KEY (`shop_mst_code`) REFERENCES `shop_mst`(`code`) ON DELETE SET NULL ON UPDATE CASCADE;
