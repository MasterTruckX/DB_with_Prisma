const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// getAll Subcategory
router.get('/', async function(req, res, next) {
  try {
    const subcategory = await prisma.equipmentSubcategory.findMany();
    res.status(200).json(subcategory);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// getById Subcategory
router.get('/:id', async function(req, res, next) {
  try {
    const subcategory = await prisma.equipmentSubcategory.findUnique({
      where: {
        id: +req.params.id
      }
    });
    res.status(200).json(subcategory);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// update Subcategory
router.patch('/:id', async function(req, res, next) {
  try {
    const equipmentSubcategory = await prisma.equipmentSubcategory.updateMany({
      data: req.body,
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.status(200).json(equipmentSubcategory);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// delete Subcategory
router.delete('/:id', async function(req, res, next) {
  try {
    const subcategory = await prisma.equipmentSubcategory.delete({
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.status(200).json(subcategory);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// create Subcategory
router.post('/', async function(req, res, next) {
  try {
    const subcategory = await prisma.equipmentSubcategory.create({
      data: req.body,
    });
    res.status(201).json(subcategory);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

module.exports = router;
