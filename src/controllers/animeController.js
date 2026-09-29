const animeService = require("../services/animeService");

async function list(req, res, next) {
  try {
    const result = await animeService.list(req.user.id, req.query);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function manageList(req, res, next) {
  try {
    const result = await animeService.manageList(req.user.id, req.query);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function getOne(req, res, next) {
  try {
    const result = await animeService.getOne(req.user.id, req.params.id);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const result = await animeService.create(req.user.id, req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const result = await animeService.update(
      req.user.id,
      req.params.id,
      req.body,
    );
    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    await animeService.remove(req.user.id, req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

async function addEpisode(req, res, next) {
  try {
    const result = await animeService.addEpisode(
      req.user.id,
      req.params.id,
      req.body,
    );
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
}

async function updateEpisode(req, res, next) {
  try {
    const result = await animeService.updateEpisode(
      req.user.id,
      req.params.id,
      req.params.episodeId,
      req.body,
    );
    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function removeEpisode(req, res, next) {
  try {
    await animeService.removeEpisode(
      req.user.id,
      req.params.id,
      req.params.episodeId,
    );
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

async function attachAuthor(req, res, next) {
  try {
    const result = await animeService.attachAuthor(
      req.user.id,
      req.params.id,
      req.params.authorId,
      req.body,
    );
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
}

async function detachAuthor(req, res, next) {
  try {
    await animeService.detachAuthor(
      req.user.id,
      req.params.id,
      req.params.authorId,
    );
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

async function getOwnRating(req, res, next) {
  try {
    const result = await animeService.getOwnRating(req.user.id, req.params.id);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function setOwnRating(req, res, next) {
  try {
    const result = await animeService.setOwnRating(
      req.user.id,
      req.params.id,
      req.body,
    );
    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function removeOwnRating(req, res, next) {
  try {
    await animeService.removeOwnRating(req.user.id, req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

async function getOwnStatus(req, res, next) {
  try {
    const result = await animeService.getOwnStatus(req.user.id, req.params.id);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function setOwnStatus(req, res, next) {
  try {
    const result = await animeService.setOwnStatus(
      req.user.id,
      req.params.id,
      req.body,
    );
    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function removeOwnStatus(req, res, next) {
  try {
    await animeService.removeOwnStatus(req.user.id, req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

async function getOwnFavorite(req, res, next) {
  try {
    const result = await animeService.getOwnFavorite(req.user.id, req.params.id);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function addFavorite(req, res, next) {
  try {
    const result = await animeService.addFavorite(req.user.id, req.params.id);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
}

async function removeFavorite(req, res, next) {
  try {
    await animeService.removeFavorite(req.user.id, req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

async function listFavorites(req, res, next) {
  try {
    const result = await animeService.listFavorites(req.user.id, req.query);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function incrementView(req, res, next) {
  try {
    const result = await animeService.incrementView(req.user.id, req.params.id);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function topViewed(req, res, next) {
  try {
    const result = await animeService.topViewed(req.user.id, req.query.limit);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function publicList(req, res, next) {
  try {
    const result = await animeService.publicList(req.query);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function publicGetBySlug(req, res, next) {
  try {
    const result = await animeService.publicGetBySlug(req.params.slug);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  list,
  manageList,
  topViewed,
  publicList,
  publicGetBySlug,
  incrementView,
  getOne,
  create,
  update,
  remove,
  addEpisode,
  updateEpisode,
  removeEpisode,
  attachAuthor,
  detachAuthor,
  getOwnRating,
  setOwnRating,
  removeOwnRating,
  getOwnStatus,
  setOwnStatus,
  removeOwnStatus,
  getOwnFavorite,
  addFavorite,
  removeFavorite,
  listFavorites,
};
