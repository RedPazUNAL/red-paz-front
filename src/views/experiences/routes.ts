import { RouteRecordRaw } from 'vue-router';

import ExperiencesWrapper from '@/views/experiences/ExperiencesWrapper.vue';

import ENEP from '@/views/experiences/activities/ENEP.vue';
import ActivitiesRedPaz from '@/views/experiences/activities/ActivitiesRedPaz.vue';
import MiniserieActivity from '@/views/experiences/activities/MiniserieActivity.vue';
import PodcastActivities from '@/views/experiences/activities/PodcastActivities.vue';
import DiscussionActivities from '@/views/experiences/activities/DiscussionActivities.vue';

const experienceRoutes: RouteRecordRaw[] = [
  {
    path: '/experiencias-de-paz',
    name: 'Experiencias de Paz',
    component: ExperiencesWrapper,
    meta: { alias: 'Experiencias de Paz' },
    children: [
      {
        path: 'iniciativas-redpaz-unal',
        name: 'Iniciativas RedPaz Unal',
        component: ActivitiesRedPaz,
        meta: { alias: 'Iniciativas RedPaz Unal' },
        children: [
          {
            path: 'conversatorios',
            name: 'Conversatorios \nterritoriales y temáticos',
            component: DiscussionActivities,
            meta: { alias: 'Conversatorios' },
          },
          {
            path: 'podcast',
            name: 'Podcast',
            component: PodcastActivities,
            meta: { alias: 'Podcast' },
          },
          {
            path: 'miniserie',
            name: 'Miniserie: La Paz en Foco',
            component: MiniserieActivity,
            meta: { alias: 'Miniserie' },
          },
          {
            path: 'enep-2020',
            name: 'Encuentro Nacional de Experiencias de Paz 2020',
            component: ENEP,
            meta: { alias: 'ENEP 2020' },
          },
        ],
      },
    ],
  },
];

export default experienceRoutes;
