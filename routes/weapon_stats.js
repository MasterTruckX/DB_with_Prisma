const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// getAll stats
router.get('/', async function(req, res, next) {
  try {
    const stats = await prisma.weapon_stats.findMany();
    res.status(200).json(stats);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// getById stats
router.get('/:id', async function(req, res, next) {
  try {
    const stats = await prisma.weapon_stats.findUnique({
      where: {
        id: +req.params.id
      }
    });
    res.status(200).json(stats);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// update stats
router.patch('/:id', async function(req, res, next) {
  try {
    const stats = await prisma.weapon_stats.updateMany({
      data: req.body,
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.status(200).json(stats);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// delete stats
router.delete('/:id', async function(req, res, next) {
  try {
    const stats = await prisma.weapon_stats.delete({
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.status(200).json(stats);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// create stats
router.post('/', async function(req, res, next) {
  try {
    const stats = await prisma.weapon_stats.create({
      data: req.body,
    });
    res.status(201).json(stats);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

module.exports = router;
