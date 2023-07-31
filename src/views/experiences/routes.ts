import { RouteRecordRaw } from 'vue-router';

import MainLayout from '@/common/layouts/MainLayout.vue';
import RedPazNew from '@/views/experiences/RedPazNew.vue';
import Experiences from '@/views/experiences/Experiences.vue';
import ThematicAreas from '@/views/experiences/ThematicAreas.vue';

import ENEP from '@/views/experiences/activities/ENEP.vue';
import ActivitiesRedPaz from '@/views/experiences/activities/ActivitiesRedPaz.vue';
import MiniserieActivity from '@/views/experiences/activities/MiniserieActivity.vue';
import PodcastActivities from '@/views/experiences/activities/PodcastActivities.vue';
import DiscussionActivities from '@/views/experiences/activities/DiscussionActivities.vue';

const experienceRoutes: RouteRecordRaw[] = [
  {
    path: '/experiencias-de-paz',
    name: 'Experiencias de Paz',
    component: MainLayout,
    redirect: { name: 'Experiences' },
    meta: {
      alias: 'Experiencias de Paz',
      imageSrc: '/images/experiences/main-banner.png',
    },
    children: [
      {
        path: '',
        name: 'Experiences',
        meta: { alias: 'Experiencias de Paz' },
        component: Experiences,
      },
      {
        path: 'areas-tematicas/:area',
        name: 'ThematicAreas',
        meta: { alias: 'Áreas temáticas' },
        component: ThematicAreas,
      },
      {
        path: 'areas-tematicas/:area/:id',
        name: 'RedPazNew',
        meta: { alias: 'Proyecto' },
        component: RedPazNew,
      },
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
            meta: {
              alias: 'Conversatorios',
              bannerBg: '#FECB38',
              imageSrc: '/images/experiences/discussions/main-banner.png',
            },
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
