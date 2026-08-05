// js/registry.js — TG5 Maths Part II
import * as indices from './generators/indices.js';
import * as hcflcm from './generators/hcflcm.js';
import * as transposeI from './generators/transposeI.js';
import * as transposeII from './generators/transposeII.js';
import * as solve1 from './generators/solve1.js';
import * as quadratics from './generators/quadratics.js';
import * as simultaneous from './generators/simultaneous.js';
import * as logs from './generators/logs.js';
import * as graph from './generators/graph.js';
import * as trig from './generators/trig.js';
import * as nonratrig from './generators/nonratrig.js';
import * as conv from './generators/conv.js';
import * as sincosgraph from './generators/sincosgraph.js';
import * as areavol from './generators/areavol.js';
import * as differentiation from './generators/differentiation.js';
import * as integration from './generators/integration.js';
import * as stats from './generators/stats.js';

export const registry = {
  indices,
  hcflcm,
  transposeI,
  transposeII,
  solve1,
  quadratics,
  simultaneous,
  logs,
  graph,
  trig,
  nonratrig,
  conv,
  sincosgraph,
  areavol,
  differentiation,
  integration,
  stats,

  get(topic) {
    const gen = this[topic];
    if (!gen) throw new Error(`No generator for: ${topic}`);
    return gen;
  }
};

window.registry = registry;
