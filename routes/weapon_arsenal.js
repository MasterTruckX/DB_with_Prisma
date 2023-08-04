const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// getAll arsenal
router.get('/', async function(req, res, next) {
  try {
    const arsenal = await prisma.weapon_arsenal.findMany();
    res.status(200).json(arsenal);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// getById arsenal
router.get('/:id', async function(req, res, next) {
  try {
    const arsenal = await prisma.weapon_arsenal.findUnique({
      where: {
        id: +req.params.id
      }
    });
    res.status(200).json(arsenal);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// update arsenal
router.patch('/:id', async function(req, res, next) {
  try {
    const arsenal = await prisma.weapon_arsenal.updateMany({
      data: req.body,
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.status(200).json(arsenal);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// delete arsenal
router.delete('/:id', async function(req, res, next) {
  try {
    const arsenal = await prisma.weapon_arsenal.delete({
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.status(200).json(arsenal);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// create arsenal
router.post('/', async function(req, res, next) {
  try {
    const arsenal = await prisma.weapon_arsenal.create({
      data: req.body,
    });
    res.status(201).json(arsenal);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

module.exports = router;
