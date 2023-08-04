const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// getAll weapons
router.get('/', async function(req, res, next) {
  try {
    const weapons = await prisma.weapons.findMany();
    res.status(200).json(weapons);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// getById weapons
router.get('/:id', async function(req, res, next) {
  try {
    const weapons = await prisma.weapons.findUnique({
      where: {
        id: +req.params.id
      }
    });
    res.status(200).json(weapons);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// update weapons
router.patch('/:id', async function(req, res, next) {
  try {
    const weapons = await prisma.weapons.updateMany({
      data: req.body,
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.status(200).json(weapons);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// delete weapons
router.delete('/:id', async function(req, res, next) {
  try {
    const weapons = await prisma.weapons.delete({
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.status(200).json(weapons);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// create weapons
router.post('/', async function(req, res, next) {
  try {
    const weapons = await prisma.weapons.create({
      data: req.body,
    });
    res.status(201).json(weapons);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

module.exports = router;
