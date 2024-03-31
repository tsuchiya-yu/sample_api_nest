-- CreateTable
CREATE TABLE `menu_mst` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `category` ENUM('MAIN', 'SIDE', 'TOPPING', 'DRINK', 'OPTION') NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `menu_mst_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
