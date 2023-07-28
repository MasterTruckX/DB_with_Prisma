-- CreateTable
CREATE TABLE "equipmentCategories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "equipmentCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "equipmentSubcategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "id_equipmentCategories" INTEGER NOT NULL,

    CONSTRAINT "equipmentSubcategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weapon_arsenal" (
    "damagetype" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "id_equipmentsubcategory" INTEGER NOT NULL,

    CONSTRAINT "weapon_arsenal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weapon_stats" (
    "id" SERIAL NOT NULL,
    "physical_attack" INTEGER NOT NULL,
    "magic_attack" INTEGER NOT NULL,
    "fire_attack" INTEGER NOT NULL,
    "light_attack" INTEGER NOT NULL,
    "holy_attack" INTEGER NOT NULL,
    "critical_attack" INTEGER NOT NULL,
    "physical_guard" INTEGER NOT NULL,
    "magic_guard" INTEGER NOT NULL,
    "fire_guard" INTEGER NOT NULL,
    "ligth_guard" INTEGER NOT NULL,
    "holy_guard" INTEGER NOT NULL,
    "boost_guard" INTEGER NOT NULL,
    "str_scaling" INTEGER NOT NULL,
    "int_scaling" INTEGER NOT NULL,
    "dex_scaling" INTEGER NOT NULL,
    "fai_scaling" INTEGER NOT NULL,
    "arc_scaling" INTEGER NOT NULL,
    "str_required" INTEGER NOT NULL,
    "int_required" INTEGER NOT NULL,
    "dex_required" INTEGER NOT NULL,
    "fai_required" INTEGER NOT NULL,
    "arc_required" INTEGER NOT NULL,
    "id_weapon_upgrades" INTEGER NOT NULL,

    CONSTRAINT "weapon_stats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weapon_upgrades" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "id_weapons" INTEGER NOT NULL,

    CONSTRAINT "weapon_upgrades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weapons" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "id_weapon_arsenal" INTEGER NOT NULL,

    CONSTRAINT "weapons_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "equipmentSubcategory" ADD CONSTRAINT "equipmentSubcategory_id_equipmentCategories_fkey" FOREIGN KEY ("id_equipmentCategories") REFERENCES "equipmentCategories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "weapon_arsenal" ADD CONSTRAINT "weapon_arsenal_id_equipmentsubcategory_fkey" FOREIGN KEY ("id_equipmentsubcategory") REFERENCES "equipmentSubcategory"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "weapon_stats" ADD CONSTRAINT "weapon_stats_id_weapon_upgrades_fkey" FOREIGN KEY ("id_weapon_upgrades") REFERENCES "weapon_upgrades"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "weapon_upgrades" ADD CONSTRAINT "weapon_upgrades_id_weapons_fkey" FOREIGN KEY ("id_weapons") REFERENCES "weapons"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "weapons" ADD CONSTRAINT "weapons_id_weapon_arsenal_fkey" FOREIGN KEY ("id_weapon_arsenal") REFERENCES "weapon_arsenal"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
