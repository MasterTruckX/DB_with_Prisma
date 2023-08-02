const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// getAll Category
router.get('/', async function(req, res, next) {
  try {
    const category = await prisma.equipmentCategories.findMany();
    res.status(200).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// getById Category
router.get('/:id', async function(req, res, next) {
  try {
    const category = await prisma.equipmentCategories.findUnique({
      where: {
        id: +req.params.id
      }
    });
    res.status(200).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// create Category
router.post('/', async function(req, res, next) {
  try {
    const category = await prisma.equipmentCategories.create({
      data: req.body,
    });
    res.status(201).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

module.exports = router;
