const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// getAll upgrades
router.get('/', async function(req, res, next) {
  try {
    const upgrades = await prisma.weapon_upgrades.findMany();
    res.status(200).json(upgrades);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// getById upgrades
router.get('/:id', async function(req, res, next) {
  try {
    const upgrades = await prisma.weapon_upgrades.findUnique({
      where: {
        id: +req.params.id
      }
    });
    res.status(200).json(upgrades);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// update upgrades
router.patch('/:id', async function(req, res, next) {
  try {
    const upgrades = await prisma.weapon_upgrades.updateMany({
      data: req.body,
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.status(200).json(upgrades);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// delete upgrades
router.delete('/:id', async function(req, res, next) {
  try {
    const upgrades = await prisma.weapon_upgrades.delete({
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.status(200).json(upgrades);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// create upgrades
router.post('/', async function(req, res, next) {
  try {
    const upgrades = await prisma.weapon_upgrades.create({
      data: req.body,
    });
    res.status(201).json(upgrades);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

module.exports = router;
